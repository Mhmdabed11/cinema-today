import React from "react";
import Link from "next/link";
import "./similar-movies.css";
const SimilarMovies = ({
  similarMovies,
  base_url,
  poster_size,
  poster_size_sm
}) => {
  const [posterSize, setPosterSize] = React.useState(poster_size);

  //watch window resize to change images size
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  });

  //set poster size to correct size on window resize
  const handleWindowResize = () => {
    if (window.innerWidth < 400) {
      setPosterSize(poster_size_sm);
    } else {
      setPosterSize(poster_size);
    }
  };

  return (
    <div className="row">
      {similarMovies.map(similarMovie => {
        return (
          <div
            key={similarMovie.id}
            className="col-lg-3 col-md-4 col-6 mb-3 similar-movie-wrapper"
          >
            <Link
              as={`/movie/${similarMovie.id}`}
              href={`/movie?id=${similarMovie.id}`}
            >
              <a>
                <img
                  className="d-block"
                  src={`${base_url}${posterSize}${similarMovie.poster_path}`}
                  alt={similarMovie.title}
                />
                <div>{similarMovie.title}</div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SimilarMovies;
