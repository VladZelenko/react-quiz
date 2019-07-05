import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: "Какого цвета небо?",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Красное", id: 1 },
          { text: "Синее", id: 2 },
          { text: "Белое", id: 3 },
          { text: "Зеленое", id: 4 }
        ]
      },
      {
        question: "Какого цвета Солнце?",
        rightAnswerId: 4,
        id: 2,
        answers: [
          { text: "Красное", id: 1 },
          { text: "Синее", id: 2 },
          { text: "Белое", id: 3 },
          { text: "Желтое", id: 4 }
        ]
      },
      {
        question: "Конец опроса",
        answers: []
      }
    ],
    title: "Ответьте на все вопросы."
  };

  onAnswerClickHendler = answerId => {
    if (answerId === this.state.quiz[this.state.activeQuestion].rightAnswerId) {
      console.log("Правильный ответ");
      this.setState({ activeQuestion: this.state.activeQuestion + 1 });
    } else {
      console.log("Подумай еще");
    }
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.wrapper}>
          <h1>{this.state.title}</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHendler}
            quizLenght={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
