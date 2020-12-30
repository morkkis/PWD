import { ICat } from '../../../../interfaces/cat.interface';

export default interface CardItemProps {
  data: ICat;
  events: CardItemEvents;
}

export interface CardItemEvents {
  onLikeClick(data: ICat): void;
  onRemoveClick(data: ICat): void;
}
