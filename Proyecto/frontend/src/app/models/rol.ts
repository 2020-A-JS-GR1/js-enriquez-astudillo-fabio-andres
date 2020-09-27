export interface Rol {
    id: number,
    nombre: string,
    permiso: number,
    usuarios?: number[]
}