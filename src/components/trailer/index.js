import React from "react";
import PropTypes from "prop-types"; // ES6
import "./trailer.css";
const Trailer = ({ trailerKey }) => {
  return (
    <div className="trailer-container">
      <iframe
        className="trailer-container"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        frameBorder="0"
      />
    </div>
  );
};

Trailer.propTypes = {
  trailerKey: PropTypes.string.isRequired
};

export default Trailer;
