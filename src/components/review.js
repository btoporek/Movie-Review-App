import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <p id="reviews">"{review.review}"</p>
    </div>
  );
};

export default Review;
