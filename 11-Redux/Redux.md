<h2>APUNTES REDUX:</h2>

<p>Redux sirve para gestionar el estado global de nuestros componentes.
Éste crea un Store, que se encarga de proveer los estados necesarios
a cada componente de mi App.</p>
<p>Solo hay un store por aplicación.</p>


<p>Para realizar un cambio de estado vamos a utilizar la función <strong>dispatch</strong>.
Dispatch recibe como parametro un objeto con una propiedad <strong>type</strong>, obligatoria.
La cual describe lo que queremos hacer.</p>

```javascript 

store.dispatch({
    type: 'COMPLETE_TODO',
    index: 1
})
```

<p>Ademas, el store también tiene un elemento llamado <strong>reducer</strong>,
 el cual se encarga de modificar el estado. Digamos que es equivalente a setState()
 en el contexto de componentes de función.</p>

 <p>Reducer es una función que recibe dos parametros, el primero, es un state (estado actual ?), 
 y el segundo es un action.</p>


```javascript
function reducer(state, action){
    if(action.type === 'COMPLETE_TODO'){
        return({
            ... // bloque de codigo.
        })
    }
    return state;
}
```

<p>Para crear un store vamos a utilizar la función createStore(), la cual recibe como parametro
la funcion reducer. El store tiene dentro suyo a reducer, y accedemos a él mediante el dispatch,
una vez dentro reducer va ser el encargado de setear el estado.</p>

<p>Los action creators son funciones que crean acciones.</p>

```javascript
function actionCreator(input) {
		return {type: ADD_TODO, description: "Ir a comprar pan"}
}
```
<p>Utilizaremos { combineReducers } (imported from 'redux') para combinar todos los reducers, y generar uno único.
Ademas, store.getState() nos regresa el estado actual de tu app. y .subscribe(), agrega una función listener,
que escucha los cambios, y es ejecutada cada vez que una acción es despachada, y/o algunas partes del arbol  sufrieron cambios.
<p>


Store --> Almacena estados globales. Estados locales estan definidos dentro componentes. 

Creamos un store --> const store = CreateStore (reducer) 

Recibe como parametro un reducer --> Funcion que recibe dos parametros, (state, action)

a su vez el reducer recibe como parametro las actions. 

action creator --> Creamos acciones mediante esta funcion.

incremento = () = > {
    return {
        type: 'INCREMENTO'
    }
}

accion creators (dispatch) --> reducer --> store. 