import React from "react";
import Layout from "../src/components/layout";

import {
  getMoviesPlayingNow,
  getMoviesTopRated,
  getMoviesUpcoming,
  getMovieById
} from "../src/api/get-movies/getMovies";
import { getApiConfig } from "../src/api/config/get-api-config";

import Carousel from "../src/components/carousel";
import MovieMagazine from "../src/components/movie-magazine";
const Index = props => {
  const { playingNow, topRated, upComing, base_url, poster_size } = props;
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  const next = () => {
    sliderRef.current.slickNext();
  };
  return (
    <Layout>
      <div>
        <MovieMagazine
          title="Playing Now"
          movies={playingNow}
          base_url={base_url}
          poster_size={poster_size}
        />

        <MovieMagazine
          title="Top Rated"
          movies={topRated}
          base_url={base_url}
          poster_size={poster_size}
        />
        <MovieMagazine
          title="Up Coming"
          movies={upComing}
          base_url={base_url}
          poster_size={poster_size}
        />
      </div>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  try {
    const configRes = await getApiConfig();
    const nowPlaying = await getMoviesPlayingNow();
    const topRated = await getMoviesTopRated();
    const upComing = await getMoviesUpcoming();
    const base_url = configRes.data.images.base_url;
    const poster_size = configRes.data.images.poster_sizes[2];
    const backdrop_size = configRes.data.images.backdrop_sizes[3];
    return {
      playingNow: nowPlaying.data.results,
      topRated: topRated.data.results,
      upComing: upComing.data.results,
      base_url,
      poster_size
    };
  } catch (err) {
    console.log(err);
  }
};

export default Index;
