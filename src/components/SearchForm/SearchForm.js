import React from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import "./SearchForm.css";

const SearchForm = () => {
  const { values, handleChange, resetForm } = useFormAndValidation();
  const { movie } = values;

  return (
    <div className="search-panel">
      <form className="search-panel__form">
        <input
          className="search-panel__input"
          type="text"
          name="movie"
          placeholder="Фильм"
          value={movie || ""}
          onChange={handleChange}
          required
        />
        <button
          className="search-panel__search-btn button"
          type="submit"
          aria-label="Поиск фильма"
        >
          Найти
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
