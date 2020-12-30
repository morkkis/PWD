import React from 'react';
import styles from './CardsView.module.scss';
import CardItem from './components/CardItem/CardItem';

const CardsView: React.FC = () => (
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

export default CardsView;
