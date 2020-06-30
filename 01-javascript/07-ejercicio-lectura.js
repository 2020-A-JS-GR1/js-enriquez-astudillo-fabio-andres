const fs = require('fs');

function escribirArchivo(path, contenidoNuevo) {
    fs.readFile( path, 'utf-8', (error, contenido) => {
        if (error) {
            console.error('\nHubo el siguiente error al leer el archivo: ', error);
        } else {
            console.log('\nAnterior contenido del archivo: \n\n', contenido);
            const contenidoAEnviar = contenido + '\n' + contenidoNuevo;
            fs.writeFile( path, contenidoAEnviar, 'utf-8', (error) => {
                if (error) {
                    console.error('\nHubo el siguiente error al escribir su archivo: ', error);
                } else {
                    console.log('\nEscritura exitosa');
                    fs.readFile( path, 'utf-8', (error, contenido) => {
/* Callback hell */     if (error) {
/* Callback hell */         console.error('\nHubo el siguiente error al leer el archivo: ', error);
/* Callback hell */     } else {
/* Callback hell */         console.log('\nNuevo contenido del archivo: \n\n', contenido);
/* Callback hell */         console.log('\n');
/* Callback hell */     }
                    })
                }
            })
        }
    })
}

escribirArchivo('07-ejercicio-lectura.txt', 'Hola Mundo');

