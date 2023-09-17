import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const movie = location.state;

  if (!movie) {
    return null;
  }

  return (
    <div className="detail">
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.year}</h2>
      <ul>
        {movie.genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <p>{movie.summary}</p>
    </div>
  );
}

export default Detail;
