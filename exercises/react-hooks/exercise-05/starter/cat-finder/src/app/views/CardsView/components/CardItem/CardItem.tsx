import React from 'react';
import cn from 'classnames';
import styles from './CardItem.module.scss';

export const CardItem: React.FC = () => {
  function renderCardHeader() {
    return (
      <div className={cn('cf-card__head', styles.cfCardHead)}>
        <button
          className={cn('cf-card__button cf-card__button--like cf-card__button--active', styles.cfCardHead)}>
          <i className="fas fa-heart"/>
        </button>
        <div className={cn('cf-cf_card__name', styles.cfCardName)}>Kitten</div>
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Gustav_chocolate.jpg/800px-Gustav_chocolate.jpg?1563861698903"
          alt=""
          className={styles.cfCardPhoto} />
      </div>
    );
  }

  function renderCardAbstract() {
    return (
      <div>
        {renderCardBreed()}
        {renderCardAbstractItem('Age', 12)}
        {renderCardAbstractItem('Coat', 'Short')}
      </div>
    );
  }

  function renderCardBreed() {
    return (
      <div className="cf-card__breed">
        Abyssinian
        <i className="fas fa-venus" />
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
