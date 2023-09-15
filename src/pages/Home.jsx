import React from 'react'
import axios from 'axios'
import imdb from './Imdb.png'
import tomato from './Tomato.png'
import logo from './Logo.png'
import menu from './Menu.png'
import {useEffect, useState} from 'react';
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard';

function Home() {
  const image_path = 'https://image.tmdb.org/t/p/original'
  const API_URL ="https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [selectedMovie, setSelectedMovie] = useState ({})
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : 'discover'
const {data: {results}} = await axios.get(`${API_URL}/${type}/movie`, {
  params:{
    api_key: process.env.REACT_APP_MOVIE_API_KEY,
    query: searchKey
  }
})
setSelectedMovie(results[0])
setMovies(results);
  }
  const fetchMovie = async (id) => {
    const {data} = await axios.get(`${API_URL}/movie/${id}`,{
       params:{
    api_key: process.env.REACT_APP_MOVIE_API_KEY
  
  }
 })
 return data
  }
  const selectMovie =async (movie) =>{
const data = await fetchMovie(movie.id)
setSelectedMovie(movie)
  }
  useEffect( () => {
  fetchMovies()
  },[])

  const renderMovies = () => (
movies.map (movie => (
  <MovieCard
  key={movie.id} 
    movie={movie}
    selectMovie={selectMovie}
  />
))
    )
const searchMovies = (e) => {
e.preventDefault();
fetchMovies(searchKey)
}

  return (
 <div className="App">
    <header style={{backgroundImage: `url('${image_path}${selectedMovie.backdrop_path}')`}}>
    <div className='navigation'>

      <img src={logo} alt='my'/>

      <form onSubmit={searchMovies} >
      <input type='text' onChange= {(e) => setSearchKey(e.target.value)} placeholder='What do you want to watch?' />
    <button className='search' type='{submit}'><i className='fa fa-search'></i></button><br/>
    {/* {searchKey} */}
    </form>
  <img src={menu} alt='menu' />
      </div>
    <div className='hero' >
    <div className='hero-content max-center'>
      <h1 className='{hero-title}' id=' [data-testid: movie-title]'>{selectedMovie.title}</h1>
      <div className='rating'>
          <img src={imdb} alt='imdb' />
          <p>86.0 / 100</p>
          <div className='tomato'>
          <img src={tomato} alt='tomato' />
            <p>94%</p>
            </div>
      </div>
    
      <p className='hero-overview' id=' [data-testid: movie-overview]'>{selectedMovie.overview}</p>
      <button className='btn' type='submit'><i className='fa fa-play-circle'></i>Watch Trailer</button>
    </div>
    </div>
    </header>
       <div className='top'>
         <h2>Featured Movies</h2>
         <span>See More <i className='fas fa-angle-right'></i> </span>
    </div>
      <div className='container'>
        {renderMovies()}
      </div>
      <Footer />
    </div>
  
  )
}


export default Home