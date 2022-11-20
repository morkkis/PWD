import { useEffect, useRef, useState } from 'react';
import styles from './CardsView.module.scss';
import { CardItem } from './components/CardItem';
import { catService } from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import { Grid as _Grid, GridProps, GridCellProps, AutoSizer as _AutoSizer, AutoSizerProps, Size } from 'react-virtualized';

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

  function cellRenderer(data: GridCellProps): React.ReactNode {
    const itemPosition = data.rowIndex * cardsInRaw.current + data.columnIndex;
    const catItem = catList[itemPosition];
    return catItem ? renderCardItem(data, catItem) : null;
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

function renderCardItem(data: GridCellProps, catItem: ICat): React.ReactNode {
  return (
    <div key={data.key} style={data.style} className={styles.CardItemWrapper}>
      <CardItem data={catItem}/>
    </div>
  );
}
