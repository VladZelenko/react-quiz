import React from "react";
import classes from "./AnswerItem.module.css";

const AnswerItem = props => {
  const arrClasess = [classes.AnswerItem];
  if (props.state) {
    arrClasess.push(props.state);
  }
  return (
    <li
      className={arrClasess.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
