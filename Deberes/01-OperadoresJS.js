/*
Utilizando el arreglo de la clase vamos a realizar las siguientes operaciones:
 
- Por cada vocal dentro de la palabra del estudiante 0.1 decimas
- Por cada consonante dentro de la palabra del estudiante 0.05 decimas
 
Filtren cuales personas pasaron (más de 14)
*/

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

const arregloModificado = arreglo.map((valorActual) => {
    
    const nuevoElemento = Object.assign([], valorActual);
    
    const numeroDeVocales = nuevoElemento.nombre.match(/[aeiou]/gi).length;
    const numeroDeConsonantes = nuevoElemento.nombre.match(/[^aeiou]/gi).length;
    
    nuevoElemento.nota += 0.1 * numeroDeVocales;
    nuevoElemento.nota += 0.05 * numeroDeConsonantes;
    
    return nuevoElemento;

}).filter( valorActual => {

    return valorActual.nota >= 14;

})

console.log('\n');
console.log('Original',arreglo);
console.log('\n');
console.log('Modificado',arregloModificado);
console.log('\n');