class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial = 'Humano';
    private nombreCompeto: string;

    constructor(
        nombreParam: string,
        apellidoParam: string
    ) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.nombreCompeto = nombre + this.apellido;
    }

    private mostrarNombre() {
        return this.nombreCompeto;
    }
}

class Usuario extends Persona {
    constructor(
        nombreParam: string,
        apellidoParam: string,
        public cedula: string, 
        public estadoCivil: string
    ) {
        super(nombreParam, apellidoParam);
    }
}

const adriana = new Usuario(
    'Adrian',
    'Eguez',
    '8483204701',
    'soltero'
);

console.log(adriana.nombre);
console.log(adriana.apellido);
console.log(adriana.cedula);
console.log(adriana.estadoCivil);