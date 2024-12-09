import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div className='cont'>
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist.</p>
      ) : (
        <div className='movie-grid'>
          {watchlist.map((movie, i) => (
            <div className="movie-card" key={i}>
              <div className="card">
                <img src={movie.Image} className="card-img-top" alt={movie.Title} />
                <div className="card-body">
                <Link to={`/movies/${movie.Title}`} className="aaa"><h4 className="card-title">{movie.Title}</h4></Link>
                  <p>{movie.Year}</p>
                  <button onClick={() => removeFromWatchlist(movie)} className="btn"><i class="fa-regular fa-trash-can"></i></button>
                  &nbsp;&nbsp;
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
