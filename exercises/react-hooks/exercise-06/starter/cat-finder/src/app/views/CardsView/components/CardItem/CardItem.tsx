import React from 'react';
import cn from 'classnames';
import styles from './CardItem.module.scss';
import { ICat } from '../../../../interfaces/cat.interface';

export interface CardItemProps {
  data: ICat;
}

export const CardItem: React.FC<CardItemProps> = ( {data} : CardItemProps) => {
  function renderCardHeader() {
    return (
      <div className={cn('cf-card__head', styles.cfCardHead)}>
        <button
          className={cn('cf-card__button', 'cf-card__button--like', {'cf-card__button--active': data.like}, styles.cfCardHead)}>
          <i className="fas fa-heart"/>
        </button>
        <div className={cn('cf-cf_card__name', styles.cfCardName)}>{data.name}</div>
        <button className={cn('cf-card__button cf_card_button--delete')}>
          <i className="fas fa-trash"/>
        </button>
      </div>
    );
  }

  function renderCardPhoto() {
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
    return (
      <div>
        {renderCardBreed()}
        {renderCardAbstractItem('Age', data.age)}
        {renderCardAbstractItem('Coat', data.coat)}
      </div>
    );
  }

  function renderCardBreed() {
    return (
      <div className="cf-card__breed">
        {data.breed}
        <i className={cn('fas', data.gender === 'Male' ? 'fa-mars' : 'fa-venus')} />
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
    <div className={cn('cf-card', styles.cfCard)}>
      {renderCardHeader()}
      {renderCardPhoto()}
      {renderCardAbstract()}
    </div>
  );
};
