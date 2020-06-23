const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];
//todos los operadores tienen tres parámetros: valorActual, indiceActual, arregoCompleto

//Find: Retorna un elemento del arreglo: elemento del arreglo
const respuestaFind = arreglo.find(
    function (valorActual, indiceActual, arregoCompleto) {
        return valorActual.nombre === "Cristian";
    }
)

console.log('respuestaFind', respuestaFind);

//FindIndex: Retorna el índice del arreglo: number
const respuestaFindIndex = arreglo.findIndex((n, i, a) => {
    return n.nombre === "Cristian";
});

console.log('respuestaFindIndex', respuestaFindIndex);

//ForEach: itera el arreglo sin devolver nada: undefined
const respuestaForEach = arreglo.forEach((n, i, a) => {
    console.log(n);
});

console.log('respuestaForEach', respuestaForEach);

//Map: devuelve un nuevo arreglo, por lo que sirve para modificar una arreglo actual: []
const respuestaMap = arreglo.map((n, i, a) => {
    nuevoValor = Object.assign({}, n)
    nuevoValor.nota = n.nota + 1;
    return nuevoValor;
});

console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);

//Filter: devuelve un arreglo con los elemnteos que cumplen una condicion: []
const respuestaFilter = arreglo.filter((n, i, a) => {
    return n.nota >=14;
});

console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

//Some: permite saber si existe al menos un elemento que cumpla con una condiciona: boolean
const respuestaSome = arreglo.some((n, i, a) => {
    return n.nota >=14;
});

console.log('respuestaSome', respuestaSome);

//Every: permite saber todos los elementos cumplen con alguna condición: boolean
const respuestaEvery = arreglo.every((n, i, a) => {
    return n.nota >=14;
});

console.log('respuestaEvery', respuestaEvery);

//Reduce: devuelve un número que puede ser la solución a una operación acumulativa: number
//recibe un segundo parametro que es el acumulador
//las operaciones se realizan de izquierda a derecha
const respuestaReduce = arreglo.reduce((valorAcumulado, n, i, a) => {
    return valorAcumulado + n.nota;
}, 0 );

console.log('respuestaReduce', respuestaReduce);

//ReduceRight: devuelve un número que puede ser la solución a una operación acumulativa: number
//recibe un segundo parametro que es el acumulador
//las operaciones se realizan de derecha a izquierda
const respuestaReduceRight = arreglo.reduceRight((valorAcumulado, n, i, a) => {
    return valorAcumulado - n.nota;
}, 400 );

console.log('respuestaReduceRight', respuestaReduceRight);

//Ejercicio:
//aumentar a la nota 0.30
//filtrar las notas iguales a 9
//sacar el promedio

const resultado12 = arreglo.map(n => n.nota * 1.3).filter(n => n.nota > 9)
const resultado3 = resultado12.reduce((acum, n) => acum + n.nota, 0) / resultado12.length;
console.log('resultado', resultado12);


