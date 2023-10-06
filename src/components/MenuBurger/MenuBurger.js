import React from "react";
import "./MenuBurger.css";

function MenuBurger({ onSetSideBarIsActive }) {
  // Костыль, подумать над заменой
  const moviesOrProfileRoute = !(
    window.location.href.includes("profile") ||
    window.location.href.includes("movies")
  );
  return (
    <nav className="burger">
      <button className={`burger__button ${moviesOrProfileRoute && 'burger__button_light'}`} onClick={onSetSideBarIsActive}>
        <span className={`burger__line ${moviesOrProfileRoute && 'burger__line_light'}`}></span>
      </button>
    </nav>
  );
}

export default MenuBurger;
