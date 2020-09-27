import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/usuario';
import { RolService } from 'src/app/services/http/rol.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-register-route',
  templateUrl: './register-route.component.html',
  styleUrls: ['./register-route.component.scss']
})
export class RegisterRouteComponent implements OnInit {

  buttonTextCrear = "Crear";

  constructor(
    private readonly _userService: UserService,
    private readonly _rolService: RolService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void { }

  crearUsuario(usuario: User) {
    this._rolService.getRol('Cliente').subscribe(
      rol => {
        if(rol.length > 0) {
          usuario.roles = [rol[0].id];
          this._userService.createUser(usuario).subscribe(
            user => {
              alert('Usuario creado con éxito!');
              this._router.navigate(['/login']);
            }, 
            error => {
              console.error(error);
            }
          )
        } else {
          console.error('Rol de cliente no se encuentra en el servidor, por favor verifique que el servidor esté funcionando correctamente');
        }
      }, 
      error => {
        console.error(error);
      }
    )
    

  }

}
