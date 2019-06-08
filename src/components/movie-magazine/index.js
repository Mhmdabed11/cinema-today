import React from "react";
import { Carousel, CarouselItem } from "../carousel";
import CarouselTwo from "../coursel2.0";
import "./movie-magazine.css";
import Link from "next/link";
const MovieMagazine = ({ movies, base_url, poster_size, title }) => {
  console.log(movies);
  const moviesCopy = movies.map(movie => {
    return {
      ...movie,
      coverPhoto: `${base_url}${poster_size}${movie.poster_path}`
    };
  });
  return (
    <div className="movie-magazine">
      <div className="movie-magazine-title">
        <h4 className="p-2">{title}</h4>
      </div>

      {/* <Carousel movies={movies} base_url={base_url} poster_size={poster_size}>
        {Object.keys(movies).map((movie, _index) => (
          <Link
            key={_index}
            as={`/movie/${movies[movie].id}`}
            href={`/movie?id=${movies[movie].id}`}
          >
            <a>
              <CarouselItem>
                <img
                  src={`${base_url}${poster_size}${movies[movie].poster_path}`}
                />
              </CarouselItem>
            </a>
          </Link>
        ))}
      </Carousel> */}
      <CarouselTwo movies={moviesCopy} />
    </div>
  );
};

export default MovieMagazine;
