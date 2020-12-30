import React, { useEffect, useState } from 'react';
import styles from './CardsView.module.scss';
import CardItem from './components/CardItem/CardItem';
import CatService from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import CardsViewProps from './CardsViewProps';
import { CardsViewMetadata } from './CardsViewState';
import { Grid, GridCellProps, AutoSizer, Size } from 'react-virtualized';

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

  const didMount = () => {
    function fetchCatList() {
      const catService: CatService = CatService.getInstance();
      catService.getCatList().then(setCatList);
    }

    fetchCatList();
  }

  useEffect(didMount, []);

  function cellRenderer(data: GridCellProps) {
    const itemPosition = data.rowIndex * cardsInRaw + data.columnIndex;
    const catItem = catList[itemPosition];
    return catItem ? renderCardItem(data, catItem) : null;
  }

  function renderCardItem(data: GridCellProps, catItem: ICat) {
    return (
      <div key={data.key} style={data.style} className={styles.CardItemWrapper}>
        <CardItem data={catItem}/>
      </div>
    );
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
