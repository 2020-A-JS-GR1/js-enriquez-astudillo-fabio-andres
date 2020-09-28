import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consola } from 'src/app/models/consola';
import { ConsolaService } from 'src/app/services/consola.service';

@Component({
  selector: 'app-editar-consola',
  templateUrl: './editar-consola.component.html',
  styleUrls: ['./editar-consola.component.scss']
})
export class EditarConsolaComponent implements OnInit {

  private consolaID: string;
  public consola: Consola;
  public datosCargados = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly consolaService: ConsolaService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => {
        this.consolaID = param.get('consola');
        this.consolaService.getConsola(this.consolaID).subscribe(
          consola => {
            this.consola = consola;
            this.datosCargados = true;
          },
          error => {
            console.error(error);
          }
        ) 
      }
    )
  }

  editar(consola: Consola) {
    this.consolaService.editConsola(this.consolaID, consola).subscribe(
      consola => {
        alert('Consola editada con éxito');
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
