import React from "react";

function MoviesList({ movies }) {
  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {Object.keys(movies).map((movieId) => (
          <li key={movieId}>{movies[movieId].title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;