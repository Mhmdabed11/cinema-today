import React from "react";
import { toLocaleDuration } from "../../lib/toLocaleDuration";
import Rating from "../rating";
import "./movieDisplay.css";
const MovieDisplay = props => {
  const { movieDetails, base_url, poster_size, className } = props;
  const releaseDateTitle =
    movieDetails.status === "Released" ? "Released on :" : "Release Date :";
  const genreTitle = movieDetails.genres.length > 1 ? "Genres" : "Genre";
  const genres = movieDetails.genres.map(genre => genre.name).join(", ");
  const duration = toLocaleDuration(movieDetails.runtime);
  const ellipsis = movieDetails.overview.length > 250 ? "..." : null;
  return (
    <div className={`row align-items-start ${className}`}>
      <div className="col-lg-3">
        <img src={`${base_url}${poster_size}${movieDetails.poster_path}`} />
      </div>
      <div className="col-lg-9">
        <h3 className="title">{movieDetails.title}</h3>
        {movieDetails.release_date ? (
          <div>
            <span> {releaseDateTitle} </span>
            {movieDetails.release_date}
          </div>
        ) : null}
        {movieDetails.genres.length > 0 ? (
          <div>
            {genreTitle}: {genres}
          </div>
        ) : null}
        <div>Duration: {duration}</div>
        {movieDetails.overview ? (
          <p title={movieDetails.overview} className="mt-1">
            {movieDetails.overview.substring(0, 250)}
            {ellipsis}
          </p>
        ) : null}

        {movieDetails.production_companies[0].logo_path ? (
          <div className="production-company-logo mt-3">
            <img
              src={`${base_url}${poster_size}${
                movieDetails.production_companies[0].logo_path
              }`}
              alt="production-company"
            />
          </div>
        ) : null}

        <div className="mt-3 d-flex">
          <span className="mr-1"> Rating:</span>
          <Rating rating={movieDetails.vote_average} outOf={"10"} />
        </div>
      </div>
    </div>
  );
};

export default MovieDisplay;
