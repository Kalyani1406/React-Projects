import React from 'react'
import './MovieList.css'

import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className="movieListContainer">
      {
        movies.map((moviedetails,key) => (
          <MovieCard moviedetails={moviedetails} key={key}/>
        ))
      } 
    </div>
  )
}

export default MovieList 
