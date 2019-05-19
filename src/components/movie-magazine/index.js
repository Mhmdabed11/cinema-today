import React from "react";
import Carousel from "../carousel";
import "./movie-magazine.css";
const MovieMagazine = ({ movies, base_url, poster_size, title }) => {
  return (
    <div className="movie-magazine">
      <div className="movie-magazine-title">
        <h3>{title}</h3>
      </div>
      <Carousel movies={movies} base_url={base_url} poster_size={poster_size} />
    </div>
  );
};

export default MovieMagazine;
