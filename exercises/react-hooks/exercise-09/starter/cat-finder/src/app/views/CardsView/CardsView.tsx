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

  function cellRenderer(cardsInRaw: number, data: GridCellProps) {
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

  function getGridProps(width: number, height: number, isScrolling: boolean) {
    const cardsInRaw = calcCardsInRaw();
    const rowCount = Math.ceil(catList.length / cardsInRaw);
    return {
      cellRenderer: cellRenderer.bind(undefined, cardsInRaw),
      columnCount: cardsInRaw,
      columnWidth: (width - (metadata.containerMargin * 2) - metadata.scrollerWidth) / cardsInRaw,
      height: height,
      rowCount,
      isScrolling,
      rowHeight: cardSize + metadata.gapSizeBetweenRows,
      width: width,
      containerStyle: {
        width: metadata.containerWidth,
        maxWidth: metadata.containerWidth,
        margin: `${metadata.containerMargin}px`,
      },
    }
  }

  function calcCardsInRaw(): number {
    const viewWidth = window.innerWidth;
    return viewWidth >= 1025 ? 4 :
      viewWidth >= 729 ? 2 : 1;
  }

  let forceGridRerenderOnResize = false;
  return (
    <AutoSizer>
      {(data: Size) => {
        const isScrolling = forceGridRerenderOnResize;
        forceGridRerenderOnResize = true;
        return <Grid {...getGridProps(data.width, data.height, isScrolling)} />
      }}
    </AutoSizer>
  );
};

export default CardsView;
