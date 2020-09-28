import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego } from 'src/app/models/videojuego';
import { VideojuegoService } from 'src/app/services/videojuego.service';

@Component({
  selector: 'app-nuevo-videojuego',
  templateUrl: './nuevo-videojuego.component.html',
  styleUrls: ['./nuevo-videojuego.component.scss']
})
export class NuevoVideojuegoComponent implements OnInit {

  public consolaID: string;

  constructor(
    private readonly videojuegoService: VideojuegoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    this.route.paramMap.subscribe(
      param => {
        this.consolaID = param.get('consola');
      }
    )
  }

  crear(videojuego: Videojuego) {
    this.videojuegoService.addVideojuego(videojuego).subscribe(
      videojuego => {
        alert('Videojuego creado con éxito');
        this.router.navigate(['/consola', this.consolaID]);
      },
      error => {
        console.error(error);
      }
    )
  }


}
