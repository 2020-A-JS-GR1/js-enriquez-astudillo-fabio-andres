const fs = require('fs'); 
const hola = 'hola'

console.log('Primero'); //sincrono

fs.readFile( //linea asíncrona
    '06-ejemplo.txt',
    'utf-8',
    (error, contenido) => { //CALLBACK
        console.log('Segundo');
        if (error) {
            console.error('Hubo error: ', error);
        } else {
            console.log('buena tarde: ', contenido);
        }
    }
);

console.log('Final'); //sincrono