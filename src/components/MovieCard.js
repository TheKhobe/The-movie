import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import tomato from '../pages/Tomato.png'
import imdb from '../pages/Imdb.png'

const MovieCard =({movie, selectMovie}) => {
 const image_path = 'https://image.tmdb.org/t/p/w500/'

 console.log(movie)
  return (
       <div className='movie-card' onClick={() => selectMovie(movie)}>
    
    {movie.poster_path ?
    <Link to={`movie/${movie.id}`} >
     <img className='movie-cover' src={`${image_path}${movie.poster_path} `} alt='' />
     </Link>
    : <div className='movie-placeholder'>No Image Found </div>
    }
    <div className='text'>
    <p id='[data-testid: movie-release-date]'>{new Date(movie?.release_date).toUTCString()}</p>
     <h5>{movie.title}</h5> 
     <div className='rate'>
        <div className='imdb'>
     <img src={imdb} alt='to' /> 
       <p>78.0 / 100</p>
     </div>
    
      <div className='tomato'>
      <img src={tomato} alt='to' />
         <p>63%</p>
     </div>
    </div>
    </div>
    </div>


  )
}

export default MovieCard