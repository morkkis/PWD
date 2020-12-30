import React from 'react';
import styles from './CardItem.module.scss';
import CardItemProps from './CardItemProps';
import CardItemState from './CardItemState';
import { ICat } from '../../../../interfaces/cat.interface';

export class CardItem extends React.Component<CardItemProps, CardItemState> {

  constructor(props: CardItemProps) {
    super(props);
    this.bindAll();
  }

  private bindAll() {
    this.onLikeClick = this.onLikeClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  private renderCardHeader() {
    const data: ICat = this.props.data;
    return (
      <div className={["cf-card__head", styles.cfCardHead].join(' ')}>
        <button onClick={this.onLikeClick}
                className={[`cf-card__button cf-card__button--like ${data.like ? 'cf-card__button--active' : ''}`, styles.cfCardHead].join(' ')}>
          <i className="fas fa-heart"/>
        </button>
        <div className={["cf-cf_card__name", styles.cfCardName].join(' ')}>{data.name}</div>
        <button onClick={this.onRemoveClick}
                className={["cf-card__button cf_card_button--delete"].join(' ')}>
          <i className="fas fa-trash"/>
        </button>
      </div>
    );
  }

  private onLikeClick() {
    this.props.events.onLikeClick(this.props.data);
  }

  private onRemoveClick() {
    this.props.events.onRemoveClick(this.props.data);
  }

  private renderCardPhoto() {
    const data: ICat = this.props.data;
    return (
      <div className={styles.cfCardPhotoContainer}>
        <img
          src={data.imgUrl}
          alt=""
          className={styles.cfCardPhoto}/>
      </div>
    );
  }

  private renderCardAbstract() {
    const data: ICat = this.props.data;
    return (
      <div>
        {this.renderCardBreed()}
        {this.renderCardAbstractItem('Age', data.age)}
        {this.renderCardAbstractItem('Coat', data.coat)}
      </div>
    );
  }

  private renderCardBreed() {
    const {data} = this.props;
    return (
      <div className="cf-card__breed">
        {data.breed}
        <i className={['fas', data.gender === 'Male' ? "fa-mars" : "fa-venus"].join(' ')}/>
      </div>
    );
  }

  private renderCardAbstractItem(label: string, value: string | number) {
    return (
      <div className={styles.cfCardAbstractItem}>
        <div className="cf-card__label">{label}</div>
        <div className="cf-card__value">{value}</div>
      </div>
    );
  }

  render() {
    return (
      <div className={["cf-card", styles.cfCard].join(' ')}>
        {this.renderCardHeader()}
        {this.renderCardPhoto()}
        {this.renderCardAbstract()}
      </div>
    );
  }
}

export default CardItem;
