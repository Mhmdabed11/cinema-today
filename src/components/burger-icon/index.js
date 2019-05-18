import React from "react";
import css from "./burgerIcon.module.css";
const BurgerIcon = props => {
  return (
    <div {...props} className={css.container}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default BurgerIcon;
