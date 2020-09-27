import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:1337"

  constructor(
    private _HttpClient: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this._HttpClient.get<User[]>(this.url + '/Usuario');
  }

  getUser(email: string): Observable<User[]> {
    return this._HttpClient.get<User[]>(this.url + '/Usuario' + '?email=' + email);
  }

  getUserCondition(condition: string): Observable<User[]> {
    return this._HttpClient.get<User[]>(this.url + '/Usuario' + '?' + condition);
  }
  
  createUser(user: User): Observable<User[]> {
    return this._HttpClient.post<User[]>(this.url + '/Usuario', user);
  }


}
