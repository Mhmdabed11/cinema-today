import React from "react";
import { withRouter } from "next/router";
import Layout from "../src/components/layout";
import {
  getMovieById,
  getMovieVideos,
  getSimilarMovies
} from "../src/api/get-movies/getMovies";
import { getApiConfig } from "../src/api/config/get-api-config";
import Trailer from "../src/components/trailer";
import MovieDisplay from "../src/components/movie-display";
import Review from "../src/components/review";
import SimilarMovies from "../src/components/similar-movies";
const trailerStyle = {
  height: "300px"
};
const Movie = withRouter(props => {
  const {
    movieDetails,
    base_url,
    poster_size,
    movieVideos,
    similarMovies
  } = props;
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
      <div style={trailerStyle} className="row mt-md-0 mt-3">
        <div className="col-md-6 offset-lg-3">
          <Trailer trailerKey={trailerKey} />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h4>Similar Movies</h4>
        </div>
      </div>
      <SimilarMovies
        similarMovies={similarMovies}
        base_url={base_url}
        poster_size={"w154"}
        poster_size_sm={"w92"}
      />
      {/* <Review /> */}
      {/* <pre>
        <code>{JSON.stringify(similarMovies, null, 2)}</code>
      </pre> */}
    </Layout>
  );
});

Movie.getInitialProps = async function(context) {
  const { id } = context.query;
  const movieDetails = await getMovieById(id);
  const configRes = await getApiConfig();
  const movieVideos = await getMovieVideos(id);
  const similarMovies = await getSimilarMovies(id);
  const base_url = configRes.data.images.base_url;
  const poster_size = configRes.data.images.poster_sizes[2];

  return {
    movieDetails: movieDetails.data,
    base_url,
    poster_size,
    movieVideos: movieVideos.data.results,
    similarMovies: similarMovies.data.results
  };
};
export default Movie;
