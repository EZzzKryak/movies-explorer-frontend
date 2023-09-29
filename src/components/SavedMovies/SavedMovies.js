import React from "react";
import deleteIcon from "../../images/delete-film.svg";
import data from "../../utils/movies";
import "../Movies/Movies.css";

const SavedMovies = () => {
  return (
    <section className="movies">
      <div className="movies__films">
        {data.map(film => (
          <div className="movies__film" key={film.movieId}>
            <img
              className="movies__film-img"
              src={film.thumbnail}
              alt={`Постер фильма ${film.nameRU}`}
            />
            <div className="movies__film-container">
              <h3 className="movies__film-name">{film.nameRU}</h3>
              <img
                className="movies__film-rate"
                src={deleteIcon}
                alt="Лайк/дизлайк"
              />
              {/* Может сделать кнопкой? */}
            </div>
            <p className="movies__film-duration">{`${film.duration}м`}</p>
            {/* Формат времени */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedMovies;
