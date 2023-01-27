import React from "react";
import Movie from "./components/movie";
import { movieList } from "./components/MovieList";
import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";

function App(props) {
  const movies = movieList.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="container" id="movie">
        <div className="row gy-4">
          <>{movies}</>
        </div>
      </div>
    </div>
  );
}

export default App;
