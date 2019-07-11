import React from "react";
import clasess from "./Button.module.css";

const Button = props => {
  const cls = [clasess.Button, clasess[props.type]];
  return (
    <button
      onClick={props.onClick}
      className={cls.join(" ")}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
