export interface Comic {
    id?: number,
    titulo: string,
    autor: string,
    genero: 'DC' | 'Marvel' | 'Manga',
    precio: number,
    estado: 'Disponible' | 'Agotado' | 'Descontinuado',
    img?: string,
    detalles?: number[]
}