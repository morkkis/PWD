import React, { useEffect, useState } from 'react';
import styles from './CardsView.module.scss';
import CardItem from './components/CardItem/CardItem';
import CatService from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import CardsViewProps from './CardsViewProps';
import { CardsViewMetadata } from './CardsViewState';
import { Grid, GridCellProps, AutoSizer, Size } from 'react-virtualized';
import { toast } from 'react-toastify';

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
    const catItem = catList[itemPosition];
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
    setCatList((prevCatList: ICat[]) => prevCatList.map(item => item.id === itemToReplace.id ? itemToReplace : item));
  }

  function onRemoveClick(catItem: ICat) {
    removeItemFromList(catItem)
    const onError = handleRemoveClickError.bind(undefined, catItem);
    catService.removeLikeCat(catItem.id).then().catch(onError);
  }

  function removeItemFromList(catItem: ICat) {
    setCatList((prevCatList: ICat[]) => prevCatList.filter(item => item !== catItem));
  }

  function handleRemoveClickError(removedCat: ICat, error: Response) {
    console.warn(error);
    const mess = `Could remove ${removedCat.name} cat`;
    showToastErrorMessage(mess);
    restoreItemFromList(removedCat)
  }

  function restoreItemFromList(removedCat: ICat) {
    setCatList((prevCatList: ICat[]): ICat[] => {
      const newCatList = [...prevCatList, removedCat]
      newCatList.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
      return newCatList;
    });
  }

  function showToastErrorMessage(message: string) {
    toast.error(message);
  }

  function getGridProps(width: number, height: number) {
    const rowCount = Math.ceil(catList.length / cardsInRaw);
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
