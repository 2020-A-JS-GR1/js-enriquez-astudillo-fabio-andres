import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: string[] = [];
  @Output() onSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  emitVer(item) {
    this.onSelected.emit(item);      
  }

  emitEditar(item) {
    this.onEdit.emit(item);    
  }

  emitEliminar(item) {
    this.onDelete.emit(item);    
  }
}
