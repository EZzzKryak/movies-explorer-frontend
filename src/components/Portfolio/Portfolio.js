import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link
            target="_blank"
            to="https://github.com/EZzzKryak/russian-travel"
            className="portfolio__link link"
          >
            Статичный сайт
          </Link>
          <div className="portfolio__link-arrow"></div>
        </li>
        <li className="portfolio__list-item">
          <Link
            target="_blank"
            to="https://github.com/EZzzKryak/mesto-react-auth"
            className="portfolio__link link"
          >
            Адаптивный сайт
          </Link>
          <div className="portfolio__link-arrow"></div>
        </li>
        <li className="portfolio__list-item">
          <Link
            target="_blank"
            to="https://github.com/EZzzKryak/react-mesto-api-full-gha"
            className="portfolio__link link"
          >
            Одностраничное приложение
          </Link>
          <div className="portfolio__link-arrow"></div>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
