import React from "react";
import "./Project.css";

const Project = () => {
  return (
    <section className="project">
      <h1 className="title">О проекте</h1>
      <ul className="project__runtime">
        <li className="project__runtime-item">
          <h2 className="project__runtime-title">
            Дипломный проект включал 5 этапов
          </h2>
          <p className="project__runtime-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__runtime-item">
          <h2 className="project__runtime-title">
            На выполнение диплома ушло 5 недель
          </h2>
          <p className="project__runtime-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <article className="project__runtime-scheme">
        <h3 className="project__runtime-scheme-item">1 неделя</h3>
        <h3 className="project__runtime-scheme-item">4 недели</h3>
        <div className="project__runtime-scheme-item">Back-end</div>
        <div className="project__runtime-scheme-item">Front-end</div>
      </article>
    </section>
  );
};

export default Project;
