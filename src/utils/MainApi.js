import { handleRequest } from "./utils";

export const registerUser = ({ email, password, name }) => {
  return fetch("https://rocket-movies.api.nomoredomainsrocks.ru/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then(handleRequest);
};

export const authorizeUser = ({ email, password }) => {
  return fetch("https://rocket-movies.api.nomoredomainsrocks.ru/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(handleRequest);
};

export const getUser = token => {
  return fetch("https://rocket-movies.api.nomoredomainsrocks.ru/users/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleRequest);
};

export const updateUser = ({ name, email }) => {
  return fetch("https://rocket-movies.api.nomoredomainsrocks.ru/users/me", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name,
      email,
    }),
  }).then(handleRequest);
};

export const getSavedMovies = () => {
  return fetch("https://rocket-movies.api.nomoredomainsrocks.ru/movies", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(handleRequest);
};

export const saveMovie = ({
  country,
  director,
  duration,
  year,
  description,
  movieId,
  image,
  trailerLink,
  thumbnail,
  nameRU,
  nameEN,
}) => {
  return fetch("https://rocket-movies.api.nomoredomainsrocks.ru/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      movieId,
      image,
      trailerLink,
      thumbnail,
      nameRU,
      nameEN,
    }),
  }).then(handleRequest);
};

export const deleteMovie = movieId => {
  return fetch(
    `https://rocket-movies.api.nomoredomainsrocks.ru/movies/${movieId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }
  ).then(handleRequest);
};
