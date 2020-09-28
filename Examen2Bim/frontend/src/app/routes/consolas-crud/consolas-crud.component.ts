import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consola } from 'src/app/models/consola';
import { ConsolaService } from 'src/app/services/consola.service';

@Component({
  selector: 'app-consolas-crud',
  templateUrl: './consolas-crud.component.html',
  styleUrls: ['./consolas-crud.component.scss']
})
export class ConsolasCrudComponent implements OnInit {

  public consolas: Consola[];
  public consolasNombres: string[];

  constructor(
    private readonly consolaService: ConsolaService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.consolaService.getConsolas().subscribe(
      consolas => {
        this.consolas = consolas
        this.consolasNombres = this.consolas.map(n=>n.Nombre);
      },
      error => {
        console.error(error);
      }
    )
  }

  crear() {
    this.router.navigate(['/consola', 'nuevo']);
  }
  
  editar(consolaNombre: string) {
    const consolaID:number = this.consolas.find(n=>n.Nombre===consolaNombre).id;
    this.router.navigate(['/consola', consolaID + '', 'editar']);
  }
  
  ver(consolaNombre: string) {
    const consolaID:number = this.consolas.find(n=>n.Nombre===consolaNombre).id;
    this.router.navigate(['/consola', consolaID + '']);
  }
  
  eliminar(consolaNombre: string) {
    const consolaID:number = this.consolas.find(n=>n.Nombre===consolaNombre).id;
    this.consolaService.deleteConsola(consolaID).subscribe(
      consola => {
        alert('Consola eliminada correctamente');
        const index = this.consolas.findIndex(n=>n.Nombre===consola.Nombre);
        this.consolas.splice(index, 1);
        this.consolasNombres = this.consolas.map(n=>n.Nombre);
      },
      error => {
        console.error(error);
      }
    )
  }

  buscar(busqueda: string) {
    this.consolasNombres = [];
    this.consolasNombres = this.consolas.map( n => {
      if(n.Nombre.includes(busqueda)) {
        return n.Nombre;
      }
    })
  }
  
  limpiarBusqueda() {
    this.consolasNombres = [];
    this.consolasNombres = this.consolas.map(n=>n.Nombre);
  }


}
