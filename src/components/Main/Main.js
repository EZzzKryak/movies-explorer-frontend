import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Project from "../Project/Project";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

const Main = () => {
  return (
    <main className="main">
      <Promo />
      <Project />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Main;
