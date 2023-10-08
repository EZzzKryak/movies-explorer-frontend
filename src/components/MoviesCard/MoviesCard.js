import React from "react";
import { Link } from "react-router-dom";
import { useAdaptiveRender } from "../../hooks/useAdaptiveRender";
import "./MoviesCard.css";

const MoviesCard = ({ film }) => {
  const { isDesktop, isTablet, isMobile } = useAdaptiveRender();

  const convertDuration = duration =>
    (Math.floor(duration / 60) && Math.floor(duration / 60) + "ч ") +
    (duration % 60) +
    "м";

  // Временное решение до функционала
  const savedFilmsRoute = window.location.href.includes("saved-movies");
  const toggleLike = e => {
    e.target.classList.toggle("movie__like_active");
  };
  return (
    <li className="movie" key={film.movieId}>
      <Link className="button" to={film.trailerLink} target="_blank">
        <img
          className="movie__thumbnail"
          src={film.thumbnail}
          alt={`Постер фильма ${film.nameRU}`}
        />
      </Link>
      <div className="movie__container">
        <h2 className="movie__name">{film.nameRU}</h2>
        <button
          onClick={toggleLike}
          className={
            savedFilmsRoute
              ? isMobile
                ? "movie__delete movie__delete_active button"
                : "movie__delete button"
              : "movie__like button"
          }
          type="button"
          aria-label="Лайк\дизлайк"
        />
      </div>
      <p className="movie__duration">{convertDuration(film.duration)}</p>
    </li>
  );
};

export default MoviesCard;
