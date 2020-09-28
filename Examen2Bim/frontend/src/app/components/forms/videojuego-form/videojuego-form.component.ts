import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Videojuego } from 'src/app/models/videojuego';

@Component({
  selector: 'app-videojuego-form',
  templateUrl: './videojuego-form.component.html',
  styleUrls: ['./videojuego-form.component.scss']
})
export class VideojuegoFormComponent implements OnInit {

  public videojuego: Videojuego;
  @Input() public videojuegoInput: Videojuego;
  @Input() public buttonName: string = "Enviar";
  @Input() public consolaID: number;
  @Output() public onSubmitForm: EventEmitter<Videojuego> = new EventEmitter<Videojuego>();

  constructor() { }

  ngOnInit(): void {
    if(this.videojuegoInput) {
      this.videojuego = this.videojuegoInput;
    } else {
      this.videojuego = {
        Nombre: "",
        Fabricante: "",
        Precio: 0,
        soloDigital: false,
        consola: 0
      }
      this.videojuego.consola = this.consolaID;
    }
  }
  
  enviarDatos() {
    this.videojuego.consola = this.consolaID;
    this.onSubmitForm.emit(this.videojuego);
  }

}
