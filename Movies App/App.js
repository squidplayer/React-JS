import React, { useState } from "react";

import MovieCard from "./Components/MovieCard";
import { useEffect } from "react";
import "./Demo.css";

const API_URL = "http://www.omdbapi.com?apikey=34ce2be5";
const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spider man");
  }, []);

  const movie1 = {
    year: "2021",
    Title: "Spiderman",
    Poster: "https://picsum.photos/seed/picsum/200/300",
    type: "Movie",
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <img
          src="search.svg"
          alt="search"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
