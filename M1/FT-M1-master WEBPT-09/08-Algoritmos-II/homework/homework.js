'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

	//Caso base de la recursión
  if (array.length <= 1) return array;

  //Declaramos pivote, que es el número que se compara, left y right son los núm que son menores y mayores respectivamente
  let pivot = array[0];
  let left = []; 
  let right = [];

  //Bucle arrancando en la posición 1 para comparar los números del arrray, si el núm es menor al pivote va a la izq, si es mayor a la derecha
  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  //Retorna el resultado de izq a derecha concantenado
  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Caso base de recursión
  if (array.length === 1) return array;

  //Declaramos medio para dividir el array en 2 partes iguales, la primera parte va en left y lo restante en right
  let medio = parseInt(array.length/2)
  let left = array.slice(0, medio);
  let right = array.slice(medio, array.length);

  //Creamos función y otroArray para guardar los valores
  function mix(left, right) {
    let otroArray = [];
    while (left.length && right.length) {

    //Compara los valores, si left es menor pushea en left y quita el valor, de lo contrario pushea en right y lo quita del array original.
    if (left[0] < right[0]) {
      otroArray.push(left[0]);
      left.shift();
    } else{
       otroArray.push(right[0]);
       right.shift();
    }
   }
    //Retorna el nuevo array, concatenado de left y right 
   return [...otroArray, ...left, ...right]
  }
  //Retorna la recursión
  return mix(mergeSort(left), mergeSort(right));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
