import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  // Костыль, подумать над заменой
  const moviesOrProfileRoute = !(
    window.location.href.includes("profile") ||
    window.location.href.includes("movies")
  );
  return (
    <nav className="navbar">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${
                  moviesOrProfileRoute ? "navbar__link_dark " : ""
                }navbar__link navbar__link_active link`
              : `${
                  moviesOrProfileRoute ? "navbar__link_dark " : ""
                }navbar__link link`
          }
          to="/movies"
        >
          Фильмы
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${
                  moviesOrProfileRoute ? "navbar__link_dark " : ""
                }navbar__link navbar__link_active link`
              : `${
                  moviesOrProfileRoute ? "navbar__link_dark " : ""
                }navbar__link link`
          }
          to="/saved-movies"
        >
          Сохранённые фильмы
        </NavLink>
      </li>
    </nav>
  );
};

export default Navigation;
