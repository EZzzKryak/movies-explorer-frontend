import React from "react";
import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import LogoIcon from "../../images/circle-logo.svg";
import "./Login.css";

const Login = ({ handleLogin }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const { email, password } = values;

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    if (isValid) {
      handleLogin(values, resetForm);
    }
  };

  return (
    <section className="auth">
      <img src={LogoIcon} alt="Лого сайта" className="logo" />
      <h2 className="auth__title">Рады видеть!</h2>
      <form
        name="login"
        className="auth__form"
        noValidate
        onSubmit={handleSubmit}
      >
        <label className="auth__field">
          E-mail
          <input
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+" // Махнуть в будущем на другой
            id="login-email-input"
            type="email"
            name="email"
            className="auth__input"
            onChange={handleChange}
            value={email || ""}
            required
          />
          <span
            className={`${
              !isValid && "auth__input-error_active"
            } auth__input-error`}
          >
            {errors.email}
          </span>
        </label>
        <label className="auth__field">
          Пароль
          <input
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$"
            minLength="8"
            maxLength="20"
            id="login-pass-input"
            type="password"
            name="password"
            className="auth__input"
            onChange={handleChange}
            value={password || ""}
            required
          />
          <span
            className={`${
              !isValid && "auth__input-error_active"
            } auth__input-error`}
          >
            {errors.password}
          </span>
        </label>
        <div className="auth__submit-container">
          <p className="auth__submit-error">При обновлении профиля произошла ошибка.</p>
          <button
            disabled={!isValid}
            type="submit"
            className="auth__submit button"
            aria-label="Сохранить данные"
          >
            Войти
          </button>
        </div>
        <div className="auth__link-container">
          <p className="auth__link-question">Ещё не зарегистрированы?</p>
          <Link className="auth__link link" to="/signup">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
