function soloNumeros(a,b,c) {
    return a-b+c;
}

function soloNumeros2(a,b,c) {  //undefined
    console.log(a-b+c);
}

soloNumeros('v', true, [1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5);

//funciones nombradas
function funcionNombrada(){}
const funcionNombrada2 = function() {}; // se iguala a una funcion anónima
let funcionNombrada3 = function opcional() {};
var funcionNombrada4 = function() {};

//opcional() NO EXISTE

//funciones de flecha gorda
//al final son funciones anonimas
var funcionNombrada5 = () => {};
var funcionNombrada6 = n => {};
var funcionNombrada7 = (x,y) => {
    return x+y;
};
var funcionNombrada8 = (x,y) => x+y;


//parametros infinitos ...
function sumarNumeros(numInicial, ...otrosNumeros) {
    return numInicial + otrosNumeros.reduce((a,v)=>a+v, 0);
}
console.log(sumarNumeros(1,2,3,4,5,6,7,8,9));
 