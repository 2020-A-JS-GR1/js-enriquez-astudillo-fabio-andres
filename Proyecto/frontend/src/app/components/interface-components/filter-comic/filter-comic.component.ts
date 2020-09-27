import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-comic',
  templateUrl: './filter-comic.component.html',
  styleUrls: ['./filter-comic.component.scss']
})
export class FilterComicComponent implements OnInit {

  @Input() generos: string[] = [];
  @Output() onSelectGenero: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {}

  cambioSelect(value) {
    this.onSelectGenero.emit(value)
  }


}
