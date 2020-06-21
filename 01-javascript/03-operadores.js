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
    n.nota = n.nota + 1;
    return n;
});

console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);

//Filter: devuelve un arreglo con los elemnteos que cumplen una condicion: []
const respuestaFilter = arreglo.filter((n, i, a) => {
    return n.nota >=14;
});

console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);



