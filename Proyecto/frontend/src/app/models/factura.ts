export interface Factura {
    id?: number,
    fecha: string,
    subtotal: number,
    impuestos: number,
    total: number,
    detalles?: number[],
    usuario: number
}