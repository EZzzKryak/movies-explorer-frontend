import headerLogo from "../../images/circle-logo.svg";
import profileIcon from "../../images/profile-icon.svg";
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <header className="header">
        <img src={headerLogo} alt="Лого шапки" className="header__logo" />
        <nav className="navbar">
          <li className="navbar__link">Фильмы</li>
          <li className="navbar__link">Сохранённые фильмы</li>
        </nav>
        {/* Будет ошибка скорее всего, т.к. картинка внутри кнопки */}
        <div className="header__profile-btn">
          <p className="header__profile-text">Аккаунт</p>
          <img src={profileIcon} alt="Иконка профиля" className="header__profile-icon"/>
        </div>
      </header>

      <main className="main">
        <h1 className="main__project-name">Учебный проект студента факультета Веб-разработки.</h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default App;
