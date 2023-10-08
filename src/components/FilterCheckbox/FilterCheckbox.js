import React from "react";
import { useAdaptiveRender } from "../../hooks/useAdaptiveRender";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  const { isDesktop, isTablet, isMobile } = useAdaptiveRender();

  return (
    <div className="checkbox">
      <label className="checkbox__label">
        {!isDesktop && <p className="checkbox__info">Короткометражки</p>}
        <input className="checkbox__input" type="checkbox" />
        <span className="checkbox__switch"></span>
        {isDesktop && <p className="checkbox__info">Короткометражки</p>}
      </label>
    </div>
  );
};

export default FilterCheckbox;
