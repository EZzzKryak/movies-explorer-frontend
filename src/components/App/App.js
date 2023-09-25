import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

const App = () => {
  return (
    <div className="page">
      <div className="dark-bg">
        <Header />
      </div>

      <main className="main">
        <div className="dark-bg">
          <section className="promo">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__below-info">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
            <Link className="promo__learn-more">Узнать больше</Link>
          </section>
        </div>

        <section className="project">
          <h2 className="project__title">О проекте</h2>
          <ul className="project__runtime">
            <li className="project__runtime-item">
              <h3 className="project__runtime-title">Дипломный проект включал 5 этапов</h3>
              <p className="project__runtime-text">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </li>
            <li className="project__runtime-item">
              <h3 className="project__runtime-title">На выполнение диплома ушло 5 недель</h3>
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
      </main>

      <footer></footer>
    </div>
  );
};

export default App;
