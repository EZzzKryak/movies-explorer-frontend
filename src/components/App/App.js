import { Link } from "react-router-dom";
import myPhoto from "../../images/my-photo.jpg";
import Header from "../Header/Header";
import "./App.css";

const App = () => {
  return (
    // <div className="dark-bg">
    <div className="page">
      <Header />

      <main className="main">
        <section className="promo">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="promo__below-info">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link className="promo__learn-more">Узнать больше</Link>
        </section>

        <section className="project">
          <h2 className="project__title">О проекте</h2>
          <ul className="project__runtime">
            <li className="project__runtime-item">
              <h3 className="project__runtime-title">
                Дипломный проект включал 5 этапов
              </h3>
              <p className="project__runtime-text">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </li>
            <li className="project__runtime-item">
              <h3 className="project__runtime-title">
                На выполнение диплома ушло 5 недель
              </h3>
              <p className="project__runtime-text">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </li>
          </ul>
          <div className="project__runtime-scheme">
            <div className="project__runtime-scheme-item">1 неделя</div>
            <div className="project__runtime-scheme-item">4 недели</div>
            <div className="project__runtime-scheme-item">Back-end</div>
            <div className="project__runtime-scheme-item">Front-end</div>
          </div>
        </section>

        <section className="techs">
          <h2 className="project__title">Технологии</h2>
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__description">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__list">
            <li className="techs__list-item">HTML</li>
            <li className="techs__list-item">CSS</li>
            <li className="techs__list-item">JS</li>
            <li className="techs__list-item">React</li>
            <li className="techs__list-item">Git</li>
            <li className="techs__list-item">Express.js</li>
            <li className="techs__list-item">mongoDB</li>
          </ul>
        </section>

        <section className="about-me">
          <h2 className="project__title">Студент</h2>
          <div className="about-me__container">
            <div className="about-me__description">
              <h3 className="about-me__name">Александр</h3>
              <p className="about-me__info">Фронтенд-разработчик, 25 лет</p>
              <p className="about-me__text">
                Я родился в небольшом, но уютном городе Павлово - родине
                автобусов «ПАЗ». Получил высшее образование в НГТУ им. Алексеева
                в Нижнем Новгороде по направлению "Радиотехника", но в данное
                время работаю ведущим специалистом на производстве в атомной
                промышленности. Увлекаюсь электронными устройствами и
                программированием ПЛК, слежу за «околожелезными» технологиями и
                инновациями в сфере девайсов. Уже больше года самым страстным
                моим хобби является веб-разработка и сфера it в целом: прошёл
                несколько курсов от простых до углублённых. Люблю решать задачки
                на CodeWars, изучаю алгоритмы, углубляюсь в тему computer
                science. Хочу начать карьеру в it и работать над действительно
                крутыми продуктами.
              </p>
              <Link className="about-me__github">Github</Link>
            </div>
            <img className="about-me__photo" src={myPhoto} alt="Моё фото" />
          </div>
        </section>

        <section className="portfolio">
          <h2 className="portfolio__title">Портфолио</h2>
          <ul className="portfolio__list">
            <li className="portfolio__list-item">
              <Link className="portfolio__link">Статичный сайт</Link>
              <div className="portfolio__link-arrow"></div>
            </li>
            <li className="portfolio__list-item">
              <Link className="portfolio__link">Адаптивный сайт</Link>
              <div className="portfolio__link-arrow"></div>
            </li>
            <li className="portfolio__list-item">
              <Link className="portfolio__link">Одностраничное приложение</Link>
              <div className="portfolio__link-arrow"></div>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__container">
          <p className="footer__copyright">&#169; 2023</p>
          <div className="footer__links">
            <Link className="footer__link">Яндекс.Практикум</Link>
            <Link className="footer__link">Github</Link>
          </div>
        </div>
      </footer>
    </div>
    // </div>
  );
};

export default App;
