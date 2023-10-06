import React from "react";
import { NavLink } from "react-router-dom";
import ProfileButton from "../ProfileButton/ProfileButton";
import "./Sidebar.css";

const Sidebar = ({ sidebarIsActive, onSetSideBarIsActive }) => {
  return (
    <nav className={`sidebar${sidebarIsActive ? " sidebar_active" : ""}`}>
      <button className="sidebar__close" onClick={onSetSideBarIsActive}></button>
      <ul className="sidebar__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "sidebar__list-item sidebar__list-item_active"
                : "sidebar__list-item"
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "sidebar__list-item sidebar__list-item_active"
                : "sidebar__list-item"
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "sidebar__list-item sidebar__list-item_active"
                : "sidebar__list-item"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <ProfileButton />
    </nav>
  );
};

export default Sidebar;
