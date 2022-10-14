archivo app.js
import { BrowserRouter } as Router from 'react-router-dom';

en archivo store.js
const store = CreateStore(reducer)
export default store

en app.js
<Provider store={store}>
<Router>
<App/>
<Router/>
</Provider>


Cards.jsx
import { connect } from 'react-redux';


Los componentes reciben acceso al store mediante { connect }, que debe ser importado de 'react-redux';

en Contador.jsx:

function Contador (props) {

    bloque de codigo ... 
}

``` javascript
const mapStateToProps = (state) => {
    return 
        users: state.users,
    }

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => {dispatch(add())},
        decrement: () => {dispatch(decrement())}
        }

        // se debe exportar increment y decrement desde actions.js
}
```

mapStateToProps es una función que recibe como parametro el estado global, y returna un objeto con las propiedades que necesito para mandarla a las props de mi componente.
mapDispatchToProps es una función que recibe como parametro dispatch, y returna un objeto con funciones que hacen dispatch de las actions creators.


cuando exportamos el componente debemos hacerlo mediante connect y pasarle mapStateToProps y mapDispatchToProps como parametro.

``` javascript
export default connect(mapStateToProps, mapDispatchToProps)(Contador)
```

Cuando queremos obtener data de una API desde un action, (y recordemos que el reducer es una función pura) debemos crear un action creator, que será una función la cual retorna una función que recibe como parametro dispatch, y mediante un fetch accede a la API, para luego poder hacer dispatch sobre una action, la cual tiene una prop llamada payload, que tiene como value la data obtenida de la API.

 ``` javascript
 export const getUsers =()=> {
    return function (dispatch) {
        fetch("www.urldelaapi.com/fheifeflef")
        .then((response) => response.json())
        .then((data) => dispatch({type: GET_USERS, payload: data}))
    };
 };
 ```