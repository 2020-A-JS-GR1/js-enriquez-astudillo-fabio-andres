import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-show-comic',
  templateUrl: './show-comic.component.html',
  styleUrls: ['./show-comic.component.scss']
})
export class ShowComicComponent implements OnInit {

  @Input() comic: Comic;
  @Input() actions: string[] = [];
  @Output() onActionClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  enviarAccion(action: string) {
    this.onActionClick.emit(action);
  }

}
