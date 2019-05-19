import React from "react";
import Layout from "../src/components/layout";
import { getMovieById } from "../src/api/get-movies/get-movie-by-id";
import { getMoviesPlayingNow } from "../src/api/get-movies/get-movies-playing-now";
import { getApiConfig } from "../src/api/config/get-api-config";
import Carousel from "../src/components/carousel";
const Index = props => {
  const { movies, base_url, poster_size } = props;
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const next = () => {
    sliderRef.current.slickNext();
  };
  return (
    <Layout>
      <div>
        <Carousel
          movies={movies}
          base_url={base_url}
          poster_size={poster_size}
        />
        <pre>{/* <code>{JSON.stringify(props, null, 2)}</code> */}</pre>
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  try {
    const configRes = await getApiConfig();
    const res = await getMoviesPlayingNow();
    const base_url = configRes.data.images.base_url;
    const poster_size = configRes.data.images.poster_sizes[2];
    const backdrop_size = configRes.data.images.backdrop_sizes[3];
    return { movies: res.data.results, base_url, poster_size };
  } catch (err) {
    console.log(err);
  }
};

export default Index;
