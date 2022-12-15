//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:

  let k = 0;

  //Mientras se cumpla la condición, revisa todos los elementos del array  uno por uno
  while(k < array.length) {

   //Revisa el valor de la posición 'k' del array, si el número NO es primo
  for (var j = 2; j < array[k]; j++) {
     if (array[k] % j === 0) return false;
  }
  k++;
}

//Aplicar un algoritmo de ordenamiento de menor a mayor 
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

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};