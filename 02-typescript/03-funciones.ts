function sumarNumero(
    numInicial:number,
    ...numerosAAsumarse: number[]
): number {
    return numInicial + numerosAAsumarse.reduce( (p, n) => p+n, 0);
}

sumarNumero(1, 2, 3, 4, 5);

function imprimir(mensaje: string): void {
    console.log('Hola' + mensaje);
}

const arreglo: number[] = [1,2,3];
const arregloDos: Array<number> = [4,5,6];
const arregloTres: (number | string)[] = [4,5,'6'];
const arregloCuatro: Array<number | string> = [4,'5',6];
