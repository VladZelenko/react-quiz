import React from "react";
import classes from "./FinishedQuiz.module.css";

const FinishedQuiz = props => {
  return (
    <div className={classes.FinishedQuiz}>
      <h1>Finished</h1>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            classes[props.results[quizItem.id]]
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p>Правильно 4 из {props.quiz.length}</p>
      <button onClick={props.restart}>Повторить</button>
    </div>
  );
};

export default FinishedQuiz;
