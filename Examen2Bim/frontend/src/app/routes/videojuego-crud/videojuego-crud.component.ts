import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consola } from 'src/app/models/consola';
import { Videojuego } from 'src/app/models/videojuego';
import { ConsolaService } from 'src/app/services/consola.service';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-videojuego-crud',
  templateUrl: './videojuego-crud.component.html',
  styleUrls: ['./videojuego-crud.component.scss']
})
export class VideojuegoCrudComponent implements OnInit {

  private consolaID: string;
  public consola: Consola;
  public videojuegos: Videojuego[];
  public videojuegosNombres: string[];
  public selectedVG: Videojuego;

  constructor(
    private readonly videojuegoService: VideojuegoService,
    private readonly consolaService: ConsolaService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        this.consolaID = param.get('consola');
        this.consolaService.getConsola(this.consolaID).subscribe(
          consola => {
            this.consola = consola;
          },
          error => {
            console.error(error);
          }
        )
        this.videojuegoService.getVideojuegos(this.consolaID).subscribe(
          videojuegos => {
            this.videojuegos = videojuegos;
            this.videojuegosNombres = this.videojuegos.map(n=>n.Nombre);
          },
          error => {
            console.error(error);
          }
        )
      }
    )
  }

  crear() {
    this.router.navigate(['/consola', this.consolaID, 'videojuego', 'nuevo']);
  }
  
  editar(videojuegoNombre: string) {
    const videojuegoID: number = this.videojuegos.find(n=>n.Nombre===videojuegoNombre).id;
    this.router.navigate(['/consola', this.consolaID, 'videojuego', videojuegoID, 'editar']);
  }
  
  ver(videojuegoNombre: string) {
    this.selectedVG = this.videojuegos.find(n=>n.Nombre===videojuegoNombre);
  }
  
  eliminar(videojuegoNombre: string) {
    const videojuegoID: number = this.videojuegos.find(n=>n.Nombre===videojuegoNombre).id;
    this.videojuegoService.deleteVideojuego(videojuegoID).subscribe(
      videojuego => {
        alert('Videojuego eliminado correctamente');
        const index = this.videojuegos.findIndex(n=>n.Nombre===videojuego.Nombre);
        this.videojuegos.splice(index, 1);
        this.videojuegosNombres = this.videojuegos.map(n=>n.Nombre);
      },
      error => {
        console.error(error);
      }
    )
  }

  buscar(busqueda: string) {
    this.videojuegosNombres = this.videojuegos.map( n => {
      if(n.Nombre.includes(busqueda)) {
        return n.Nombre;
      }
    })
  }
  
  limpiarBusqueda() {
    this.videojuegosNombres = this.videojuegos.map(n=>n.Nombre);
  }

  regresar() {
    this.router.navigate(['/consola']);
  }

}
