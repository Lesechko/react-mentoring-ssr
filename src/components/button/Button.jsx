import styles from "./Button.module.css";
import React from "react";
import { BUTTON_TYPE, BUTTON_STYLE } from "./buttonTypes";

const Button = ({
  type = BUTTON_TYPE.DEFAULT,
  onClick,
  children,
  style = BUTTON_STYLE.COMPLETE
}) => {
  const className = `${styles.btn} ${styles[`btn-${style}`]}`;
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
