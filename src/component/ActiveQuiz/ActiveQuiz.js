import React from "react";
import clasess from "./ActiveQuiz.module.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
  <div className={clasess.ActiveQuiz}>
    <p className={clasess.Question}>
      <span>
        <strong>{props.answerNumber}.</strong>&nbsp; {props.question}
      </span>
      <small>
        {props.answerNumber} из {props.quizLenght}
      </small>
    </p>
    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
);

export default ActiveQuiz;
