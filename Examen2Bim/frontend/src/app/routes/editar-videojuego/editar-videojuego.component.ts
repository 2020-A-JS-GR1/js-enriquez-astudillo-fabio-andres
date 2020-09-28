import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from 'src/app/models/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-editar-videojuego',
  templateUrl: './editar-videojuego.component.html',
  styleUrls: ['./editar-videojuego.component.scss']
})
export class EditarVideojuegoComponent implements OnInit {

  public consolaID: string;
  public videojuegoID: string;
  public videojuego: Videojuego;
  public datosCargados = false;

  constructor(
    private readonly videojuegoService: VideojuegoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        this.consolaID = param.get('consola');
        this.videojuegoID = param.get('videojuego');
        this.videojuegoService.getVideojuego(this.videojuegoID).subscribe(
          videojuego => {
            this.videojuego = videojuego;
            this.datosCargados = true;
          }
        )
      }
    )
  }

  editar(videojuego: Videojuego) {
    this.videojuegoService.editVideojuego(this.videojuegoID, videojuego).subscribe(
      videojuego => {
        alert('Videojuego editado con éxito');
        this.router.navigate(['/consola', this.consolaID]);
      },
      error => {
        console.error(error);
      }
    )
  }

  regresar() {
    this.router.navigate(['/consola', this.consolaID]);
  }
}
