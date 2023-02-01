import React from "react";
import MovieCards from "../movieCards/MovieCards";

const MovieList = ({ movie, del, edit }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movie.map((el) => (
        <MovieCards className="card" el={el} del={del} edit={edit} />
      ))}
    </div>
  );
};

export default MovieList;
