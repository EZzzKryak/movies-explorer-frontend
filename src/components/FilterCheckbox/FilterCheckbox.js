import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <div className="checkbox">
    <label className="checkbox__label">
      <input className="checkbox__input" type="checkbox" />
      <span className="checkbox__switch"></span>
      <p className="checkbox__info">Короткометражки</p>
    </label>
    </div>
  );
};

export default FilterCheckbox;
