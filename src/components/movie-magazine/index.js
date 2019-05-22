import React from "react";
import { Carousel, CarouselItem } from "../carousel";
import "./movie-magazine.css";
import Link from "next/link";
const MovieMagazine = ({ movies, base_url, poster_size, title }) => {
  return (
    <div className="movie-magazine">
      <div className="movie-magazine-title">
        <h4>{title}</h4>
      </div>

      <Carousel movies={movies} base_url={base_url} poster_size={poster_size}>
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
      </Carousel>
    </div>
  );
};

export default MovieMagazine;
