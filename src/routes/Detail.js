import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state;

  useEffect(() => {
    if (!movie) {
      navigate("/");
    }
  }, [movie, navigate]);

  if (!movie) {
    return null;
  }
  return (
    <div className="detail">
      <img src={movie.poster} alt={movie.title} style={{ width: "300px" }} />
      <div style={{ marginLeft: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>{movie.title}</h1>
        <h2 style={{ marginBottom: "20px" }}>{movie.year}</h2>
        <ul style={{ listStyle: "none", padding: "0", marginBottom: "20px" }}>
          {movie.genres.map((genre, index) => (
            <li
              key={index}
              style={{ display: "inline-block", marginRight: "10px" }}
            >
              {genre}
            </li>
          ))}
        </ul>
        <p style={{ whiteSpace: "pre-wrap" }}>{movie.summary}</p>
      </div>
    </div>
  );
}

export default Detail;
