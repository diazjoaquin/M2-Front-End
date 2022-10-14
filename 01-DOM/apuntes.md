Métodos de la API del DOM:


document.getElementById();
document.getElementByClassName();
document.querySelector()/QuerySelectorAll(); --> es posible hacer referencia a clases utilizando un ., a ids con #.
document.addEventListener('event', function())
document.createElement; --> recibe como parámetro un string indicando el tipo de elemento que deseamos crear.
Para inputs luego se debe asignar el tipo de input usando .setAttribute()

Métodos de elementos:

element.setAttribute(atribute, atributeName/atributeValue);
element.className = || element.id = ;
element.innerText || innerHTML;
element.appendChild(atribute); --> lo agrega al final. 

div.setAttribute('class', 'myClass')
div.setAttribute('id', 'myId')
<div id="myId" class="myClass"></div>