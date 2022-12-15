const { LinkedList } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
// 8️⃣ ***** EJERCICIO 8 ***** - LinkedList.sliceRooms() 8️⃣ 
// 
// Agregar al prototype de LinkedList el método sliceRooms().
// Este método también será similar al slice() de array, dónde a partir de 2 índices, deberás
// particionar la lista de habitaciones de una casa.
//
//⚠️ ATENCION ⚠️
// - Documentación explicando Array.slice() --> 
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// - Los valores que sean iguales a los índices no deben ser incluidos
// - Los indices siempre van a equivaler a un string con el nombre de una habitación
// - Recorda que esta el metodo add() ya incluido en el prototype para agregar nuevos nodos y search() 
// para buscar los existentes
//
// EJEMPLOS:
// Tenemos la siguiente lista:
// ("Cocina") ---> ("Dormitorio") ---> ("Baño") ---> ("Living") ---> ("Garage") --->
//
// LinkedList.sliceRooms("Dormitorio", "Garage") Devuelve => ("Baño") ---> ("Living") --->
//
// REQUISITOS:
//  🟢 Retornar una nueva lista a partir de los índices provistos
//  🟢 Los valores que coincidan con los indices no deben ser incluidos
//  🟢 Si ninguno de los índices se encuentra en la lista, retornar false
//
// Nota: el primer indice siempre sera menor al segundo.

LinkedList.prototype.sliceRooms = function (firstIndex, secondIndex) {
  // Tu código aquí:
  let newArray = new LinkedList();
  let alerta = false;
  let current = this.head;

  //Si ninguno de los índices se encuentra en la lista, retornar false
  if(!current) return false;
  
    //Revisamos si secondIndex coincide como límite para añadir a la lista
    while(current) {
    if(current.value === secondIndex) {
      if(!alerta) return false
    return newArray;
    }

    //Revisamos si firstIndex coincide para añadir a partir de este
    if(current.value === firstIndex) {
      alerta = true;
      current = current.next;
      continue;
    }

     //Retornar una nueva lista a partir de los índices provistos
    if(alerta) newArray.add(current.value)
    current = current.next;
  }
  
  return false;
  }

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  LinkedList
};