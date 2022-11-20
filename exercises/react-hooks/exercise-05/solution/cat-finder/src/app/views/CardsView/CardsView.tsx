import { useEffect, useState } from 'react';
import styles from './CardsView.module.scss';
import { CardItem } from './components/CardItem';
import { catService } from '../../services/cat.service';
import { ICat } from '../../interfaces/cat.interface';

export const CardsView: React.FC = () => {
    const [catList, setCatList] = useState<ICat[]>([]);

    useEffect(() => {
        catService.getCatList().then(setCatList);
    }, []);

    return (
      <div className={styles.CardList}>
          {catList.map((catItem: ICat, index: number) => <CardItem key={index} data={catItem} />)}
      </div>
    );
};
