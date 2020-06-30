const fs = require('fs'); 

console.log('Primero'); //sincrono

fs.readFile( //linea asíncrona
    '06-ejemplo.txt',
    'utf-8',
    (error, contenido) => { //CALLBACK
        console.log('Segundo');
        if (error) {
            console.error('Hubo error: ', error);
        } else {
            console.log('archivo: ', contenido);
        }
    }
);

console.log('Final'); //sincrono