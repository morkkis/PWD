import { ICat } from '../../interfaces/cat.interface';

export default interface CardsViewState {
  catList: ICat[];
  cardSize: number;
  metadata: {
    scrollerWidth: number,
    containerMargin: number,
    containerWidth: string,
    gapSizeBetweenRows: number,
  }
}
