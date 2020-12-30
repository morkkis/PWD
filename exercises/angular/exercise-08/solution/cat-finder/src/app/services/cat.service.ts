import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICat } from '../interfaces/cat.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) { }

  getCatList(): Observable<ICat[]> {
    return this.http.get<ICat[]>('api/getCatList');
  }

  setLikeCat(id: number) {
    return this.http.put(`/api/addToFavorite/${id}`, null);
  }

  removeLikeCat(id: number) {
    return this.http.delete(`/api/deleteCat/${id}`);
  }
}
