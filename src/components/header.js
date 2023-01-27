import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="card bg-dark text-light container-fluid">
        <h1 className="title">Movie Reviews</h1>
        <p className="text">
          Check out these movie classics. Rate, review, and more!
          <br></br>
          ⭐⭐⭐⭐⭐
        </p>
      </div>
    );
  }
}
