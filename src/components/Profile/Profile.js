import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = () => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const { name, email } = values;

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile__form" name="register" noValidate>
          <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input
              id="profile-name-input"
              minLength="4"
              maxLength="32"
              type="text"
              name="name"
              className="profile__input"
              onChange={handleChange}
              value={name || currentUser.name}
              required
            />
            <span
              className={`${
                !isValid && "profile__input-error_active"
              } profile__input-error`}
            >
              {errors.name}
            </span>
          </div>
          <div className="profile__field">
            <label className="profile__label">E-mail</label>
            <input
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+" // Махнуть в будущем на другой
              id="profile-email-input"
              type="email"
              name="email"
              className="profile__input"
              onChange={handleChange}
              value={email || currentUser.email}
              required
            />
            <span
              className={`${
                !isValid && "profile__input-error_active"
              } profile__input-error`}
            >
              {errors.email}
            </span>
          </div>
        </form>
        <ul className="profile__links">
          <li className="profile__link">
            <Link className="profile__edit link">Редактировать</Link>
          </li>
          <li className="profile__link">
            <Link className="profile__signout link">Выйти из аккаунта</Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Profile;
