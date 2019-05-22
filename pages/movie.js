import React from "react";
import { withRouter } from "next/router";
import Layout from "../src/components/layout";
import { getMovieById, getMovieVideos } from "../src/api/get-movies/getMovies";
import { getApiConfig } from "../src/api/config/get-api-config";
import Trailer from "../src/components/trailer";
import MovieDisplay from "../src/components/movie-display";
const Movie = withRouter(props => {
  const { movieDetails, base_url, poster_size, movieVideos } = props;
  const trailerObj = movieVideos
    .filter(movieVideo => movieVideo.type === "Trailer")
    .shift();
  const trailerKey = trailerObj.key;

  return (
    <Layout>
      <MovieDisplay
        movieDetails={movieDetails}
        base_url={base_url}
        poster_size={poster_size}
        className="mt-5"
      />
      <Trailer
        trailerKey={trailerKey}
        height="390"
        width="640"
        autoPlay={false}
      />
    </Layout>
  );
});

Movie.getInitialProps = async function(context) {
  const { id } = context.query;
  const movieDetails = await getMovieById(id);
  const configRes = await getApiConfig();
  const movieVideos = await getMovieVideos(id);
  const base_url = configRes.data.images.base_url;
  const poster_size = configRes.data.images.poster_sizes[2];

  return {
    movieDetails: movieDetails.data,
    base_url,
    poster_size,
    movieVideos: movieVideos.data.results
  };
};
export default Movie;
