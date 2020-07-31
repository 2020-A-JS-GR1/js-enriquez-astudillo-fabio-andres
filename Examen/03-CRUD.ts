const inquirer = require('inquirer');
const fs = require('fs');

interface Consola {
    Nombre: string;
    Fabricante: string;
    Generacion: number;
    tieneSoporte: boolean;
}

interface Videojuego {
    Nombre: string;
    Fabricante: string;
    Precio: number;
    soloDigital: boolean;
    consola: string;
}

iniciarPrograma();

async function iniciarPrograma(): Promise<void> {
    let repetir = true;
    while (repetir)
        try {
            repetir = await main();
        } catch (e) {
            console.error(e);
            repetir = false;
        }
}

async function main() {
    try {
        const consolasTxt: string = await cargarConsolas();
        const videojuegosTxt: string = await cargarVideojuegos();

        const consolas: Consola[] = JSON.parse(consolasTxt);
        const videojuegos: Videojuego[] = JSON.parse(videojuegosTxt);

        let consola: Consola;

        const opcion = await llamarAlMenuConsolas();
        switch (opcion) {
            case 'Selecciona consola':
                if (consolas.length > 0) {
                    consola = await seleccionarConsola(consolas);
                    await mostrarConsola(consola, videojuegos);
                } else
                    console.log('\nNo hay consolas para mostrar\n');
                return true;
            case 'Crear consola':
                await crearConsola(consolas);
                return true;
            case 'Buscar consola':
                if (consolas.length > 0) {
                    consola = await buscarConsola(consolas);
                    await mostrarConsola(consola, videojuegos);
                } else
                    console.log('\nNo hay consolas para mostrar\n');
                return true;
            case 'Editar consola':
                if (consolas.length > 0) {
                    consola = await seleccionarConsola(consolas);
                    await editarConsola(consola.Nombre, consolas, videojuegos);
                } else
                    console.log('\nNo hay consolas para mostrar\n');
                return true;
            case 'Eliminar consola':
                if (consolas.length > 0) {
                    consola = await seleccionarConsola(consolas);
                    await eliminarConsola(consola.Nombre, consolas, videojuegos);
                } else
                    console.log('\nNo hay consolas para mostrar\n');
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

async function seleccionarConsola(consolas: Consola[]): Promise<Consola> {
    let nombresDeConsolas: string[] = consolas.map(
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

        const consolaAMostrar: Consola = consolas.find(n => {
            return n.Nombre === consolaAMostrarNombre.consolaAMostrarNombre;
        })
        // console.log(consolaAMostrar);
        return consolaAMostrar;

    } catch (e) {
        return e;
    }
}

async function mostrarConsola(consola: Consola, videojuegos: Videojuego[]): Promise<void> {

    const videojuegosDeConsola: Videojuego[] = videojuegos.filter(n => n.consola === consola.Nombre);
    let videojuego: Videojuego;

    console.log('\nNombre: ', consola.Nombre);
    console.log('Fabricante: ', consola.Fabricante);
    console.log('Generación: ', consola.Generacion);
    if (consola.tieneSoporte)
        console.log('Soporte: Activo\n');
    else
        console.log('Soporte: Finalizado\n');

    try {
        const opcion: string = await llamarAlMenuVideojuegos();
        switch (opcion) {
            case 'Seleccionar videojuego':
                if (videojuegos.length > 0) {
                    videojuego = await seleccionarVideojuego(videojuegosDeConsola);
                    await mostrarVideojuego(videojuego);
                } else
                    console.log('\nNo hay videojuegos para mostrar\n');
                break;
            case 'Crear videojuego':
                await crearVideojuego(videojuegos, consola.Nombre);
                break;
            case 'Buscar videojuego':
                if (videojuegos.length > 0) {
                    videojuego = await buscarVideojuego(videojuegosDeConsola);
                    await mostrarVideojuego(videojuego);
                } else
                    console.log('\nNo hay videojuegos para mostrar\n');
                break;
            case 'Editar videojuego':
                if (videojuegos.length > 0) {
                    videojuego = await seleccionarVideojuego(videojuegosDeConsola);
                    await editarVideojuego(videojuego, videojuegos, consola.Nombre);
                } else
                    console.log('\nNo hay videojuegos para mostrar\n');
                break;
            case 'Eliminar videojuego':
                if (videojuegos.length > 0) {
                    videojuego = await seleccionarVideojuego(videojuegosDeConsola);
                    await eliminarVideojuego(videojuego, videojuegos);
                } else
                    console.log('\nNo hay videojuegos para mostrar\n');
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

async function crearConsola(consolas: Consola[]): Promise<void> {
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

        consolas.push(nuevaConsola);
        await escribirConsolas(consolas);

    } catch (e) {
        return e;
    }
}

async function buscarConsola(consolas: Consola[]): Promise<Consola> {
    try {
        const nombreDeConsola = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre de la consola a buscar: '
            }
        ])
        const consola: Consola = consolas.find(n => n.Nombre === nombreDeConsola.nombre)
        return consola;
    } catch (e) {
        return e;
    }
}

async function editarConsola(nombreConsola: string, consolas: Consola[], videojuegos: Videojuego[]): Promise<void> {
    try {
        const consolaEditada: Consola = await inquirer.prompt([
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

        videojuegos = videojuegos.map( n => {
            if(n.consola === nombreConsola) {
                n.consola = consolaEditada.Nombre;
                return n;
            }
        })

        const indiceAEditar: number = consolas.findIndex(n => n.Nombre === nombreConsola);
        consolas.splice(indiceAEditar, 1, consolaEditada)

        await escribirConsolas(consolas);
        await escribirVideojuego(videojuegos);

    } catch (e) {
        return e;
    }
}

async function eliminarConsola(nombreConsola: string, consolas: Consola[], videojuegos: Videojuego[]): Promise<void> {
    
    videojuegos = videojuegos.filter( n => n.consola != nombreConsola );
    
    const indiceAEliminar: number = consolas.findIndex(n => n.Nombre === nombreConsola);
    consolas.splice(indiceAEliminar, 1);
    try {
        await escribirConsolas(consolas);
        await escribirVideojuego(videojuegos);
    } catch (e) {
        return e;
    }
}

async function seleccionarVideojuego(videojuegos: Videojuego[]): Promise<Videojuego> {
    const nombresDeVideojuegos: string[] = videojuegos.map(
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

        const videojuegoAMostrar = videojuegos.find(n => {
            return n.Nombre === videojuegoAMostrarNombre.videojuegoAMostrarNombre;
        })
        return videojuegoAMostrar;

    } catch (e) {
        return e;
    }
}

async function mostrarVideojuego(videojuego: Videojuego): Promise<void> {
    console.log('\nNombre: ', videojuego.Nombre);
    console.log('Fabricante: ', videojuego.Fabricante);
    console.log('Precio: ', videojuego.Precio);
    if (videojuego.soloDigital)
        console.log('Existe solo en digital\n');
    else
        console.log('Existe en digital y en formato físico\n');
}

async function crearVideojuego(videojuegos: Videojuego[], nombreConsola: string): Promise<Videojuego> {
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

        nuevoVideojuego["consola"] = nombreConsola;

        videojuegos.push(nuevoVideojuego);
        await escribirVideojuego(videojuegos);

    } catch (e) {
        return e;
    }
}

async function buscarVideojuego(videojuegos: Videojuego[]): Promise<Videojuego> {
    try {
        const nombreDeVideojuego = await inquirer.prompt([
            {
                type: 'input',
                name: 'nombre',
                message: 'Ingrese el nombre del videojuego a buscar: '
            }
        ])
        const videojuego: Videojuego = videojuegos.find(n => n.Nombre === nombreDeVideojuego.nombre)
        return videojuego;
    } catch (e) {
        return e;
    }
}

async function editarVideojuego(videojuego: Videojuego, videojuegos: Videojuego[], nombreConsola: string): Promise<void> {
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

        videojuegoEditado["consola"] = nombreConsola;

        const indiceAEditar = videojuegos.findIndex(n => n.Nombre === videojuego.Nombre);
        videojuegos.splice(indiceAEditar, 1, videojuegoEditado)

        await escribirVideojuego(videojuegos);

    } catch (e) {
        return e;
    }
}

async function eliminarVideojuego(videojuego: Videojuego, videojuegos: Videojuego[]): Promise<void> {
    const indiceAEliminar: number = videojuegos.findIndex(n => n.Nombre === videojuego.Nombre);
    videojuegos.splice(indiceAEliminar, 1);
    try {
        await escribirVideojuego(videojuegos);
    } catch (e) {
        return e;
    }
}

function cargarConsolas(): Promise<string> {
    return new Promise(
        (res, rej) => {
            fs.readFile('03-consolas.txt', 'utf-8', (e, contenido) => {
                if (e) {
                    rej(e);
                } else {
                    res(contenido);
                }
            })
        }
    )
}

function cargarVideojuegos(): Promise<string> {
    return new Promise(
        (res, rej) => {
            fs.readFile('03-videojuegos.txt', 'utf-8', (e, contenido) => {
                if (e) {
                    rej(e);
                } else {
                    res(contenido);
                }
            })
        }
    )
}

function escribirConsolas(consolas: Consola[]): Promise<void> {
    return new Promise(
        (res, rej) => {
            fs.writeFile('03-consolas.txt', JSON.stringify(consolas), 'utf-8', (e) => {
                if (e) {
                    rej(e);
                } else {
                    res();
                }
            })
        }
    )
}

function escribirVideojuego(videojuegos: Videojuego[]): Promise<void> {
    return new Promise(
        (res, rej) => {
            fs.writeFile('03-videojuegos.txt', JSON.stringify(videojuegos), 'utf-8', (e) => {
                if (e) {
                    rej(e);
                } else {
                    res();
                }
            })
        }
    )
}

async function llamarAlMenuConsolas(): Promise<string> {
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

async function llamarAlMenuVideojuegos(): Promise<string> {
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










