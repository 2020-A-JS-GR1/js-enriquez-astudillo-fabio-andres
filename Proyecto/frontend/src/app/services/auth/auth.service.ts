import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/usuario';
import { UserService } from '../http/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static userID: string = '3';
  public static roles: number[] = [1,2,3];

  constructor(
    private readonly _userService: UserService
  ) { }

  crearRoles(user: User) {
    AuthService.roles = user.roles
  }

  login(email: string, password: string): Promise<User> {
    return new Promise(
      (res, req) => {
        this._userService.getUserCondition('email=' + email + '&' + 'password=' + password).subscribe(
          user => {
            if(user.length > 0) {
              res(user[0]);
            } else {
              req('No esiste usuariocon ese password y contraseña, vuelva a intentar');
            }
          },
          error => {
            req(error);
          }
        );
      }
    )
  }
}
