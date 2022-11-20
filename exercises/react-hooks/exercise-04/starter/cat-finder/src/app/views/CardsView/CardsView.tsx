import styles from './CardsView.module.scss';
import { CardItem } from './components/CardItem';

export const CardsView: React.FC = () => (
  <div className={styles.CardList}>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
    <CardItem/>
  </div>
);
