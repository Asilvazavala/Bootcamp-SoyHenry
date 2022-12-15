"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del 
  árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en 
  cualquiera de sus variantes, según se indique por parámetro ("post-order", 
  "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el
   recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la 
  imagen bst.png dentro del directorio homework.
*/

//value >= node va a la derecha 
//value < node va a la izquierda 
class BinarySearchTree{
  constructor(value) {
    this.value = value;   //nodo actual
    this.left = null;   //nodo hijo a la izquierda
    this.right = null;  //nodo hijo a la derecha
  }

  size() { //Retorna la cantidad total de nodos
    if (!this.left && !this.right) return 1; //Caso Base: left y right en null
    if (!this.left && this.right) return 1 + this.right.size(); //Si solo hay right suma 1 y recursión
    if (this.left && !this.right) return 1 + this.left.size(); //Si solo hay left suma 1 y recursión
    if (this.left && this.right) //Si hay ambas, suma 1 y hace recursión
      return 1 + this.right.size() + this.left.size();
  }

  insert(value){ //Agrega un nodo en el lugar correspondiente
    if(value < this.value){ //Si el nodo a agregar es menor que el actual
      if(!this.left){ //Si left esta vacío, se crea el nodo  
        this.left = new BinarySearchTree(value); 
      }else{
        this.left.insert(value); //Si left no esta vacía, hace recursión
      }	
    }else
    if(value >= this.value){ //Si el nodo a agregar es mayor o igual que el actual
      if(this.right === null){ //Si right esta vacío, se crea el nodo  
        this.right = new BinarySearchTree(value);
      }else{
        this.right.insert(value); //Si right no esta vacía, hace recursión
      }	
    }
  }

  contains(value){ //Retorna true o false al evaular si existe el parametro
    if (this.value === value) return true; //Caso Base: compara valor actual con el parametro dado
    if (this.left) if (this.left.contains(value)) return true; //Si hay left y dentro de left existe el valor da true
    if (this.right) if (this.right.contains(value)) return true; //Si hay right y dentro de right existe el valor da true
    return false; //Si no hay concidencia
  }

  depthFirstForEach(cb, order = 'in-order'){ //recorre el árbol según se indique por parámetro 
  if (order === 'pre-order') {
       cb (this.value); //Trae al valor de cb
       if (this.left) this.left.depthFirstForEach(cb, order) //Si hay left, hace recursión 
       if (this.right) this.right.depthFirstForEach(cb, order) //Si hay right, hace recursión
      }

   if (order === 'in-order') {
       if (this.left) this.left.depthFirstForEach(cb, order)
       cb (this.value); 
       if (this.right) this.right.depthFirstForEach(cb, order)
     }

  if (order === 'post-order') {
      if (this.left) this.left.depthFirstForEach(cb, order)
      if (this.right) this.right.depthFirstForEach(cb, order)
      cb (this.value);
   }
  }
  
  breadthFirstForEach(cb, array=[]){ //recorre el árbol siguiendo el orden breadth first
    if(this.left) array.push(this.left); //Si hay left, pushealo en array 
    if(this.right) array.push(this.right); //Si hay right, pushealo en array
    cb(this.value); //Trae al valor de cb para guardarlo en un array

    if(array.length) array.shift().breadthFirstForEach(cb, array); //Si hay algo en array, quita el primer elemento y hace recursividad
  }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
