import React, { useState } from "react";
import "./Discussion.css";

const StaticStarRating = ({ rating }) => {
  let empty = 5 - rating;
  return (
    <div className="star-rating">
      {[...Array(rating)].map((star) => {
        return <span className="on">&#9733;</span>;
      })}
      {[...Array(empty)].map((star) => {
        return <span className="off">&#9733;</span>;
      })}
    </div>
  );
};

export default StaticStarRating;
