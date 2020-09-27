import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from 'src/app/models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url = "http://localhost:1337";

  constructor(
    private _HttpClient: HttpClient
  ) { }

  getRol(nombre: string): Observable<Rol[]> {
    return this._HttpClient.get<Rol[]>(this.url + '/Rol' + '?nombre=' + nombre);
  }  
  
  getRolesDeUsuario(id: number): Observable<Rol[]> {
    return this._HttpClient.get<Rol[]>(this.url + '/Usuario/' + id + '/roles');
  }
}
