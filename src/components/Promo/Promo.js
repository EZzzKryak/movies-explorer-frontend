import React from "react";
import { useAdaptiveRender } from "../../hooks/useAdaptiveRender";
import "./Promo.css";

const Promo = () => {
  const { isDesktop } = useAdaptiveRender();

  return (
    <section className="promo">
      <div className="promo__container">
        {!isDesktop && <div className="promo__img"></div>}
        <div className="promo__info">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__below-info">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        {isDesktop && <div className="promo__img"></div>}
      </div>
      <a
        href="https://github.com/EZzzKryak/movies-explorer-frontend"
        rel="noreferrer"
        target="_blank"
        className="promo__learn-more button"
      >
        Узнать больше
      </a>
    </section>
  );
};

export default Promo;
