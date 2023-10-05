import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import LogoIcon from "../../images/circle-logo.svg";
import profileIcon from "../../images/profile-icon.svg";
// import MenuBurger from "../MenuBurger/MenuBurger";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  // Костыль, подумать над заменой
  const moviesOrProfileRoute = !(
    window.location.href.includes("profile") ||
    window.location.href.includes("movies")
  );
  const { loggedIn } = useContext(AuthContext);

  return (
    <header className={`header${moviesOrProfileRoute ? " header_dark" : ""}`}>
      <Link to={"/"}>
        <img src={LogoIcon} alt="Логотип сайта" className="header__logo" />
      </Link>
      {loggedIn ? (
        <>
          <Navigation />
          {/* <MenuBurger /> */}
          <Link
            to="/profile"
            className={`header__profile link${
              moviesOrProfileRoute ? " header__profile_dark" : ""
            }`}
          >
            <p className="header__profile-text">Аккаунт</p>
            <img
              src={profileIcon}
              alt="Иконка профиля"
              className="header__profile-icon"
            />
          </Link>
        </>
      ) : (
        <div className="header__auth-links">
          <Link to="/signup" className="header__signup link">
            Регистрация
          </Link>
          <Link to="/signin" className="header__signin link">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
