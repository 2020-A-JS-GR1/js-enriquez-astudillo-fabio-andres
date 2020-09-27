import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle } from 'src/app/models/detalle';
import { Factura } from 'src/app/models/factura';

@Injectable({
    providedIn: 'root'
})
export class CompraService {

    url = "http://localhost:1337";

    constructor(
        private readonly _http: HttpClient
    ) { }

    getFacturas(clienteID: string): Observable<Factura[]> {
        return this._http.get<Factura[]>(this.url + '/Usuario/' + clienteID + '/facturas');
    }
    
    getDetalles(facturaID: string): Observable<Detalle[]>  {
        return this._http.get<Detalle[]>(this.url + '/Factura/' + facturaID + '/detalles');
    }
    
    addDetalle(detalle: Detalle) {
        return this._http.post(this.url + '/Detalle', detalle);
    }

    addFactura(factura: Factura): Observable<Factura> {
        return this._http.post<Factura>(this.url + '/Factura', factura);
    }
}