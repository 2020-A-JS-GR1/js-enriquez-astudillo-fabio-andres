const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise(
        (resolve, reject) => {
            if (numero % 2 == 0) {
                resolve(numero);
            } else {
                reject('No es par');
            }
        }
    );
    return miPrimerPromesa;
}

function promesaElevarAlCuadrado(numero) {
    const miSegundaPromesa = new Promise(
        (resolve, reject) => {
            const numeroAlCuadrado = Math.pow(numero, 2);
            resolve(numeroAlCuadrado);
        }
    );
    return miSegundaPromesa;
}

promesaEsPar(6)
    .then(
        (numeroPar) => {
            console.log('Contenido then par: ', numeroPar);
            return promesaElevarAlCuadrado(numeroPar); //promesa
        }
    ).then(
        (numeroParCuadrado) => {
            console.log('Contenido then cuadrado: ', numeroParCuadrado);
        }
    )
    .catch(
        (error) => {
            console.error('Contenido catch: ', error);
        }
    );