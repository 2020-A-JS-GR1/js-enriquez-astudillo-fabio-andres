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

//ASYN AWAIT -> dentro de una funcion
console.log('1');

async function escribirEnArchivo(path, contenidoNuevo) {
    try {
        const contenidoAnterior = await funcionDeLectura(path);
        console.log('\nContenido anterior:\n\n', contenidoAnterior);
        const mensajeDeConfirmacion = await funcionDeEscritura(path, contenidoAnterior + '\n' + contenidoNuevo);
        console.log(mensajeDeConfirmacion);
        const contenidoTotal = await funcionDeLectura(path);
        console.log('Contenido nuevo:\n\n', contenidoTotal, '\n');
    } catch(e) {
        console.error(e);
    }
}

console.log('2');
console.log('2');
console.log('2');
console.log('2');
console.log('2');
console.log('2');
console.log('2');
console.log('2');
console.log('2');

escribirEnArchivo('09-ejercicio-lec-esc-promesas.txt', 'Chao')

//otra forma
// let ejercicio = async () => {

// }