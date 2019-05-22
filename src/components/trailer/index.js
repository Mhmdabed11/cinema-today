import React from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types"; // ES6
const Trailer = ({ trailerKey, height, width, autoPlay }) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: autoPlay
    }
  };
  return <YouTube videoId={trailerKey} opts={opts} />;
};

Trailer.propTypes = {
  trailerKey: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  autoPlay: PropTypes.bool
};

Trailer.defaultProps = {
  height: "390px",
  width: "640px",
  autoPlay: false
};
export default Trailer;
