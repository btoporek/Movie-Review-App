import React, { useState } from "react";
import Form from "./reviewForm";
import { v4 as uuidv4 } from "uuid";
import ReviewList from "./reviewList";
import Stars from "./stars";

export const Movie = (props) => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ review: "", id: uuidv4() });
  return (
    <div className="container" id="movie">
      <div className="col">
        <div className="card bg-light mb-3" id="movie-card">
          <div className="card-header">
            <img src={props.image} alt="" />
          </div>
          <div className="card-body">
            <h2 id="name">{props.name}</h2>
            <button className="btn btn-sm" id="genre">
              {props.genre}
            </button>
            <p id="synopsis">{props.synopsis}</p>
          </div>
          <div className="card-footer">
            <h5>Rate this movie!</h5>
            <Stars />
            <Form
              form={form}
              reviews={reviews}
              setForm={setForm}
              setReviews={setReviews}
            />
          </div>
        </div>
      </div>
      <div className="card bg-light mb-3" id="reviews-div">
        <h5 id="review-name">Reviews for {props.name}:</h5>
        <ReviewList reviews={reviews} />
        <p id="review-list">{props.reviews}</p>
      </div>
    </div>
  );
};

export default Movie;
