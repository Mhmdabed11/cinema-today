import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./rating.css";
const Rating = ({ rating, outOf }) => {
  const ratingScore = Math.floor((rating / outOf) * 5);
  console.log(ratingScore);
  const creatStars = () => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <span key={i} className="mr-1">
          <FontAwesomeIcon
            className={i + 1 <= ratingScore ? "rated-star" : " "}
            icon={faStar}
          />
        </span>
      );
    }
    return arr;
  };
  return <div className="d-flex">{creatStars()}</div>;
};

export default Rating;
