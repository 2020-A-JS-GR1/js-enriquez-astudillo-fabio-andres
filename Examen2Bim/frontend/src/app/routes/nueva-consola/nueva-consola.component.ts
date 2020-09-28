import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consola } from 'src/app/models/consola';
import { ConsolaService } from 'src/app/services/consola.service';

@Component({
  selector: 'app-nueva-consola',
  templateUrl: './nueva-consola.component.html',
  styleUrls: ['./nueva-consola.component.scss']
})
export class NuevaConsolaComponent implements OnInit {

  constructor(
    private readonly consolaService: ConsolaService,
    private readonly router: Router
  ) { }

  ngOnInit(): void { }

  crear(consola: Consola) {
    this.consolaService.addConsola(consola).subscribe(
      consola => {
        alert('Consola creada con éxito');
        this.router.navigate(['/consola']);
      },
      error => {
        console.error(error);
      }
    )
  }
  
  regresar() {
    this.router.navigate(['/consola'])
  }

}
