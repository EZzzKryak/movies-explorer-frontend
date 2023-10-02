import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "../../images/circle-logo.svg";
import profileIcon from "../../images/profile-icon.svg";
import "./Header.css";

const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <img src={LogoIcon} alt="Лого сайта" className="logo" />
      {loggedIn ? (
        <>
          <nav className="navbar">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "navbar__link navbar__link_active link"
                  : "navbar__link link"
              }
              to="movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "navbar__link navbar__link_active link"
                  : "navbar__link link"
              }
              to="saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <Link to="profile" className="header__profile link">
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
          <Link to="signup" className="header__signup link">
            Регистрация
          </Link>
          <Link to="signin" className="header__signin link">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
