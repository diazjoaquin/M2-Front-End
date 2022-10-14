var traverseDomAndCollectElements = function(matchFunc, startEl = document.body) {
  var resultSet = [];
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl);
  for (let i = 0; i < startEl.children.length; i++){
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...result];
  }
  
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  for (let i = 1; i < selector.length; i++){
    if (selector[i] === '.') return 'tag.class'
  }
  if (selector[0] === '.') return 'class';
  else if (selector[0] === '#') return 'id';
  else return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) { //--> recibe un selector. 
  var selectorType = selectorTypeMatcher(selector); //--> devuelve el tipo de selector.
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (element){
    return '#' + element.id === selector;
    }
  } else if (selectorType === "class") {
    matchFunction = function (element){
      for (let i = 0; i < element.classList.length; i++){
        if ('.' + element.classList[i] === selector) return true;
      } return false;
    }    
  } else if (selectorType === "tag.class") {
    matchFunction = function (element){ 
      let [tag, clas] = selector.split('.')
      return matchFunctionMaker(tag)(element) && matchFunctionMaker('.' + clas)(element);
    }
  } else if (selectorType === "tag") {
    matchFunction = function (element){
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
