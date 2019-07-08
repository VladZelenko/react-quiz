import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
  <ul className={classes.AnswersList}>
    {props.answers.map((value, key) => {
      return (
        <AnswerItem
          answer={value}
          key={key}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[value.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswersList;
