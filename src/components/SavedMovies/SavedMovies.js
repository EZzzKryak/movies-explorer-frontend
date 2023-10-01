import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "../Movies/Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

const SavedMovies = () => {
  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <button className="movies__more button">Ещё</button>
    </section>
  );
};

export default SavedMovies;
