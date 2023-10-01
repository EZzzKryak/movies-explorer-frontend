import React from "react";
import deleteIcon from "../../images/delete-film.svg";
import likeIcon from "../../images/movie-like.svg";
import "./MoviesCard.css";

const likeIsActive = true;
const convertDuration = duration => (Math.floor(duration / 60) && Math.floor(duration / 60) + "ч") + (duration % 60) + "м";

const MoviesCard = ({ film }) => {
  return (
    <div className="movie" key={film.movieId}>
      <img
        className="movie__thumbnail"
        src={film.thumbnail}
        alt={`Постер фильма ${film.nameRU}`}
      />
      <div className="movie__container">
        <h3 className="movie__name">{film.nameRU}</h3>
        <img
          className="movie__rate"
          src={likeIsActive ? likeIcon : deleteIcon}
          alt="Лайк/дизлайк"
        />
        {/* Может сделать кнопкой? */}
      </div>
      <p className="movie__duration">{convertDuration(film.duration)}</p>
      {/* Формат времени */}
    </div>
  );
};

export default MoviesCard;
