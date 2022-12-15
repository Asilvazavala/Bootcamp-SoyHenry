"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor 
  (tener en cuenta el caso particular de una lista de un solo nodo y de una lista 
  vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una 
  particularidad: el parámetro puede ser un valor o un callback. En el primer caso,
 buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un
nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por
   parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
class LinkedList {
  constructor(){
  this.head = null; //es el primer nodo de la lista
  }

add(data) { //agrega un nuevo nodo al final de la lista
  let node = new Node(data); 
  let current = this.head;
  if (!this.head) { //Verificar si ya hay un head
    this.head = node; //Si no hay, asigna al nodo agregado
    return node;
  }
  while(current.next) { //Verificar si hay un Next
    current = current.next; //Si si hay, asigna al siguiente nodo  
  }
  current.next = node; //Si no hay, asigna el actual nodo 
  return node;
} 

remove() { //Elimina el ultimo nodo de la lista
if (!this.head) return null //Verificar si no hay head, regresa null si no hay
if (this.head && !this.head.next) { //Verificar si no hay un Next y tiene head
  let rmNode = this.head; //Si se cumple asigna head a la variable
  this.head = null; //Si no se cumple, asigna null
  return rmNode.value;
}//Si la lista tiene más de 1 nodo
let current = this.head;
while(current.next.next) { //Verificar si hay un Next
  current = current.next; //Si si hay, apunta al siguiente nodo
}
let rmNode = current.next;
current.next = null;
return rmNode.value;
}

search(value) { //Busca el valor en la lista, si esta retorna true, si no existe retorna false
  let current = this.head;
  if (!current) return null; //Verificar si no hay head 
while (current) {
  if (current.value === value) return current.value; //Comparar el value que buscamos con el del nodo actual
  else if(typeof value === 'function') {
    if (value(current.value)) return current.value; //Si el valor pasado por cb es igual al del nodo actual
  }
  current = current.next; // Asignar el siguiente nodo para comparar
}
return null; //Si no hay coincidencias
}
}
class Node {
  constructor(value) {
  this.value = value; //es el Nodo actual (Objeto)
  this.next = null;  // es el siguiente nodo al que se apunta 
  }
}


/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros;
es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato 
clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos 
los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la 
cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input 
  alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de 
  los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera 
  determina la posición de la tabla en la que se almacenará el dato.

  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al 
  método hash, y almacena todo el conjunto en el bucket correcto.

  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de 
  la tabla.

  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa 
  clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, 
con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando 
set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico 
(determinado al hashear la clave)
*/
class HashTable {
  constructor() {
    this.buckets = [];
    this.numBuckets = 35;
  }

  hash(key) { //Determina en que posición se almacenará el value
    let sumaCodigosNumericos = 0;
    for (let index = 0; index < key.length; index++) { //Calcular el código númerico de cada caracter
      sumaCodigosNumericos += key.charCodeAt(index) //Sumar todos los valores
    }
    return (sumaCodigosNumericos % this.numBuckets); //Guarda el resultado en la posición de la variable
  }

  set(key, value) { //Guarda el parámetro "valor", invocando hash(key) 
    if (typeof key !== 'string')throw new TypeError('El key debe ser string');
    let posArray = this.hash(key);
    if (this.buckets[posArray] === undefined) { //Si la posición del arreglo esta vacía, crea obj
      this.buckets[posArray] = {};
    }
    this.buckets[posArray][key] = value; //Guarda "valor" en la posición de hash(key)
  }

  get(key) { // Con la "key" busca el valor que le corresponde en la tabla 
    let posArray = this.hash(key);
    return this.buckets[posArray][key]; //Retorna el valor de la posición hash(key)
  }

  hasKey(key) { //Consulta si hay algo almacenado en la posición de la tabla con esa key
    let posArray = this.hash(key);
      return this.buckets[posArray].hasOwnProperty(key);  //Verifica si en la posición de la tabla tiene la propiedad (key)
}
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
