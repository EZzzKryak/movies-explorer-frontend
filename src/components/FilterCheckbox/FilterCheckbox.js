import React from "react";
import { useAdaptiveRender } from "../../hooks/useAdaptiveRender";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  const { isDesktop, isTablet, isMobile } = useAdaptiveRender();

  return (
    <form className="checkbox">
      <label className="checkbox__label button">
        {!isDesktop && "Короткометражки"}
        <input className="checkbox__input" type="checkbox" placeholder="Фильтр 'короткометражки'" />
        <span className="checkbox__switch"></span>
        {isDesktop && "Короткометражки"}
      </label>
    </form>
  );
};

export default FilterCheckbox;
