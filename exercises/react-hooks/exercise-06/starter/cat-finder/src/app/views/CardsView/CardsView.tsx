import React, { useEffect, useState } from 'react';
import styles from './CardsView.module.scss';
import CardItem from './components/CardItem/CardItem';
import CatService from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';
import CardsViewProps from './CardsViewProps';

const CardsView: React.FC<CardsViewProps> = () => {
    const [catList, setCatList] = useState<ICat[]>([]);

    const didMount = () => {
        function fetchCatList() {
            const catService: CatService = CatService.getInstance();
            catService.getCatList().then(setCatList);
        }
        fetchCatList();
    }

    useEffect(didMount, []);

    return (
      <div className={styles.CardList}>
          {catList.map((catItem: ICat, index: number) => <CardItem key={index} data={catItem} />)}
      </div>
    );
};

export default CardsView;
