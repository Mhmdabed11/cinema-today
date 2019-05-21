import React from "react";
import { withRouter } from "next/router";
import Layout from "../src/components/layout";
import { getMovieById } from "../src/api/get-movies/getMovies";
import { getApiConfig } from "../src/api/config/get-api-config";
const Movie = withRouter(props => {
  const { movieDetails, router, base_url, poster_size } = props;
  return (
    <Layout>
      {/* <img src={`${base_url}${poster_size}${movieDetails.poster_path}`} /> */}
      <div
        style={{
          backgroundImage: `url(${base_url}${poster_size}${
            movieDetails.poster_path
          })`,
          width: "100%",
          paddingTop: "75%",
          backgroundSize: "cover",
          maxWidth: "500px"
        }}
      />
      {/* <pre>
        <code>{JSON.stringify(movieDetails, null, 2)}</code>
      </pre> */}
    </Layout>
  );
});

Movie.getInitialProps = async function(context) {
  const { id } = context.query;
  const movieDetails = await getMovieById(id);
  const configRes = await getApiConfig();
  const base_url = configRes.data.images.base_url;
  const poster_size = configRes.data.images.poster_sizes[4];
  console.log(configRes.data.images.poster_sizes);

  return { movieDetails: movieDetails.data, base_url, poster_size };
};
export default Movie;
