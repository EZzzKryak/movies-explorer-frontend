import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  // Костыль, подумать над заменой
  const location = useLocation();
  const notMainRoutes =
    location.pathname === "/profile" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/movies";

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${
                    !notMainRoutes ? "navbar__link_dark " : ""
                  }navbar__link navbar__link_active link`
                : `${
                    !notMainRoutes ? "navbar__link_dark " : ""
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
                    !notMainRoutes ? "navbar__link_dark " : ""
                  }navbar__link navbar__link_active link`
                : `${
                    !notMainRoutes ? "navbar__link_dark " : ""
                  }navbar__link link`
            }
            to="/saved-movies"
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
