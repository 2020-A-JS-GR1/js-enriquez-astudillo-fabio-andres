import { Component, Input, OnInit } from '@angular/core';
import { Consola } from 'src/app/models/consola';

@Component({
  selector: 'app-consola-list',
  templateUrl: './consola-list.component.html',
  styleUrls: ['./consola-list.component.scss']
})
export class ConsolaListComponent implements OnInit {

  @Input() consola: Consola;

  constructor() { }

  ngOnInit(): void {
  }

}
