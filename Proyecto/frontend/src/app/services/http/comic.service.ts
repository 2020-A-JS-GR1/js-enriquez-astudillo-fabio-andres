import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from 'src/app/models/comic';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  url = "http://localhost:1337";
  static carrito: Comic[] = [];

  constructor(
    private readonly _http: HttpClient
  ) { }

  getComics(): Observable<Comic[]> {
    return this._http.get<Comic[]>(this.url + '/Comic');
  }

  getComic(id: string): Observable<Comic> {
    return this._http.get<Comic>(this.url + '/Comic?id=' + id);
  }
  
  addComic(comic: Comic) {
    return this._http.post<Comic[]>(this.url + '/Comic', comic);
  }

  editComic(comic: Comic) {
    return this._http.put<Comic[]>(this.url + '/Comic/' + comic.id, comic);
  }

}
