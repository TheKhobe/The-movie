import React, { useEffect, useState } from 'react'
import logo from './Logo.png';
import '../App.css'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'

function Movies() {
  const key = "c29a783facb16471082c982523d36ee6";
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false)
      }
    };
    fetchMovieDetails();
 },[id]);
useEffect(() => {
  navigate(`/movie/${id}`);
}, [id, navigate]);

const formatRuntime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};
const formatReleaseDate = (dateString) => {
  const date = new Date(dateString);
  return date.toUTCString();
};
  return (
    <div className='holder'>
    <div className='sidebar'>
<Link to='/' className='logo'>
  <img src={logo} alt='Home'/>
</Link> 
<div className='hype'>
<Link to='/' className='link'>
<div className='min'>
   <i className='fa fa-home'></i>
   <p>Home</p>
</div>
</Link> 
<Link to='/' className='link'>
<div className='min'>
   <i className='fa fa-video-camera'></i>
   <p>Movies</p>
</div>
</Link> 
<Link to='/' className='link'>
<div className='min'>
   <i className='fa fa-tv'></i>
   <p>TV Series</p>
</div>
</Link> 
<Link to='/' className='link'>
<div className='min'>
   <i className='fa fa-calendar'></i>
   <p>Upcoming</p>
</div>
</Link> 
</div>
<div className='box'>
  <p>Play movie quizzes and earn free tickets</p>
  <p>50k people are playing now</p>
 
  <button>Start Playing</button>
</div>
<Link to='/'>
<p>Log out</p>
</Link> 
</div>
{/*Movie Details */}
{loading ? (
  <p>Loading......</p>
) : (
<div className='movie-folder'>
<img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie?.title} loading='lazy'/>
<div className='boldText'>
  <h2 id='[data-testid: movie-title]'>{movie?.title}</h2>
  <p> .</p>
  <p data-test-id= "movie-release-date">{formatReleaseDate(movie.release_date)}</p>
  <p> .</p>
  <p>PG-13</p>
  <p>.</p>
  <p data-test-id="movie-runtime">{formatRuntime(movie.runtime)}</p>
</div>
<div className='hold'>
<p id='[data-testid: movie-overview]'>{movie.overview}</p>
<div className='butn'>
<button>See showtimes</button>
<button>See showtimes</button>
</div>
</div>
<div className='cast'>
<p id='movie-director'>Director: <span className='names'>Ric Johnson</span></p>
<p id='Writers'>Writers: <span className='names'>Ric Johnson, Kingsley Lionski, Sam Lee</span></p>
<p id='Stars'>Stars: <span className='names'>Tom Cruise, Jennifer Connely</span></p>
</div>
<div className='btn-flex'>
<div>
<button>Top rated movie #65</button>
<button>Awards 9 nominations </button>
</div>
</div>
</div>
)
}
    </div>
  )
}

export default Movies