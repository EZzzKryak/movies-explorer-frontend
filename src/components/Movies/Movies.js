import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

const movies = () => {
  return (
    <>
      <Header />
      <main className="movies">
        <SearchForm />
        <FilterCheckbox />
        <MoviesCardList />
        <button className="movies__more button">Ещё</button>
      </main>
      <Footer />
    </>
  );
};

export default movies;
