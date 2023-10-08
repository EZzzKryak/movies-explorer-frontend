import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import Header from "../Header/Header";
import "./Profile.css";

const Profile = ({ handleEditProfile, onSignOut }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  const { name, email } = values;

  const handleSubmit = e => {
    e.preventDefault();
    if (isValid) {
      handleEditProfile(values);
    }
  };

  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form
          className="profile__form"
          name="register"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input
              id="profile-name-input"
              minLength="2"
              maxLength="30"
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
            <button
              type="submit"
              aria-label="Редактировать профиль"
              className="profile__edit button"
            >
              Редактировать
            </button>
          </li>
          <li className="profile__link">
            <button onClick={onSignOut} className="profile__signout link">
              Выйти из аккаунта
            </button>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Profile;
