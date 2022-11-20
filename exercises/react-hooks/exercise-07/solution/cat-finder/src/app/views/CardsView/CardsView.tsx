import { useEffect, useRef, useState } from 'react';
import styles from './CardsView.module.scss';
import { CardItem, CardItemProps } from './components/CardItem';
import { catService } from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import { Grid as _Grid, GridProps, GridCellProps, AutoSizer as _AutoSizer, AutoSizerProps, Size } from 'react-virtualized';
import { toast } from 'react-toastify';

// Fix issue 'AutoSizer' cannot be used as a JSX component
// looks like @types/react-virtualized doesn't support react 18
const AutoSizer = _AutoSizer as unknown as React.FC<AutoSizerProps>;
const Grid = _Grid as unknown as React.FC<GridProps>;

interface CardsViewMetadata {
  scrollerWidth: number,
  containerMargin: number,
  containerWidth: string,
  gapSizeBetweenRows: number,
  cardSize: number,
}

const containerMargin: number = 20;
const metadata: CardsViewMetadata = {
  containerMargin,
  containerWidth: `calc(100% - ${containerMargin * 2}px)`,
  scrollerWidth: 17,
  gapSizeBetweenRows: 40,
  cardSize: 300,
};

export const CardsView: React.FC = () => {
  const [catList, setCatList] = useState<ICat[]>([]);
  const cardsInRaw = useRef<number>(4);

  useEffect(() => {
    catService.getCatList().then(setCatList);
  }, []);

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

  function cellRenderer(data: GridCellProps): React.ReactNode {
    const itemPosition = data.rowIndex * cardsInRaw.current + data.columnIndex;
    const catItem = catList[itemPosition];
    return catItem ? renderCardItem(data, catItem) : null;
  }

  function renderCardItem(cellData: GridCellProps, data: ICat): React.ReactNode {
    const props: CardItemProps = { data, onLikeClick, onRemoveClick };
    return _renderCardItem(cellData, props);
  }

  function getGridProps(width: number, height: number): GridProps {
    const rowCount: number = Math.ceil(catList.length / cardsInRaw.current);
    const rowHeight: number = metadata.cardSize + metadata.gapSizeBetweenRows;
    const columnWidth: number = (width - (metadata.containerMargin * 2) - metadata.scrollerWidth) / cardsInRaw.current;
    return {
      height,
      width,
      rowCount,
      rowHeight,
      columnWidth,
      cellRenderer,
      columnCount: cardsInRaw.current,
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

function _renderCardItem(cellData: GridCellProps, props: CardItemProps): React.ReactNode {
  return (
    <div key={cellData.key} style={cellData.style} className={styles.CardItemWrapper}>
      <CardItem {...props} />
    </div>
  );
}

function showToastErrorMessage(message: string) {
  toast.error(message);
}
