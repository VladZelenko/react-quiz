import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        answers: [
          { text: "Красное", id: 1 },
          { text: "Синее", id: 2 },
          { text: "Белое", id: 3 },
          { text: "Зеленое", id: 4 }
        ]
      }
    ],
    title: "Ответьте на все вопросы."
  };

  onAnswerClickHendler = answerId => {
    if (answerId === 2) {
      console.log("Правильный ответ");
    } else {
      console.log("Подумай еще");
    }
    // console.log("ID " + answerId);
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.wrapper}>
          <h1>{this.state.title}</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHendler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
