import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { movies as movieData } from "./data";  // Importing the movies data

export default function Rechercherinput() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    // Setting the initial state with movie data
    setMovies(movieData);
  }, []);

  function rechercher(e) { 
    e.preventDefault();
    const movie = movies.find((movie) => movie.Title.toLowerCase() === value.toLowerCase());
    setSelectedMovie(movie || null);
  }

  return (
    <div>
      <nav className="box">
        <h1>Search</h1>
        <form onSubmit={rechercher}>
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={(e) => setValue(e.target.value)} 
          />
          <input 
            type="submit" 
            value="Search" 
          />
        </form>
      </nav>

      {selectedMovie ? (
        <div className="card" style={{ width: "250px" }}>
          <img src={selectedMovie.Image} style={{ width: "100%" }} alt={selectedMovie.Title} />
          <div className="card-body">
            <Link to={`/movies/${selectedMovie.Title}`} className="aaa">
              <h6 className="card-title">{selectedMovie.Title}</h6>
            </Link>
            <p>{selectedMovie.Year}</p>
          </div>
        </div>
      ) : (
        <p>No movie selected or movie not found.</p>
      )}
    </div>
  );
}

