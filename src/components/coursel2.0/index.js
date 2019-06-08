import React from "react";
import "./carousel.css";
import Link from "next/link";
const Carousel = props => {
  //   const [movies, setMovies] = React.useState([
  //     {
  //       title: 0,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABaxvzq-QrYi7gL4wOyOBc63ao-5441L6LgSYJ5KfsOAedVyIDHPgkNXyU8xuKD6lRdr7CrN2Eg9WtfBW6yRCHDpdBWjuFbEQ.webp?r=88d"
  //     },
  //     {
  //       title: 1,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABd0Ng-XYm6lVJoQkjZv1fRFK-eEpRGrYZwqv6g4R4mMbaRntHFu5D_iVxuZEiFs74hKt4RTzYqRv8vgsrBqcqZEpSrGDTBV-.webp?r=e8f"
  //     },
  //     {
  //       title: 2,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQTuEMRqug-Pb0-w5xE3z0gFDSOpKVcVWNu-qwqwa0TfN0zffHhr2b2NBZdnK8t3EEI8M7ESi4dBQ1SWBVADjNFzAQ_8TiyH.webp?r=72f"
  //     },
  //     {
  //       title: 3,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYHPj_fHm-MQx-fxFppjfWz8UJY0WwurrKOoV2Q4GJ2oKYWgaqZoVb-HxDyXdX0eJU81Xv2CS_KeLsdpG2wENCvbPEQRPT50MpeCJjKbJIYEtTlKgVY3L8SzCy5BbYYwXg.jpg?r=6b9"
  //     },
  //     {
  //       title: 4,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABTHSLjT6Oqkl4TS2OSEuBhIfW6xB5-pyEOlIzoeNtuL_OLB_32ogRbGlNMKQ-y6kbzm6_QiMl7_h3kqQgBlo6UWkrWJ33G0s.jpg?r=854"
  //     },
  //     {
  //       title: 5,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQBZ-Hs2sbqvNzoMK_NNzhLV29bfUGZ3zfa0VMRZRoWC-tzDy_Zr3Pa9EEkcdEnvOy0XDj_UvepaT5P22XnNscJ_gyLKziXB.webp?r=4fb"
  //     },
  //     {
  //       title: 6,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABSO0Uahpb8-OKaMrCJ0ByzZjl0smJiIGc3nPCNtQWaV3H29fjwy0IfQ-tAzdpz73Yp6nJ0ivR4t2ngSF8SWtXHz_kDTBKoPA.webp?r=4de"
  //     },
  //     {
  //       title: 7,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABXdkA5mmI9OxER465PCbCmRFVdyxGl3TclzKgZm_6Pn7hyVsy1FvAPtsbPMsoKZ5H56EPsnFZlqmEdXf_rmz98fEvQ6WZhxE.jpg?r=e7b"
  //     },
  //     {
  //       title: 8,
  //       movie:
  //         "https://occ-0-3409-2773.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABdUHnWCCn29uk30cE_YipZxY2DU-KsJGJ1PvWpULKDHL0MMdpnlzo-iFlJc-FRGfrwyxLcvNC7YOZGYTtwK8zNRpJ-7_2Wx7.jpg?r=de9"
  //     }
  //   ]);
  const [activeSlides, setActiveSlides] = React.useState(0);
  const [totalDistance, setTotalDistance] = React.useState(0);
  const [sliding, setSliding] = React.useState(false);
  const [hasMovedOnce, setHasMovedOnce] = React.useState(false);
  const [withTransition, setWithTransition] = React.useState(true);
  const [direction, setDirection] = React.useState(null);
  const [width, setWidth] = React.useState(null);
  const sliderItemRef = React.useReducer(null);
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    console.log(props.movies);
    setMovies(props.movies);
  }, [props.movies]);
  const styles =
    hasMovedOnce && !sliding && width > 450
      ? {
          transform: `translateX(${-100 / activeSlides}%)`,
          transition: withTransition ? "transform 500ms ease" : ""
        }
      : hasMovedOnce && sliding && direction === 1 && width > 450
      ? {
          transform: `translateX(${-2 * (100 / activeSlides)}%)`,
          transition: "transform 500ms ease"
        }
      : hasMovedOnce && sliding && direction === -1 && width > 450
      ? {
          transform: `translateX(${0}%)`,
          transition: "transform 500ms ease"
        }
      : {};

  const modifyWidth = () => {
    if (window) {
      let windowWidth = window.innerWidth;
      setWidth(windowWidth);
      if (windowWidth >= 900) {
        setActiveSlides(9);
      } else if (windowWidth >= 650 && windowWidth < 900) {
        setActiveSlides(4);
      } else if (windowWidth >= 400 && windowWidth < 650) {
        setActiveSlides(3);
      } else {
        setActiveSlides(2);
      }
    }
  };
  React.useEffect(() => {
    modifyWidth();
  }, []);

  React.useEffect(() => {
    if (window) window.addEventListener("resize", modifyWidth);
    return () => window.removeEventListener("resize", modifyWidth);
  });

  const handlePrev = () => {
    if (width < 450) {
      return;
    }
    setDirection(-1);
    setSliding(true);
    console.log("hey");
    setTimeout(() => {
      let moviesCopy = [...movies];
      const hiddenMovie = moviesCopy.pop();
      setMovies([hiddenMovie, ...moviesCopy]);
      setSliding(false);
      setWithTransition(false);
    }, 500);
  };
  const handleNext = () => {
    if (width < 450) {
      return;
    }
    setDirection(1);
    if (!hasMovedOnce) setHasMovedOnce(true);
    if (hasMovedOnce) {
      setSliding(true);
      setTimeout(() => {
        let moviesCopy = [...movies];
        const hiddenMovie = moviesCopy.shift();
        setMovies([...moviesCopy, hiddenMovie]);
        setWithTransition(false);
        setSliding(false);
      }, 500);
    }
  };
  return (
    <div className="slider">
      <div ref={sliderItemRef} style={styles} className="slider-wrapper">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            style={{ width: `${100 / activeSlides}%` }}
            className={`item item-${
              hasMovedOnce && index > 0 && index < activeSlides + 1
                ? index - 1
                : !hasMovedOnce && index >= 0 && index < activeSlides
                ? index
                : ""
            }`}
          >
            <Link as={`/movie/${movie.id}`} href={`/movie?id=${movie.id}`}>
              <a className="d-block">
                <img
                  style={{ pointerEvents: "none" }}
                  src={movie.coverPhoto}
                  alt="movie"
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
      <button
        className="nav-btns prev-nav"
        onClick={!sliding ? handlePrev : undefined}
      >
        <div className="slider-nav-icon-prev" />
      </button>
      <button
        className="nav-btns next-nav"
        onClick={!sliding ? handleNext : undefined}
      >
        <div className="slider-nav-icon-next" />
      </button>
    </div>
  );
};

export default Carousel;
