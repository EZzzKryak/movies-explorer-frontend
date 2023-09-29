import React from "react";
import dislikeIcon from "../../images/movie-dislike.svg";
import likeIcon from "../../images/movie-like.svg";
import data from "../../utils/movies";
import "./Movies.css";

const likeIsActive = true;

const movies = () => {
  return (
    <section className="movies">
      <div className="movies__search-panel">
        <h2 className="movies__title">Фильм</h2>
        <button className="movies__search-btn">Найти</button>
      </div>
      <label class="checkbox">
        <input type="checkbox" />
        <span class="checkbox-switch"></span>
        <p className="checkbox-label">Короткометражки</p>
      </label>

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
                src={likeIsActive ? likeIcon : dislikeIcon}
                alt="Лайк/дизлайк"
              />
              {/* Может сделать кнопкой? */}
            </div>
            <p className="movies__film-duration">{`${film.duration}м`}</p>
            {/* Формат времени */}
          </div>
        ))}
      </div>
      <button className="movies__more">Ещё</button>
    </section>
  );
};

export default movies;
