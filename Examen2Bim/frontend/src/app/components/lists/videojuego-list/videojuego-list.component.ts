import { Component, Input, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/models/videojuego';

@Component({
  selector: 'app-videojuego-list',
  templateUrl: './videojuego-list.component.html',
  styleUrls: ['./videojuego-list.component.scss']
})
export class VideojuegoListComponent implements OnInit {
  
  @Input() videojuego: Videojuego;
  
  constructor() { }

  ngOnInit(): void {
  }

}
