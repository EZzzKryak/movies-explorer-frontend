import React from "react";
import data from "../../utils/movies";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

const MoviesCardList = () => {
  return (
    <div className="movies-list">
      {data.map(film => (
        <MoviesCard film={film} />
      ))}
    </div>
  );
};

export default MoviesCardList;
