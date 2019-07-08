import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      <h1>Finished</h1>
      <ul>
        <li>
          <strong>1. </strong>
          How are you
          <i className={"fa fa-times " + classes.error} />
          />
        </li>

        <li>
          <strong>1. </strong>
          How are you
          <i className={"fa fa-check " + classes.success} />
        </li>
      </ul>
      <p>Правильно 4 из 10</p>
      <button>Повторить</button>
    </div>
  );
};

export default FinishedQuiz;
