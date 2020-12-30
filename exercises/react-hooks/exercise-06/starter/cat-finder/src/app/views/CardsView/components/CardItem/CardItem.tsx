import React from 'react';
import styles from './CardItem.module.scss';
import CardItemProps from './CardItemProps';
import { ICat } from '../../../../interfaces/cat.interface';

const CardItem: React.FC<CardItemProps> = (props: CardItemProps) => {
  function renderCardHeader() {
    const data: ICat = props.data;
    return (
      <div className={["cf-card__head", styles.cfCardHead].join(' ')}>
        <button
          className={[`cf-card__button cf-card__button--like ${data.like ? 'cf-card__button--active' : ''}`, styles.cfCardHead].join(' ')}>
          <i className="fas fa-heart"/>
        </button>
        <div className={["cf-cf_card__name", styles.cfCardName].join(' ')}>{data.name}</div>
        <button className={["cf-card__button cf_card_button--delete"].join(' ')}>
          <i className="fas fa-trash"/>
        </button>
      </div>
    );
  }

  function renderCardPhoto() {
    const data: ICat = props.data;
    return (
      <div className={styles.cfCardPhotoContainer}>
        <img
          src={data.imgUrl}
          alt=""
          className={styles.cfCardPhoto} />
      </div>
    );
  }

  function renderCardAbstract() {
    const data: ICat = props.data;
    return (
      <div>
        {renderCardBreed()}
        {renderCardAbstractItem('Age', data.age)}
        {renderCardAbstractItem('Coat', data.coat)}
      </div>
    );
  }

  function renderCardBreed() {
    const { data } = props;
    return (
      <div className="cf-card__breed">
        {data.breed}
        <i className={['fas', data.gender === 'Male' ? "fa-mars" : "fa-venus"].join(' ')} />
      </div>
    );
  }

  function renderCardAbstractItem(label: string, value: string | number) {
    return (
      <div className={styles.cfCardAbstractItem}>
        <div className="cf-card__label">{label}</div>
        <div className="cf-card__value">{value}</div>
      </div>
    );
  }
  return (
    <div className={["cf-card", styles.cfCard].join(' ')}>
      {renderCardHeader()}
      {renderCardPhoto()}
      {renderCardAbstract()}
    </div>
  );
};

export default CardItem;
