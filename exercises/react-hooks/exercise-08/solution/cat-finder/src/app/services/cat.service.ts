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

  setLikeCat(id: number): Promise<Response | undefined> {
    const url: string = `api/addToFavorite/${id}`;
    const requestConfig: RequestInit = { method: 'PUT', body: null};
    return fetch(url, requestConfig).then(this.handleErrors);
  }

  removeLikeCat(id: number): Promise<Response | undefined> {
    const url: string = `api/deleteCat/${id}`;
    const requestConfig: RequestInit = { method: 'DELETE', body: null };
    return fetch(url, requestConfig).then(this.handleErrors);
  }

  private handleErrors(response: Response) {
    if (!response.ok) {
      throw response;
    }
    return response;
  }
}
