'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos 
  // números primos
  // Tu código:

  //Creamos array con el primer número primo
  let arr = [1];
  let divisor = 2
  while(num !==1){

    //Si el resto del número/2 es 0, significa que es núm primo 
    if(num % divisor === 0){

      //Guardamos el núm primo en el array
      arr.push(divisor);
      num /= divisor;
    }else{
      divisor++
    }
  }
  return arr;
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let revisarCambios;
  while (revisarCambios)
  revisarCambios = false;

     //Compara los valores del array para encontrar al num menor
     for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {

        //Cambia la posición entre el valor i y mínimo
        [array[i + 1], array[i]] = [array[i], array[i + 1]]
        revisarCambios = true;
      }
    } 
    return array;
  }

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 1; i < array.length; i++) {

 //guarda posición anterior
 let x = i - 1;

 //guarda valor actual
 let temp = array[i]; 

 //bucle para controlar cuando el valor de la derecha es mayor
 while (x >= 0 && temp < array[x]) {
  array[x + 1] = array[x];
  x--
 }
 array[x + 1] = temp;
}
return array;
  }

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
        //Primer for donde por defecto el minímo es el primero
        for (let i = 0; i < array.length; i++) {
          let min = i;

          //Segundo for para comparar a min con los demás elementos
          for (let j = i + 1; j < array.length; j++) {

            //Compara los valores del array para encontrar al num menor
              if (array[j] < array[min]) {
                min = j;
              }
        }

        //Cambia el valor de la posición entre i y mínimo
         [array[i], array[min]] = [array[min], array[i]]
        }
        return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
