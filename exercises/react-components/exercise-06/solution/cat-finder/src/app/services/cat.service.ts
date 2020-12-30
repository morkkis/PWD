import { ICat } from '../interfaces/cat.interface';

export default class CatService {
  static myInstance: CatService;

  static getInstance () {
    if (!CatService.myInstance) {
      CatService.myInstance = new CatService();
    }
    return this.myInstance;
  };

  getCatList(): Promise<ICat[]> {
    return fetch('api/getCatList').then(response => response.json() as unknown as ICat[]);
  }
}
