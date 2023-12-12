import React from "react";

const MovieCard = ({movie}) => {
  return (
    <div>
      <div className="movie">
        <div>
          <p>{movie.year}</p>
        </div>
        <div>
          <img src={movie.Poster} />
        </div>
        <div>
          <p>{movie.Title}</p>
          <p>{movie.type}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
