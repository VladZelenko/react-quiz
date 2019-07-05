import React from "react";
import clasess from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={clasess.ActiveQuiz}>
    <p className={clasess.Question}>
      <span>
        <strong>1.</strong>&nbsp; {props.question}
      </span>
      <small>4 из 12</small>
    </p>
    <AnswersList answers={props.answers} onAnswerClick={props.onAnswerClick} />
  </div>
);

export default ActiveQuiz;
