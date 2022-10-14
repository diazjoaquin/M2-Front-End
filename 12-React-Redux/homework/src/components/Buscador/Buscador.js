import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from '../../../src/actions/index.js'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

// Se invoca a handleChange cuando hay un cambio en el input en la linea 35.
  handleChange(event) {
    this.setState({ title: event.target.value });
  }

// Se invoca a handleSubmit cuando se hace click sobre el botón submit. 
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }
  
  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {
          this.props.movies && this.props.movies.map(movie => (
            <div key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                {movie.Title}
              </Link>
              <button onClick={()=>this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>FAV</button>
            </div>
                ))
            }
        </ul>
      </div>
    );
  }
}

//Los siguiente que haremos en nuestro componente Buscador.js es agragar la accion getMovies pasandole el valor que guardamos en nuestro estado con el valor title en nuestra funcion handleSubmit para tener una referencia del valor ingresado en el input o usando el evento onChange en el input y guardando el valor en el state del componente.


const mapStateToProps = (state) => {
  return {
    movies: state.moviesLoaded
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: title => dispatch(getMovies(title)),
    addMovieFavorite: title => dispatch(addMovieFavorite(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);

/* export default function Buscador (props) {

  const [title, setTitle] = useState("");

  let handleChange = (e) => {
    setTitle(e.target.value);
  }

  let handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    {
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>

         </ul>
         </div>
    }
  )
} */