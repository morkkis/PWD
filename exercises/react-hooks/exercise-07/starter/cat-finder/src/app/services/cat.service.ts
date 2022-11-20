import { ICat } from '../interfaces/cat.interface';

class CatService {

  getCatList(): Promise<ICat[]> {
    return fetch('api/getCatList').then(response => response.json() as unknown as ICat[]);
  }
}

export const catService: CatService = new CatService();
