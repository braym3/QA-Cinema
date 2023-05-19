import React, { useState } from "react";
import "./Discussion.css";

const StaticStarRating = ({ rating }) => {
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
    </div>
  );
};

export default StaticStarRating;
