import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__copyright">&#169; 2023</p>
        <div className="footer__links">
          <Link
            target="_blank"
            to="https://practicum.yandex.ru/"
            className="footer__link link"
          >
            Яндекс.Практикум
          </Link>
          <Link
            target="_blank"
            to="https://github.com/EZzzKryak"
            className="footer__link link"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
