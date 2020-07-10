const fs = require('fs')

function funcionDeLectura(path) {
    const promesaDeLectura = new Promise(
        (resolve, reject) => {
            fs.readFile (path, 'utf-8', (error, contenido) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(contenido)
                }
            })
        }
    )
    return promesaDeLectura;
}

function funcionDeEscritura(path, contenidoNuevo) {
    const promesaDeEscritura = new Promise(
        (resolve, reject) => {
            fs.writeFile(path, contenidoNuevo, 'utf-8', (error) => {
                if(error) {
                    reject(error);
                } else {
                    resolve('\n Se ha escrito nuevo contenido en el archivo! \n');
                }
            })
        }
    )
    return promesaDeEscritura;
}

function escribirEnArchivo(path, contenidoNuevo) {
    funcionDeLectura(path)
        .then(
            (contenido) => {
                console.log('\nContenido anterior:\n\n', contenido);
                return funcionDeEscritura(path, contenido + '\n' + contenidoNuevo);
            }
        )
        .then(
            (mensajeDeConfirmacion) => {
                console.log(mensajeDeConfirmacion);
                return funcionDeLectura(path);
            }
        )
        .then(
            (contenido) => {
                console.log('Contenido nuevo:\n\n', contenido, '\n');
            }
        )
        .catch(
            (error) => {
                console.error(error);
            }
        )
}

escribirEnArchivo('09-ejercicio-lec-esc-promesas.txt', 'Chao')
