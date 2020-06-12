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
console.log(arreglo);


