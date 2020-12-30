import React from 'react';
import styles from './CardItem.module.scss';

export class CardItem extends React.Component {

  render() {
    return (
      <div className={["cf-card", styles.cfCard].join(' ')}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
      </div>
    );
  }
}

export default CardItem;
