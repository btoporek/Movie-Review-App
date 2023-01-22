import React from "react";
import MovieList from "./components/movieList";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
