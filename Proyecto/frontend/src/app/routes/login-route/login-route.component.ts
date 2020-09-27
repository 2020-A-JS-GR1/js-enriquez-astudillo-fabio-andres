import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RolService } from 'src/app/services/http/rol.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-login-route',
  templateUrl: './login-route.component.html',
  styleUrls: ['./login-route.component.scss']
})
export class LoginRouteComponent implements OnInit {

  rutaRegistro = "/register"

  constructor(
    private _rolService: RolService,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void { }

  login(datos: User) {
    this._authService.login(datos.email, datos.password).then(
      usuario => {
        this._rolService.getRolesDeUsuario(usuario.id).subscribe(
          roles => {
            AuthService.userID = usuario.id + '';
            AuthService.roles = roles.map(n=>n.permiso);
            this._router.navigate(['/main', usuario.id]);
          }
        )
      }, 
      error => {
        console.error(error);
      }
    ).catch(
      e => {
        console.error(e);
      }
    )
    // this._userService.getUser(datos.email).subscribe(
    //   user => {
    //     if(user.length > 0) {
    //       this._rolService.getRolesDeUsuario(user[0].id).subscribe(
    //         roles => {
    //           AuthService.roles = roles.map( n => n.permiso);
    //           console.log(AuthService.roles);
    //           this._router.navigate(['/main']);
    //         },
    //         error => {
    //           console.error(error);
    //         }
    //       )
    //     } else {
    //       alert('No existe usuario, por favor verifique su email y password');
    //     }
    //   },
    //   error => {
    //     console.error(error);
    //   }
    // )
  }

}
