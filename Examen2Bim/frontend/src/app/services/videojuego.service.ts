import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Videojuego } from '../models/videojuego';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  private url = "http://localhost:1337";

  constructor(
    private readonly _http: HttpClient
  ) { }

  getVideojuegos(consolaID: string | number): Observable<Videojuego[]> {
    return this._http.get<Videojuego[]>(this.url + '/Consola/' + consolaID + '/videojuegos');
  }
  
  getVideojuego(codigo: string | number): Observable<Videojuego> {
    return this._http.get<Videojuego>(this.url + '/Videojuego/' + codigo);
  }

  searchVideojuego(nombre: string, consolaID: string | number): Observable<Videojuego[]> {
    return this._http.get<Videojuego[]>(this.url + '/Consola/' + consolaID + '/videojuegos?nombre=' + nombre);
  }

  addVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this._http.post<Videojuego>(this.url + '/Videojuego', videojuego);
  }

  editVideojuego(codigo: string | number, videojuego: Videojuego): Observable<Videojuego> {
    return this._http.put<Videojuego>(this.url + '/Videojuego/' + codigo, videojuego);
  }

  deleteVideojuego(codigo: string | number): Observable<Videojuego> {
    return this._http.delete<Videojuego>(this.url + '/Videojuego/' + codigo);
  }
}
