import { GET_MOVIE, GET_MOVIE_DETAIL, ADD_FAVORITE_MOVIE, REMOVE_FAVORITE_MOVIE } from '../actions/index'

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    if (action.type === ADD_FAVORITE_MOVIE) {
        return {
          ...state,
          moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }
    if (action.type === GET_MOVIE) {
        return {
          ...state,
          moviesLoaded: action.payload.Search
        };
    }
    if (action.type === REMOVE_FAVORITE_MOVIE) {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter(element => element.id !== action.payload)
        }
    }

    if (action.type === GET_MOVIE_DETAIL) {
        return {
            ...state,
            movieDetail: action.payload,
        }    
    }  
    return {...state};
  }
  
  export default rootReducer;