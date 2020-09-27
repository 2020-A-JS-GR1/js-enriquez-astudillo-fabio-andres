import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic-form',
  templateUrl: './comic-form.component.html',
  styleUrls: ['./comic-form.component.scss']
})
export class ComicFormComponent implements OnInit {

  @Input() comic: Comic;
  @Input() buttonName: string = 'Enviar';
  @Output() onFormSubmit: EventEmitter<Comic> = new EventEmitter<Comic>();

  comicModelo: Comic;

  constructor() { }

  ngOnInit(): void {
    console.log(this.comic);
    if(this.comic) {
      this.comicModelo = this.comic;
    } else {
      this.comicModelo = {
        titulo: "",
        autor: "",
        genero: "DC",
        precio: 0,
        img: "",
        estado: "Disponible"
      };
    }
  }

  enviarDatos() {
    this.onFormSubmit.emit(this.comicModelo);
  }

}
