COMPONENTES DE CLASE:

Cuando vamos a actualizar el valor de un estado, es buena práctica hacerlo mediante callback.

render se ejecuta cada vez que se actualiza un estado.

constructor se ejecuta una unica vez.

Usar arrow functions, ya que se autobindean.

Montaje: ejecución de constructor. --> ejecución de render. func ComponentDidMount (si la defino, se invoca luego de la ejecución del render).

Actualización: Modificaciones dentro de mi componente --> new props, setState(), forceUpdate()-(No recomendable).

ante cualquier cambio podría definir shouldComponentUpdate() y setearlo en true, o false. Si es false, no hay render.
ComponentDidUpdate() --> ver el estado que se actualizó.

COMPONENTES DE FUNCIÓN: mediante Hooks.

Nos permite tener estado, y otras caracteristicas de React en los componentes de función.

useState -- equivalente a this.state en componentes de clase.
useState me devuelve un arreglo. En la primera posición tengo el valor de mi estado, en la segunda, una función, encargada de modificar este estado.

```javascript

const [state, setState] = useState(initialState);
```

useEffect reemplaza, en componentes de Función, a las funciones de Componentes de Clase.


