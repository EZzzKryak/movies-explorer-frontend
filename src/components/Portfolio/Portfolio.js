import React from 'react';
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
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
    );
};

export default Portfolio;