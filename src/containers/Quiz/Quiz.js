import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../component/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: []
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.wrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz answers={this.state} />
        </div>
      </div>
    );
  }
}

export default Quiz;
