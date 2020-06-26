const adrian = {
    nombre: "Carolina"
};

const carolina = {
    nombre: "Adrián",
    apellido: "Eguez"
};

const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];

const adrianCarolina = { //creando una nueva referencia
    ...adrian,
    ...carolina
} //se da prefernecia al último objeto que se haya puesto si hay coincidencias

// adrianCarolina.nombre = "Carolina";

console.log('adrianCarolina', adrianCarolina);
console.log('adrian', adrian);

const arregloUnoDos = [...arregloUno, ...arregloDos];
console.log('arregloUnoDos', arregloUnoDos);

arregloUnoDos[3] = 20;
console.log('arregloUnoDos', arregloUnoDos);
console.log('arregloUno', arregloUno);





