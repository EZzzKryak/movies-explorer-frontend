import React from "react";
import { useLocation } from "react-router-dom";
import "./MenuBurger.css";

function MenuBurger({ onSetSideBarIsActive }) {
  // Костыль, подумать над заменой
  const location = useLocation();
  const notMainRoutes =
    location.pathname === "/profile" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/movies";

  return (
    <nav className="burger">
      <button
        type="button"
        className={`burger__button button${
          !notMainRoutes ? " burger__button_light" : ""
        }`}
        onClick={onSetSideBarIsActive}
      >
        <span
          className={`burger__line${
            !notMainRoutes ? " burger__line_light" : ""
          }`}
        ></span>
      </button>
    </nav>
  );
}

export default MenuBurger;
