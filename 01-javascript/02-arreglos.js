const arreglo = [1,2,3,4,5,6,7,8,9,10];

//for of

for (let numero of arreglo) { //valores
    console.log('numero', numero);
}

//for in

for (let indice in arreglo) { //indices
    console.log('indice', indice);
}

//añadir un valor al arreglo
arreglo.push(11); //añade al final un elemento
console.log(arreglo);
arreglo.pop(); //elimina al final un elemento
console.log(arreglo);
arreglo.unshift(0); //añadir al inicio del arreglo
console.log(arreglo);

//eliminar de cualquier parte del arreglo 
// parametros: (posicion a eliminar, num de elementos a elimianr desde la posicion seleccionada)
arreglo.splice(0,1); 
console.log(arreglo);
// parametros: los parametros siguientes se agregan al arreglo
arreglo.splice(4,0,4,4,4,4,4,4,4,4); 
console.log(arreglo);

//buscar el indice de un arreglo
const indice = arreglo.indexOf(7);
console.log(indice);
//ya con el indice eliminar el elemento
arreglo.splice(indice,1);
console.log(arreglo);



