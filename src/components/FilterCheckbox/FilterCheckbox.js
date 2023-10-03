import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = () => {
  return (
    <label className="checkbox">
      <input className="checkbox__input" type="checkbox" />
      <span className="checkbox__switch"></span>
      <p className="checkbox__label">Короткометражки</p>
    </label>
  );
};

export default FilterCheckbox;
