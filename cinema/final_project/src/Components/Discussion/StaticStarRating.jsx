import React from "react";
import "./Discussion.css";

const StaticStarRating = ({ rating, quantity }) => {
  const roundedRating = Math.round(rating);
  let empty = 5 - roundedRating;
  return (
    <div className="star-rating">
      {[...Array(roundedRating)].map((star) => {
        return <span className="on">&#9733;</span>;
      })}
      {[...Array(empty)].map((star) => {
        return <span className="off">&#9733;</span>;
      })}
      {quantity && <small>{"(" + quantity + ")"}</small>}
    </div>
  );
};

export default StaticStarRating;
