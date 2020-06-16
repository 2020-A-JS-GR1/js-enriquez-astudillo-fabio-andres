//mutables e inmutables
//mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = true;
numeroDos = false;

//inmutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";


//tipos
const numero = 8; //number
const numero2 = 8.1; //number
const texto = 'hola'; //string
const texto2 = "hola"; //string
const booleano = true; //boolean
const nulo = null; //object
const indefinido = undefined; //undefined

console.log( typeof(numero) );
console.log( typeof(numero2) );
console.log( typeof(texto) );
console.log( typeof(texto2) );
console.log( typeof(booleano) );
console.log( typeof(nulo) );
console.log( typeof(indefinido) );

//truty y falsy

if( true == true ) { console.log('Verdadero'); } else { console.log('Falso'); } //truty
if( true == false ) { console.log('Verdadero'); } else { console.log('Falso'); } //falsy
if( "" ) { console.log('Verdadero'); } else { console.log('Falso'); } //falsy
if( "letras" ) { console.log('Verdadero'); } else { console.log('Falso'); } //truty
if( -1 ) { console.log('Verdadero'); } else { console.log('Falso'); } //truty
if( 0 ) { console.log('Verdadero'); } else { console.log('Falso'); } //falsy
if( 1 ) { console.log('Verdadero'); } else { console.log('Falso'); } //truty
if( null ) { console.log('Verdadero'); } else { console.log('Falso'); } //truty
if( undefined ) { console.log('Verdadero'); } else { console.log('Falso'); } //truty

//orden de importancia

//1) cost
//2) let
//3) nunca usar var

//objetos Js (JSON) - arreglos

const objetojs = {
    nombre: "Fabio",
    apellido: 'Enriquez',
    edad: 23,
    ropa: {
        color: 'azul',
        talla: 40,
        calzado: true
    },
    mascotas: ['Rex', 'Max', 'David']
}; //object



const arreglo = []; //object

console.log(objetojs);
console.log(objetojs.mascotas);
console.log(objetojs["nombre"]);
console.log(arreglo);

objetojs.apellido = "astudillo";
console.log(objetojs.apellido);

objetojs["apellido"] = "enriquez";
console.log(objetojs.apellido);

objetojs.sueldo;
console.log(objetojs.sueldo);

objetojs.sueldo = 1.2;
console.log(objetojs.sueldo);

objetojs["gastos"];
console.log(objetojs["gastos"]);

objetojs["gastos"] = 8;
console.log(objetojs["gastos"]);

objetojs.sueldo = undefined;
console.log(objetojs);
console.log(Object.keys(objetojs));
console.log(Object.values(objetojs));

//eliminar completamente una llave dentro de un objeto
delete objetojs.sueldo;
console.log(objetojs);

console.log(Object.keys(objetojs));
console.log(Object.values(objetojs));

const arrkeys = Object.keys(objetojs);
console.log(arrkeys[2]);
const arrvalues = Object.values(objetojs);
console.log(arrvalues[2]);

objetoVacio = {}
console.log(Object.values(objetoVacio));

console.log('\n\n\n\n\n\n\n\n');

//Lista de variables por valor
//number
//string
//boolean
//undefined

let edadFabio = 23;
let edadAndres = edadFabio;
edadFabio += 1;
console.log(edadFabio);
console.log(edadAndres);

//Lista de variables por referencia
//objects

let fabio = {
    nombre: "Fabio"
}
let andres = fabio;
fabio.nombre = "Andres"
console.log(fabio);
console.log(andres);
delete fabio.nombre;
console.log(fabio);
console.log(andres);

let fabioarray = ["fabio", "andres"]
let andresarray = fabioarray;
fabioarray[1] = "Enriquez"
console.log(fabioarray);
console.log(andresarray);

//forma de copiar un objeto sin apuntar al mismo espacio de memoria

let rafael = {
    nombre: "Rafael"
};
let lenin = Object.assign({},rafael);
delete rafael.nombre;
console.log(rafael);
console.log(lenin);