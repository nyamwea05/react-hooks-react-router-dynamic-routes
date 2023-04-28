import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";

function MoviesPage({ movies }) {
  return (
    <div>
      <h1>Movies Page</h1>
      <Route exact path="/movies">
        <MoviesList movies={movies} />
      </Route>
    </div>
  );
}

export default MoviesPage;
