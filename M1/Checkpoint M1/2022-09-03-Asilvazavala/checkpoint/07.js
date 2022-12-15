const { LinkedList } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
// 7️⃣ ***** EJERCICIO 7 ***** - LINKEDLIST.mapHouses() 7️⃣ 
// 
// Agregar al prototype de LinkedList el método mapHouses().
// Vas a implementar un método parecido al map() de array, dónde tendrás que modificar todos los valores
// de la lista actual.
// Recibirás un parámetro que podrá recibir cualquier tipo de dato (pueden ser strings, arrays u objetos).
// EJEMPLOS:
//  Nos envían la siguiente Lista:
//   ("Casa Moderna") ---> ("Casa Moderna") ---> ("Casa Moderna") --->
//
// LinkedList.map("Cabaña Antigua")
//
// La lista de inmuebles pasaría a tener el siguiente valor:
//
// ("Cabaña Antigua") ---> ("Cabaña Antigua") ---> ("Cabaña Antigua") --->
//
// ⚠️ ATENCIÓN ⚠️
// Recordar que debe poder mapearse la lista por cualquier tipo de dato!
// No necesitas retornar una nueva lista, tenes que modificar la actual!
// 
// REQUISITOS:
//  🟢 Modificar los valores de la lista actual por lo que recibas por parámetros
//  🟢 Retornar false si la lista está vacía

LinkedList.prototype.mapHouses = function (value) {
  // Tu código aquí:

  //Retornar false si la lista está vacía
  if(!this.head) return false;

  //Mientras haya un nodo, continúa la ejecución
  let current = this.head;
  while(current) {

    //Modifica los valores de la lista actual de acuerdo al parámetro(s)
    current.value = value;

    //Apuntamos al siguiente nodo
    current = current.next;
  }
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};