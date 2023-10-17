import { handleRequest } from "./utils";

export const getAllMovies = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    "Content-Type": "application/json",
  }).then(handleRequest);
};
