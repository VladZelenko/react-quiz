import React from "react";
import clasess from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={clasess.ActiveQuiz}>
    <p className={clasess.Question}>
      <span>
        <strong>1.</strong>&nbsp; Как дела?
      </span>
      <small>4 из 12</small>
    </p>
    <AnswersList answers={props.answers} />
  </div>
);

export default ActiveQuiz;