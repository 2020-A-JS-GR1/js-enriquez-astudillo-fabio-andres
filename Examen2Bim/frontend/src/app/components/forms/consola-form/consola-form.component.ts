import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Consola } from 'src/app/models/consola';

@Component({
  selector: 'app-consola-form',
  templateUrl: './consola-form.component.html',
  styleUrls: ['./consola-form.component.scss']
})
export class ConsolaFormComponent implements OnInit {

  public consola: Consola;
  @Input() public consolaInput: Consola;
  @Input() public buttonName: string = "Enviar";
  @Output() public onSubmitForm: EventEmitter<Consola> = new EventEmitter<Consola>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.consolaInput);
    if(this.consolaInput) {
      this.consola = this.consolaInput;
    } else {
      this.consola = {
        Nombre: "",
        Fabricante: "",
        Generacion: 0,
        tieneSoporte: false
      }
    }
  }

  enviarDatos() {
    this.onSubmitForm.emit(this.consola);
  }
}
