import React from 'react';
import styles from './CardItem.module.scss';

const CardItem: React.FC = () => (
  <div className={["cf-card", styles.cfCard].join(' ')}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
  </div>
);

export default CardItem;
