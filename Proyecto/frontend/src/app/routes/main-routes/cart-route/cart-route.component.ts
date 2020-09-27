import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comic } from 'src/app/models/comic';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComicService } from 'src/app/services/http/comic.service';
import { CompraService } from 'src/app/services/http/compra.service';

@Component({
  selector: 'app-cart-route',
  templateUrl: './cart-route.component.html',
  styleUrls: ['./cart-route.component.scss']
})
export class CartRouteComponent implements OnInit {

  public elementosDelCarrito: Comic[];
  public actions = ['Elminiar del carrito'];

  constructor(
    private readonly compraService: CompraService,
    private readonly router: Router
  ) { }

  ngOnInit(): void { 
    this.elementosDelCarrito = ComicService.carrito;
  }
  
  event(comic: Comic) {
    ComicService.carrito.splice(
      ComicService.carrito.findIndex(n=>n.id===comic.id),
      1
    )
    this.elementosDelCarrito = ComicService.carrito;
  }

  comprar() {

    let hoy = new Date();
    let sub = this.elementosDelCarrito.reduce( (a, n) => a + n.precio, 0);
    let factura = {
      fecha: hoy.getDay() + '/' + hoy.getMonth() + '/' + hoy.getFullYear(),
      subtotal: sub,
      impuestos: sub * 0.12,
      total: sub * 1.12,
      usuario: Number(AuthService.userID),
      precio_total: 0
    }
    factura.precio_total = factura.subtotal + factura.impuestos;

    let conf = confirm('Esta seguro de proceder: \n Subtotal: ' + factura.subtotal + '\nIVA: ' + factura.impuestos + '\nTotal: ' + factura.precio_total);
    if(conf) {
      this.compraService.addFactura(factura).subscribe(
        factura => {
          this.elementosDelCarrito.forEach( element => {
            console.log(factura);
            let detalle = {
              comic: element.id,
              cantidad: 1,
              factura: factura.id,
              precio_unitario: element.precio,
              precio_acumulado: 0
            }
            detalle.precio_acumulado = detalle.precio_unitario * detalle.cantidad;
            this.compraService.addDetalle(detalle).subscribe(
              detalle => { 
                console.log(detalle); 
              },
              error => {
                console.error(error);
              }
            )
          })
          alert('Compra realizada');
          ComicService.carrito = [];
          this.router.navigate(['main', AuthService.userID]);
        },
        error => {
          console.error(error);
        }
      )
    }
  }
}
