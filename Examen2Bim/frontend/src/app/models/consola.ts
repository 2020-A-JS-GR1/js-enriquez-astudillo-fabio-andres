import { Videojuego } from './videojuego';

export interface Consola {
    id?: number;
    Nombre: string;
    Fabricante: string;
    Generacion: number;
    tieneSoporte: boolean;
    videojuegos?: number[];
}