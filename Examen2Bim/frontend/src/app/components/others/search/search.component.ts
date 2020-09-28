import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() onBuscar: EventEmitter<string> = new EventEmitter<string>();
  public busqueda: string;

  constructor() { }

  ngOnInit(): void {
  }

  enviarBusqueda() {
    this.onBuscar.emit(this.busqueda);
  }

}
