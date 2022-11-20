import { ICat } from '../interfaces/cat.interface';

class CatService {

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

export const catService: CatService = new CatService();
