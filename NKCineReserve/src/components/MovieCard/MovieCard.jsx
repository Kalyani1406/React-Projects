import React from 'react'
import './MovieCard.css'

const MovieCard = ({moviedetails}) => {
  return (
    <div className='cardContainer'>
      <img src={moviedetails.posterUrl} className="cardImage" alt={moviedetails.title} />
      <div className="cardBody">
        <h5 className="cardTitle">{moviedetails.title} - {moviedetails.year}</h5>
        <p className="cardText">Director : {moviedetails.director}</p>
        <p className="cardText">Genres : {moviedetails.genres.join(', ')}</p>
        <p className="cardText">Actors : {moviedetails.actors}</p>
        <p className="cardText">{moviedetails.plot}</p>
      </div> 
    </div>
  )
}

export default MovieCard
