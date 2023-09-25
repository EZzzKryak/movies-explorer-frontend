import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../images/circle-logo.svg";
import profileIcon from "../../images/profile-icon.svg";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={headerLogo} alt="Лого шапки" className="header__logo" />
      <nav className="navbar">
        <Link className="navbar__link">Фильмы</Link>
        <Link className="navbar__link">Сохранённые фильмы</Link>
      </nav>
      <Link className="header__profile-btn">
        <p className="header__profile-text">Аккаунт</p>
        <img
          src={profileIcon}
          alt="Иконка профиля"
          className="header__profile-icon"
        />
      </Link>
    </header>
  );
};

export default Header;
