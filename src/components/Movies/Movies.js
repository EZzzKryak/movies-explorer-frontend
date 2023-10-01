import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

const movies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <button className="movies__more button">Ещё</button>
    </section>
  );
};

export default movies;
