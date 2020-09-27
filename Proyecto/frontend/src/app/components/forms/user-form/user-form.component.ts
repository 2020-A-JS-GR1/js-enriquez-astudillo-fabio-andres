import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/usuario';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() buttonText: string;
  @Output() datos: EventEmitter<User> = new EventEmitter<User>()

  public name: string;
  public email: string;
  public password: string;
  public passwordConfirm: string;

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatos(form) {
    this.datos.emit({
      nombre: this.name,
      email: this.email,
      password: this.password
    })
  }

}
