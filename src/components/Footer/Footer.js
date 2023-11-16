import React from "react";
import { useAdaptiveRender } from "../../hooks/useAdaptiveRender";
import "./Footer.css";

const Footer = () => {
  const { isMobile } = useAdaptiveRender();

  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        {!isMobile && (
          <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
        )}
        <ul className="footer__links">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://practicum.yandex.ru/"
              className="footer__link link"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/EZzzKryak"
              className="footer__link link"
            >
              Github
            </a>
          </li>
        </ul>
        {isMobile && (
          <p className="footer__copyright footer__copyright_gray">
            &#169;{new Date().getFullYear()}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
