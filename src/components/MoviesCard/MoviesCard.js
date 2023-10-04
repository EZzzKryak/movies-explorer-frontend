import React from "react";
import { Link } from "react-router-dom";
import "./MoviesCard.css";

const MoviesCard = ({ film }) => {
  const convertDuration = duration =>
    (Math.floor(duration / 60) && Math.floor(duration / 60) + "ч") +
    (duration % 60) +
    "м";

  // Временное решение до функционала
  const savedFilmsRoute = window.location.href.includes("saved-movies");
  const toggleLike = e => {
    e.target.classList.toggle("movie__like_active");
  };

  return (
    <div className="movie" key={film.movieId}>
      <Link to={film.trailerLink} target="_blank">
        <img
          className="movie__thumbnail"
          src={film.thumbnail}
          alt={`Постер фильма ${film.nameRU}`}
        />
      </Link>
      <div className="movie__container">
        <h3 className="movie__name">{film.nameRU}</h3>
        <button
          onClick={toggleLike}
          className={savedFilmsRoute ? "movie__delete" : "movie__like"}
          type="button"
          aria-label="Лайк\дизлайк"
        />
      </div>
      <p className="movie__duration">{convertDuration(film.duration)}</p>
    </div>
  );
};

export default MoviesCard;
