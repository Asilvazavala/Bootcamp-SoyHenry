var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
if(matchFunc(startEl)) resultSet.push(startEl);

for (let i = 0; i < startEl.children.length; i++) {
  let child = startEl.children[i];
  let elementsFound = traverseDomAndCollectElements(matchFunc, child)
  resultSet = [...resultSet, ...elementsFound];
  }

  return resultSet;   
};

  // Detecta y devuelve el tipo de selector
  // devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.split('.').length === 2) return 'tag.class';
  return 'tag';
};
 
// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  //Si el element tiene el ID(selector) que busco retorna true o false
  if (selectorType === "id") { 
   matchFunction = function(element) {
    return '#' + element.id === selector;
   }
  }

   //Si el element tiene la class(selector) que busco retorna true o false
 else if (selectorType === "class") {
    matchFunction = function(element) {
      let clases = element.classList;
      for (let i = 0; i < clases.length; i++) {
       if ('.' + clases[i] === selector) {
        return true;
       }
      }
      return false;
  }
}

  //Si el element tiene el tag class(selector) que busco retorna true o false
 else if (selectorType === "tag.class") {
    matchFunction = function(element) {

    //En la primer variable guardo el valor de 'div' y en la segunda guardo 'class'
      let [t,c] = selector.split('.');
      return matchFunctionMaker(t)(element)
    }
}

  //Si el element tiene el tag(selector) que busco retorna true o false
 else if (selectorType === "tag") {
    matchFunction = function(element) {
      return element.tagName === selector.toUpperCase();
}
 }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
