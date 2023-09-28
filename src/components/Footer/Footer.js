import React from 'react';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
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
    );
};

export default Footer;