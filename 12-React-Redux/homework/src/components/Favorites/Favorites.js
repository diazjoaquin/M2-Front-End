import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import { removeMoviFavorite } from "../../actions";

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
          this.props.movies && this.props.movies.map(movie => (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <span>{movie.title}</span>
              </Link>
                <button onClick={()=>this.props.removeMoviFavorite(movie.id)}>X</button>
            </div>
          ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesFavourites,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMoviFavorite: movieID => dispatch(removeMoviFavorite(movieID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
