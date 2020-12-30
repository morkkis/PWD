import React from 'react';
import styles from './CardsView.module.scss';
import CardItem from './components/CardItem/CardItem';
import CatService from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import CardsViewProps from './CardsViewProps';
import CardsViewState from './CardsViewState';
import { Grid, GridCellProps, AutoSizer, Size } from 'react-virtualized';

export class CardsView extends React.Component<CardsViewProps, CardsViewState> {
  private catService: CatService = CatService.getInstance();
  private containerMargin = 20;
  state: CardsViewState = {
    catList: [],
    cardSize: 300,
    cardsInRaw: 4,
    metadata: {
      containerMargin: this.containerMargin,
      containerWidth: `calc(100% - ${this.containerMargin * 2}px)`,
      scrollerWidth: 17,
      gapSizeBetweenRows: 40,
    }
  }

  constructor(props: CardsViewProps) {
    super(props);
    this.bindAll();
  }

  private bindAll() {
    this.cellRenderer = this.cellRenderer.bind(this);
  }

  componentDidMount() {
    this.fetchCatList();
  }

  private fetchCatList() {
    this.catService.getCatList().then((catList: ICat[]) => {
      this.setState({
        catList,
      });
    });
  }

  private cellRenderer(data: GridCellProps) {
    const itemPosition = data.rowIndex * this.state.cardsInRaw + data.columnIndex;
    const catItem = this.state.catList[itemPosition];
    return catItem ? this.renderCardItem(data, catItem) : null;
  }
  
  private renderCardItem(data: GridCellProps, catItem: ICat) {
    return (
      <div key={data.key} style={data.style} className={styles.CardItemWrapper}>
        <CardItem data={catItem} />
      </div>
    );
  }

  render() {
    return (
      <AutoSizer>
        {(data: Size) => (
          <Grid {...this.getGridProps(data.width, data.height)} />
        )}
      </AutoSizer>
    );
  };

  private getGridProps(width: number, height: number) {
    const metadata = this.state.metadata;
    const catList: ICat[] = this.state.catList;
    const rowCount =  Math.ceil(catList.length / this.state.cardsInRaw);
    return {
      cellRenderer: this.cellRenderer,
      columnCount: this.state.cardsInRaw,
      columnWidth: (width - (metadata.containerMargin * 2) - metadata.scrollerWidth) / this.state.cardsInRaw,
      height: height,
      rowCount,
      rowHeight: this.state.cardSize + metadata.gapSizeBetweenRows,
      width: width,
      containerStyle: {
        width: metadata.containerWidth,
        maxWidth: metadata.containerWidth,
        margin: `${metadata.containerMargin}px`,
      },
    }
  }
}

export default CardsView;
