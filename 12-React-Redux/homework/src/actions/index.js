export const GET_MOVIE = 'GET_MOVIE'
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE'
export const REMOVE_FAVORITE_MOVIE = 'REMOVE_FAVORITE_MOVIE'

export function getMovies(title) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=9650daf7&s=${title}`)
        .then(response => response.json())
        .then(movies => {
          dispatch({ type: GET_MOVIE, payload: movies });
        });
    };
  }

export function getMovieDetail (idMovie) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=9650daf7&i=${idMovie}`)
      .then(response => response.json())
      .then(detail => dispatch({type: GET_MOVIE_DETAIL, payload: detail}))
    }
}

export function addMovieFavorite (movie) {
    return ({type: ADD_FAVORITE_MOVIE, payload: movie})
}

export function removeMoviFavorite (id) {
    return ({type: REMOVE_FAVORITE_MOVIE, payload: id})
}