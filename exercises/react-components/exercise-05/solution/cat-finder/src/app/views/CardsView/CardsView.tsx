import React from 'react';
import styles from './CardsView.module.scss';
import CardItem from './components/CardItem/CardItem';
import CatService from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import CardsViewProps from './CardsViewProps';
import CardsViewState from './CardsViewState';

export class CardsView extends React.Component<CardsViewProps, CardsViewState> {
  private catService: CatService = CatService.getInstance();
  state: CardsViewState = {
    catList: [],
  }

  constructor(props: CardsViewProps) {
    super(props);
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

  render() {
    const catList: ICat[] = this.state.catList;
    return (
      <div className={styles.CardList}>
        {catList.map((catItem: ICat, index: number) => <CardItem key={index} data={catItem} />)}
      </div>
    );
  };
}

export default CardsView;
