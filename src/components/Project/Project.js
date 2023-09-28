import React from 'react';
import "./Project.css";

const Project = () => {
    return (
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
    );
};

export default Project;