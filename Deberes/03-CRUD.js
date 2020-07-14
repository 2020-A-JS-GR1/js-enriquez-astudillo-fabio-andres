const inquirer = require('inquirer');
const fs = require('fs');

async function main() {
    try {
        const consolasTxt = await cargarConsolas();
        const videojuegosTxt = await cargarVideojuegos();

        const consolas = JSON.parse(consolasTxt);
        const videojuegos = JSON.parse(videojuegosTxt);

        let consola = {};

        const opcion = await llamarAlMenuConsolas();
        switch (opcion) {
            case 'Selecciona consola':
                consola = await seleccionarConsola(consolas);
                await mostrarConsola(consola, videojuegos);
                return true;
            case 'Crear consola':
                await crearConsola(consolas);
                return true;
            case 'Buscar consola':
                await buscarConsola(consolas);
                return true;
            case 'Editar consola':
                consola = await seleccionarConsola(consolas);
                await editarConsola(consola, consolas);
                return true;
            case 'Eliminar consola':
                consola = await seleccionarConsola(consolas);
                eliminarConsola(consola, consolas);
                return true;
            case 'Salir':
                return false;
            default:
                console.error('Opcion no admitida!');
                return true;
        }
    } catch (e) {
        return e;
    }
}

async function seleccionarConsola(consolas) {
    nombresDeConsolas = consolas.map(
        n => n.Nombre
    )
    try {
        const consolaAMostrarNombre = await inquirer.prompt([
            {
                type: 'list',
                name: 'consolaAMostrarNombre',
                message: 'Seleccione la consola que desea ver: ',
                choices: nombresDeConsolas
            }
        ])

        const consolaAMostrar = consolas.find(n => {
            return n.Nombre === consolaAMostrarNombre.consolaAMostrarNombre;
        })
        // console.log(consolaAMostrar);
        return consolaAMostrar;

    } catch (e) {
        return e;
    }
}

async function mostrarConsola(consola, videojuegos) {

    videojuegosDeConsola = videojuegos.filter(n => n.consola === consola.Nombre);
    let videojuego = {};

    console.log('\nNombre: ', consola.Nombre);
    console.log('Fabricante: ', consola.Fabricante);
    console.log('Generación: ', consola.Generacion);
    if (consola.tieneSoporte)
        console.log('Soporte: Activo\n');
    else
        console.log('Soporte: Finalizado\n');

    try {
        const opcion = await llamarAlMenuVideojuegos();
        switch (opcion) {
            case 'Seleccionar videojuego':
                videojuego = await seleccionarVideojuego(videojuegosDeConsola);
                await mostrarVideojuego(videojuego);
                break;
            case 'Crear videojuego':
                await crearVideojuego(videojuegos, consola);
                break;
            case 'Buscar videojuego':
                await buscarVideojuego(videojuegosDeConsola);
                break;
            case 'Editar videojuego':
                videojuego = await seleccionarVideojuego(videojuegosDeConsola);
                await editarVideojuego(videojuego, videojuegos, consola);
                break;
                case 'Eliminar videojuego':
                videojuego = await seleccionarVideojuego(videojuegosDeConsola);
                eliminarVideojuego(videojuego, videojuegos);
                break;
            case 'Regresar':
                break;
            default:
                console.error('Opcion no admitida!');
                break;
        }
    }
    catch (e) {
        return e;
    }
}

async function crearConsola(consolas) {
    try {
        const nuevaConsola = await inquirer.prompt([
            {
                type: 'input',
                name: 'Nombre',
                message: 'Nombre: '
            },
            {
                type: 'input',
                name: 'Fabricante',
                message: 'Fabricante: '
            },
            {
                type: 'number',
                name: 'Generacion',
                message: 'Generacion: '
            },
            {
                type: 'confirm',
                name: 'tieneSoporte',
                message: 'Tiene Soporte: '
            }
        ]);

        // console.log(nuevaConsola);
        // console.log(consolas);
        consolas.push(nuevaConsola);
        console.log(await escribirConsolas(consolas));

    } catch (e) {
        return e;
    }
}

async function buscarConsola(consolas) {
    try {
        const nombreDeConsola = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre de la consola a buscar: '
            }
        ])
        const consola = consolas.find(n => n.Nombre === nombreDeConsola.nombre)
        await mostrarConsola(consola);
    } catch (e) {
        return e;
    }
}

async function editarConsola(consola, consolas) {
    try {
        const consolaEditada = await inquirer.prompt([
            {
                type: 'input',
                name: 'Nombre',
                message: 'Nombre: '
            },
            {
                type: 'input',
                name: 'Fabricante',
                message: 'Fabricante: '
            },
            {
                type: 'number',
                name: 'Generacion',
                message: 'Generacion: '
            },
            {
                type: 'confirm',
                name: 'tieneSoporte',
                message: 'Tiene Soporte: '
            }
        ]);

        const indiceAEditar = consolas.findIndex(n => n.Nombre === consola.Nombre);
        consolas.splice(indiceAEditar, 1, consolaEditada)

        await escribirConsolas(consolas);

    } catch (e) {
        return e;
    }
}

async function eliminarConsola(consola, consolas) {
    const indiceAEliminar = consolas.findIndex(n => n.Nombre === consola.Nombre);
    consolas.splice(indiceAEliminar, 1);
    try {
        await escribirConsolas(consolas);
    } catch (e) {
        return e;
    }
}

async function mostrarVideojuego(videojuego) {
    console.log('\nNombre: ', videojuego.Nombre);
    console.log('Fabricante: ', videojuego.Fabricante);
    console.log('Precio: ', videojuego.Precio);
    if (videojuego.soloDigital)
        console.log('Existe solo en digital\n');
    else
        console.log('Existe en digital y en formato físico\n');
}

async function seleccionarVideojuego(videojuegos) {
    nombresDeVideojuegos = videojuegos.map(
        n => n.Nombre
    )
    try {
        const videojuegoAMostrarNombre = await inquirer.prompt([
            {
                type: 'list',
                name: 'videojuegoAMostrarNombre',
                message: 'Seleccione el videojuego que desea ver: ',
                choices: nombresDeVideojuegos
            }
        ])

        console.log(videojuegoAMostrarNombre);

        const videojuegoAMostrar = videojuegos.find(n => {
            return n.Nombre === videojuegoAMostrarNombre.videojuegoAMostrarNombre;
        })
        // console.log(videojuegoAMostrar);
        return videojuegoAMostrar;

    } catch (e) {
        return e;
    }
}

async function crearVideojuego(videojuegos, consola) {
    try {
        const nuevoVideojuego = await inquirer.prompt([
            {
                type: 'input',
                name: 'Nombre',
                message: 'Nombre: '
            },
            {
                type: 'input',
                name: 'Fabricante',
                message: 'Fabricante: '
            },
            {
                type: 'number',
                name: 'Precio',
                message: 'Precio: '
            },
            {
                type: 'confirm',
                name: 'soloDigital',
                message: 'Existe solo en digital: '
            }
        ]);

        // console.log(nuevaConsola);
        // console.log(consolas);
        // console.log(nuevoVideojuego);
        nuevoVideojuego["consola"] = consola.Nombre;
        // console.log(nuevoVideojuego);

        videojuegos.push(nuevoVideojuego);
        console.log(await escribirVideojuego(videojuegos));

    } catch (e) {
        return e;
    }
}

async function buscarVideojuego(videojuegos) {
    try {
        const nombreDeVideojuego = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre del videojuego a buscar: '
            }
        ])
        const videojuego = videojuegos.find(n => n.Nombre === nombreDeVideojuego.nombre)
        await mostrarVideojuego(videojuego);
    } catch (e) {
        return e;
    }
}

async function editarVideojuego(videojuego, videojuegos, consola) {
    try {
        const videojuegoEditado = await inquirer.prompt([
            {
                type: 'input',
                name: 'Nombre',
                message: 'Nombre: '
            },
            {
                type: 'input',
                name: 'Fabricante',
                message: 'Fabricante: '
            },
            {
                type: 'number',
                name: 'Precio',
                message: 'Precio: '
            },
            {
                type: 'confirm',
                name: 'soloDigital',
                message: 'Existe solo en digital: '
            }
        ]);

        videojuegoEditado["consola"] = consola.Nombre;

        const indiceAEditar = videojuegos.findIndex(n => n.Nombre === videojuego.Nombre);
        videojuegos.splice(indiceAEditar, 1, videojuegoEditado)

        await escribirVideojuego(videojuegos);

    } catch (e) {
        return e;
    }
}

async function eliminarVideojuego(videojuego, videojuegos) {
    const indiceAEliminar = videojuegos.findIndex(n => n.Nombre === videojuego.Nombre);
    videojuegos.splice(indiceAEliminar, 1);
    try {
        await escribirConsolas(videojuegos);
    } catch (e) {
        return e;
    }
}

function cargarConsolas() {
    return new Promise(
        (res, rej) => {
            fs.readFile('03-consolas.txt', 'utf-8', (e, contenido) => {
                if (e) {
                    rej(error);
                } else {
                    res(contenido);
                }
            })
        }
    )
}

function cargarVideojuegos() {
    return new Promise(
        (res, rej) => {
            fs.readFile('03-videojuegos.txt', 'utf-8', (e, contenido) => {
                if (e) {
                    rej(error);
                } else {
                    res(contenido);
                }
            })
        }
    )
}

function escribirConsolas(consolas) {
    return new Promise(
        (res, rej) => {
            fs.writeFile('03-consolas.txt', JSON.stringify(consolas), 'utf-8', (e) => {
                if (e) {
                    rej(e);
                } else {
                    res('\nConsola añadida correctamente!\n');
                }
            })
        }
    )
}

function escribirVideojuego(videojuegos) {
    return new Promise(
        (res, rej) => {
            fs.writeFile('03-videojuegos.txt', JSON.stringify(videojuegos), 'utf-8', (e) => {
                if (e) {
                    rej(e);
                } else {
                    res('\nVideojuego añadido correctamente!\n');
                }
            })
        }
    )
}

async function llamarAlMenuConsolas() {
    try {
        const respuesta = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Seleccione que desea realizar: ',
                choices: ['Selecciona consola', 'Crear consola', 'Buscar consola', 'Editar consola', 'Eliminar consola', 'Salir']
            },
        ]);
        return respuesta.opcion;
    } catch (e) {
        return e;
    }
}

async function llamarAlMenuVideojuegos() {
    try {
        const opcion = await inquirer.prompt([
            {
                type: 'list',
                name: 'opcion',
                message: 'Seleccione que desea hacer: ',
                choices: ['Seleccionar videojuego', 'Crear videojuego', 'Buscar videojuego', 'Editar videojuego', 'Eliminar videojuego', 'Regresar']
            }
        ])
        return opcion.opcion
    }
    catch (e) {
        return e
    }
}

async function iniciarPrograma() {
    let repetir = true;
    while (repetir)
        try {
            repetir = await main();
        } catch (e) {
            console.error(e);
            repetir = false;
        }
}

iniciarPrograma()

//TODO hacer un bucle en el menu de videojuegos
//TODO editar la cosola de todos los juegos al editar consola
//TODO eliminar todos los juegos de una cnsola al eliminar consola
//TODO tanto en consolas como en videojuegos, añadir un mensaje en buscar y mostrar si no existe
//TODO sepearar funciones en diferentes documentos



