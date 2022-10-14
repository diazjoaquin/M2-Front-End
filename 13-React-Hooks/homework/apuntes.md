REDUX-HOOK:

HOOK DE EFECTO: 

useEffect():

Permite realizar efectos secundarios en componentes funcionales. Ej: traer data con AJAX, 
cambiar el DOM de forma manual, etc.

React ejecuta los efectos después del primer render y de cada actualización.

Si queremos que useEffect actue de manera similar al método componentDidMount, le pasaremos
como dependencia un array vacío. 


``` javascript
function Example () {
    const [count, setCount] = useState(0);
    
    useEffect (() = > {
        console.log("this component has been mounted");
    }, []);
    ...
} 
``` 
Si no especificamos dependencia, se ejecutara despues del primer render y en cada actualización. 

Si queremos que useEffect actue de manera similar al método componentDidUpdate, le pasaremos
como dependencia todos los estados a los que quiero que este 'atento'. 

``` javascript
function Example () {
    const [count, setCount] = useState(0);
    
    useEffect (() = > {
        console.log("this component has been mounted");
    }, [count]);
    ...
} 
``` 
Si queremos que useEffect actue de manera similar al método componentWillUnmount, le pasaremos
como dependencia un array vacío, y ademas un return con un arrow function.

``` javascript
function Example () {
    const [count, setCount] = useState(0);
    
    useEffect (() = > {
        return () => console.log("this component has been mounted");
        }, []);
    ...
} 
``` 

Reemplazaremos connect con hooks: 

// const dispatch () = useDispatch () ---> Método: store.dispatch() - Dispatch se encarga de despachar las actions/action creators.
Ej: dispatch(getMovies(name));

equal to:
``` javascript
function mapStateToDispatch(dispatch){
    return {
        name: dispatch({getMovies(name)})
    }
} 
``` 

// const nameRedux = useSelector (state => state.name) ---> mapStateToProps

equal to:
``` javascript
function mapStateToProps(state) {
    return {
        nameRedux: state.name
    }
}
``` 

HOOK: useReducer.

useReducer(reducer, initialState) => [state, dispatch] - Buscar documentación. 

