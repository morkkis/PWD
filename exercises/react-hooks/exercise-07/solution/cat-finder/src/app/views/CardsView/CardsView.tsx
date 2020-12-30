import React, { useEffect, useState } from 'react';
import styles from './CardsView.module.scss';
import CardItem from './components/CardItem/CardItem';
import CatService from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import CardsViewProps from './CardsViewProps';
import { CardsViewMetadata } from './CardsViewState';
import { Grid, GridCellProps, AutoSizer, Size } from 'react-virtualized';
import { toast } from 'react-toastify';

let syncCatList: ICat[];
const CardsView: React.FC<CardsViewProps> = () => {
  const containerMargin = 20;
  const [catList, setCatList] = useState<ICat[]>([]);
  const [cardSize] = useState<number>(300);
  const [cardsInRaw] = useState<number>(4);
  const [metadata] = useState<CardsViewMetadata>({
    containerMargin,
    containerWidth: `calc(100% - ${containerMargin * 2}px)`,
    scrollerWidth: 17,
    gapSizeBetweenRows: 40,
  });
  syncCatList = catList;
  const catService: CatService = CatService.getInstance();

  const didMount = () => {
    function fetchCatList() {
      catService.getCatList().then(setCatList);
    }

    fetchCatList();
  }

  useEffect(didMount, [catService]);

  function cellRenderer(data: GridCellProps) {
    const itemPosition = data.rowIndex * cardsInRaw + data.columnIndex;
    const catItem = syncCatList[itemPosition];
    return catItem ? renderCardItem(data, catItem) : null;
  }

  function renderCardItem(data: GridCellProps, catItem: ICat) {
    return (
      <div key={data.key} style={data.style} className={styles.CardItemWrapper}>
        <CardItem {...getCardItemProps(catItem)} />
      </div>
    );
  }

  function getCardItemProps(data: ICat) {
    return {
      data,
      events: {
        onLikeClick,
        onRemoveClick,
      }
    }
  }

  function onLikeClick(catItem: ICat) {
    replaceItemInList({...catItem, like: !catItem.like});
    const onError = handleLikeClickError.bind(undefined, catItem);
    catService.setLikeCat(catItem.id).then().catch(onError);
  }

  function handleLikeClickError(catBeforeChange: ICat, error: Response) {
    console.warn(error);
    const mess = `Could not like ${catBeforeChange.name} cat`;
    showToastErrorMessage(mess);
    replaceItemInList({...catBeforeChange});
  }

  function replaceItemInList(itemToReplace: ICat) {
    const newCatList = syncCatList.map(item => item.id === itemToReplace.id ? itemToReplace : item);
    setCatList(newCatList);
  }

  function onRemoveClick(catItem: ICat) {
    const filteredCatList = syncCatList.filter(item => item !== catItem);
    setCatList(filteredCatList);
    const onError = handleRemoveClickError.bind(undefined, catItem);
    catService.removeLikeCat(catItem.id).then().catch(onError);
  }

  function handleRemoveClickError(removedCat: ICat, error: Response) {
    console.warn(error);
    const mess = `Could remove ${removedCat.name} cat`;
    showToastErrorMessage(mess);
    const newCatList = [...syncCatList, removedCat];
    newCatList.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    setCatList(newCatList);
  }

  function showToastErrorMessage(message: string) {
    toast.error(message);
  }

  function getGridProps(width: number, height: number) {
    const rowCount = Math.ceil(syncCatList.length / cardsInRaw);
    return {
      cellRenderer: cellRenderer,
      columnCount: cardsInRaw,
      columnWidth: (width - (metadata.containerMargin * 2) - metadata.scrollerWidth) / cardsInRaw,
      height: height,
      rowCount,
      rowHeight: cardSize + metadata.gapSizeBetweenRows,
      width: width,
      containerStyle: {
        width: metadata.containerWidth,
        maxWidth: metadata.containerWidth,
        margin: `${metadata.containerMargin}px`,
      },
    }
  }

  return (
    <AutoSizer>
      {(data: Size) => (
        <Grid {...getGridProps(data.width, data.height)} />
      )}
    </AutoSizer>
  );
};

export default CardsView;
