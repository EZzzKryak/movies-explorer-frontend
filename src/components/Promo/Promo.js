import React from "react";
import { Link } from "react-router-dom";
import { useAdaptiveRender } from "../../hooks/useAdaptiveRender";
import "./Promo.css";

const Promo = () => {
  const { isDesktop, isTablet, isMobile } = useAdaptiveRender();

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
      <Link
        to="https://github.com/EZzzKryak/movies-explorer-frontend"
        target="_blank"
        className="promo__learn-more button"
      >
        Узнать больше
      </Link>
    </section>
  );
};

export default Promo;
