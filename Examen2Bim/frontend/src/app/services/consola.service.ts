import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consola } from '../models/consola';

@Injectable({
  providedIn: 'root'
})
export class ConsolaService {

  private url = "http://localhost:1337";

  constructor(
    private readonly _http: HttpClient
  ) { }

  getConsolas(): Observable<Consola[]> {
    return this._http.get<Consola[]>(this.url + '/Consola')
  }
  
  getConsola(codigo: string | number): Observable<Consola> {
    return this._http.get<Consola>(this.url + '/Consola/' + codigo);
  }

  searchConsola(nombre: string): Observable<Consola[]> {
    return this._http.get<Consola[]>(this.url + '/Consola?nombre=' + nombre);
  }

  addConsola(consola: Consola): Observable<Consola> {
    return this._http.post<Consola>(this.url + '/Consola', consola);
  }

  editConsola(codigo: string | number, consola: Consola): Observable<Consola> {
    return this._http.put<Consola>(this.url + '/Consola/' + codigo, consola);
  }

  deleteConsola(codigo: string | number): Observable<Consola> {
    return this._http.delete<Consola>(this.url + '/Consola/' + codigo);
  }
}
