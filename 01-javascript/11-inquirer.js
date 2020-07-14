const inquirer = require('inquirer');

async function main() {
    try {
        const respuesta = await inquirer.prompt([
            {
                type: 'list',
                name: 'Apellido',
                message: 'Ingresa tu nombre: ',
                choices: [ 'opcion1', 'opcion2', 'opcion3' ]
            },
            {
                type: 'input',
                name: 'Edad',
                message: 'Ingresa tu edad: '
            },
        ])
        console.log(respuesta);
    } catch (e) {
        console.error(e);
    }
}

main();