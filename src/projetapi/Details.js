import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';  
import { movies } from './data';

export default function Details({ addToWatchlist }) {
  const { Title } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch the movie from the provided data
    const movieData = movies.find(m => m.Title.toLowerCase() === Title.toLowerCase());
    if (movieData) {
      setMovie(movieData);
    } else {
      // Optionally, you can handle the case where the movie is not found
      console.error("Movie not found");
    }
  }, [Title]);

  return (
    <div className="container mt-4">
      {movie ? (
        <div className="card1">
          <div className="card22">
            <img src={movie.Image} alt={movie.Title} style={{ width: "100%" }} />
          </div>
          <div className="card-body1">
            <h3 className="card-title1">{movie.Title}</h3>
            <p>
              Year: <span className='card-description1'>{movie.Year}</span><br />
              Genre: <span className='card-description1'>{movie.Genre}</span>
            </p>
            <p>Story: <span className="card-description1">{movie.Description}</span></p>
            <div className="eeee">
              <button className='trailer' onClick={() => addToWatchlist(movie)}>Add to Watch List</button>
              <Link to="/" className='trailer' >Back</Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
}


