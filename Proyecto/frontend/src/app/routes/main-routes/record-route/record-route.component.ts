import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { Detalle } from 'src/app/models/detalle';
import { Factura } from 'src/app/models/factura';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComicService } from 'src/app/services/http/comic.service';
import { CompraService } from 'src/app/services/http/compra.service';

@Component({
  selector: 'app-record-route',
  templateUrl: './record-route.component.html',
  styleUrls: ['./record-route.component.scss']
})
export class RecordRouteComponent implements OnInit {

  facturas: Factura[] = [];
  detalles: Detalle[] = [];
  comics: Comic[] = [];
  actions = [];
  sub = 0;
  imp = 0;
  tot = 0;

  constructor(
    private readonly compraService: CompraService,
    private readonly comicService: ComicService
  ) { }

  ngOnInit(): void { 
    this.compraService.getFacturas(AuthService.userID).subscribe(
      facturas => {
        this.facturas = facturas;
      }, 
      error => {
        console.error(error);
      }
    )
  }

  mostrarDetalle(factura: Factura) {
    this.detalles = [];
    this.comics = [];
    this.imp = factura.impuestos;
    this.sub = factura.subtotal;
    this.tot = this.imp + this.sub;
    this.compraService.getDetalles(factura.id + '').subscribe(
      detalles => {
        detalles.forEach(
          n => {
            console.log(n.comic + '');
            this.comicService.getComic(n.comic + '').subscribe(
              comic => {
                this.comics.push(comic[0]);
                console.log(this.comics);
              },
              error => {
                console.error(error);
              }
            )
          }
        ), 
        error => {
          console.error(error);
        }
      }
    )
  }

}
