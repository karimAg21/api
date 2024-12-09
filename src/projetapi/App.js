import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import { movies as movieData } from "./data"; // Renamed to avoid conflict with state
import Nav from "./Nav";
import Horror from "./Horror";
import './App.css';
import Action from "./Action";
import Drama from "./Drama";
import Comedy from './Comedy';
import Details from "./Details";
import War from './War';
import Romance from './Romance';
import Watchlist from "./Watchlist";
import Crime from "./Crime";
import Mystery from "./Mystery";
import Search from "./Search";
import Western from "./Western";
import Thriller from './Thriller';

export default function App() {
  const [movies, setMovies] = useState(movieData); // Utilize imported movie data
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist(Wlist => [...Wlist, movie]);
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist(Wlist => Wlist.filter(m => m.Title !== movie.Title));
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/Action" element={<Action movie={movies} />} />
        <Route path="/Horror" element={<Horror movie={movies} />} />
        <Route path="/Drama" element={<Drama movie={movies}/> } />
        <Route path="/Comedy" element={<Comedy movie={movies} />}/>
        <Route path="/Crime" element={<Crime movie={movies} />}/>
        <Route path="/War" element={<War movie={movies} />}/>
        <Route path="/Mystery" element={<Mystery movie={movies} />}/>
        <Route path="/Romance" element={<Romance movie={movies} />}/>
        <Route path="/Western" element={<Western movie={movies} />} />
        <Route path="/Thriller" element={<Thriller movie={movies} />} />
        <Route path="/Search" element={<Search movie={movies} />}/>
        <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />} />
        <Route path="/movies/:Title" element={<Details addToWatchlist={addToWatchlist} />} />
      </Routes>
    </BrowserRouter>
  );
}


