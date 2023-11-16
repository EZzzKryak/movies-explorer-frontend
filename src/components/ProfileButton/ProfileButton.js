import React from "react";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../../images/profile-icon.svg";
import "./ProfileButton.css";

const ProfileButton = ({ lightClass }) => {
  // Костыль, подумать над заменой
  const location = useLocation();
  const notMainRoutes =
    location.pathname === "/profile" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/movies";

  return (
    <Link
      to="/profile"
      className={`profile-btn link ${lightClass} ${
        !notMainRoutes ? "profile-btn_dark" : ""
      }`}
    >
      <p className="profile-btn__text">Аккаунт</p>
      <img
        src={profileIcon}
        alt="Иконка профиля"
        className="profile-btn__icon"
      />
    </Link>
  );
};

export default ProfileButton;
