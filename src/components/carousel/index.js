import React from "react";
import ReactDOM from "react-dom";

import "./carousel.css";

function Carousel({ movies, base_url, poster_size }) {
  const [x, setX] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [totalTrans, setTotlaTrans] = React.useState(0);
  const [activeItems, setActiveItems] = React.useState(0);
  const setInnerWidth = () => {
    setWidth(window.innerWidth);
    setTotlaTrans(0);
    setX(0);
    const { innerWidth } = window;
    setWidth(innerWidth);
    if (innerWidth >= 1000) {
      setActiveItems(6);
    } else if (innerWidth < 1000 && innerWidth >= 700) {
      setActiveItems(5);
    } else if (innerWidth < 700 && innerWidth >= 500) {
      setActiveItems(4);
    }
  };

  React.useEffect(() => {
    if (window) {
      const { innerWidth } = window;
      setWidth(innerWidth);
      if (innerWidth >= 1000) {
        setActiveItems(6);
      } else if (innerWidth < 1000 && innerWidth >= 700) {
        setActiveItems(5);
      } else if (innerWidth < 700 && innerWidth >= 500) {
        setActiveItems(4);
      }
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener("resize", setInnerWidth);
    return () => {
      window.removeEventListener("resize", setInnerWidth);
    };
  });

  const next = () => {
    setX(x => x + 1);
    setTotlaTrans(totalTrans => totalTrans - 100 / activeItems);
  };
  const prev = () => {
    setX(x => x - 1);
    setTotlaTrans(totalTrans => totalTrans + 100 / activeItems);
  };
  return (
    <div className="slider">
      <div className="showPeek sliderMask">
        <div
          style={{
            transform: `translateX(${totalTrans}%)`
          }}
          className="sliderContent row-with-x-columns"
          onTouchStart={e => console.log(e)}
        >
          {Object.keys(movies).map((movie, _index) => (
            <div key={_index} className="slider-item">
              <img
                src={`${base_url}${poster_size}${movies[movie].poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="slider-nav-prev" disabled={x === 0} onClick={prev}>
        <div className="slider-nav-icon-prev" />
      </button>
      <button
        className="slider-nav-next"
        disabled={x === movies.length - activeItems}
        onClick={next}
      >
        <div className="slider-nav-icon-next" />
      </button>
    </div>
  );
}

export default Carousel;
