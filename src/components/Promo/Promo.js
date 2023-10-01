import React from "react";
import { Link } from "react-router-dom";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <p className="promo__below-info">
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <Link className="promo__learn-more button">Узнать больше</Link>
    </section>
  );
};

export default Promo;
