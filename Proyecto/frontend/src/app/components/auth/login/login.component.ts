import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  enviarCampos: EventEmitter<Object> = new EventEmitter<Object>();

  @Input() rutaDeRegistro: string;

  public email: string = "";
  public password: string = "";

  constructor() { }

  ngOnInit(): void {
    AuthService.roles = [5];
  }

  enviarLogin(form) {
    this.enviarCampos.emit({
      email: this.email,
      password: this.password
    })
  }
}
