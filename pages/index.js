import React from "react";
import Layout from "../src/components/layout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getMovieById } from "../src/api/get-movies/get-movie-by-id";
import { getMoviesPlayingNow } from "../src/api/get-movies/get-movies-playing-now";
import { getApiConfig } from "../src/api/config/get-api-config";
const Index = props => {
  const sliderRef = React.useRef();

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 2
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
        <Slider ref={sliderRef} {...settings}>
          {Object.keys(movies).map(movie => (
            <div style={{ margin: "0 auto" }}>
              <img
                src={`${base_url}${poster_size}${movies[movie].poster_path}`}
              />
            </div>
          ))}
        </Slider>
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
