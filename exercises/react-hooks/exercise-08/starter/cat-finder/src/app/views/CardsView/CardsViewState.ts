import { ICat } from '../../interfaces/cat.interface';

export interface CardsViewState {
  catList: ICat[];
  cardSize: number;
  cardsInRaw: number;
  metadata: CardsViewMetadata
}

export interface CardsViewMetadata {
  scrollerWidth: number,
  containerMargin: number,
  containerWidth: string,
  gapSizeBetweenRows: number,
}
