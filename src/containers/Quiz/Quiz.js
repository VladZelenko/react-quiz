import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../component/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
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
      }
    ],
    title: "Ответьте на все вопросы."
  };

  restartQuestions = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    });
  };

  onAnswerClickHendler = answerId => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (answerId === question.rightAnswerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results: results
      });

      const timeOut = window.setTimeout(() => {
        if (this.ifQuizFinished()) {
          console.log("Голосование закончилось");
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        window.clearTimeout(timeOut);
      }, 500);
      console.log("Правильный ответ");
    } else {
      console.log("Подумай еще");

      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results: results
      });
    }
  };

  ifQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.wrapper}>
          {this.state.isFinished ? (
            <FinishedQuiz
              restart={this.restartQuestions}
              results={this.state.results}
              quiz={this.state.quiz}
            />
          ) : (
            <div>
              <h1>{this.state.title}</h1>

              <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHendler}
                quizLenght={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
