import React from "react";
import { Link } from "react-router-dom";
import { useAdaptiveRender } from "../../hooks/useAdaptiveRender";
import myPhoto from "../../images/my-photo.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  const { isDesktop, isTablet, isNotebook } = useAdaptiveRender();

  return (
    <section className="about-me">
      <h2 className="project__title">Студент</h2>
      <div className="about-me__container">
        {!isNotebook && (
          <img className="about-me__photo" src={myPhoto} alt="Моё фото" />
        )}
        <div className="about-me__description">
          <h3 className="about-me__name">Александр</h3>
          <p className="about-me__info">Фронтенд-разработчик, 25 лет</p>
          <p className="about-me__text">
            Я родился в небольшом, но уютном городе Павлово. Получил высшее
            образование в политехе Нижнего Новгорода по направлению
            "Радиотехника", но в данное время работаю ведущим специалистом на
            производстве в атомной промышленности. Увлекаюсь электронныи
            гаджетами, слежу за «околожелезными» технологиями и инновациями в
            сфере девайсов. Уже больше года самым страстным моим хобби является
            веб-разработка и сфера it в целом: прошёл несколько курсов от
            простых до углублённых. Люблю решать задачки на CodeWars, изучаю
            алгоритмы, углубляюсь в тему computer science. Хочу начать карьеру в
            it и работать над действительно крутыми продуктами.
          </p>
          <Link
            target="_blank"
            to="https://github.com/EZzzKryak"
            className="about-me__github link"
          >
            Github
          </Link>
        </div>
        {isNotebook && (
          <img className="about-me__photo" src={myPhoto} alt="Моё фото" />
        )}
      </div>
    </section>
  );
};

export default AboutMe;
