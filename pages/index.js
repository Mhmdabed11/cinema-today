import React from "react";
import Layout from "../src/components/layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMovieById } from "../src/api/get-movies/get-movie-by-id";
import { getMoviesPlayingNow } from "../src/api/get-movies/get-movies-playing-now";
const Index = props => {
  return (
    <Layout>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </Layout>
  );
};

Index.getInitialProps = async function() {
  try {
    const res = await getMovieById(550);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default Index;
