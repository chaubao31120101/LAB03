// QuizApp.js
import React, { Component } from "react";
import Question from "./Question";
import Result from "./Score";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DOM_KEY_LOCATION } from "@testing-library/user-event/dist/keyboard/types";

class QuizApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris",
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Saturn", "Mars", "Jupiter", "Earth"],
          answer: "Jupiter",
        },
        {
          id: 3,
          question: "Who is the best soccer player in 2023?",
          options: ["Messi", "Ronaldo", "Haaland", "M3p"],
          answer: "Haaland",
        },
        {
          id: 4,
          question:
            "Which of the following languages ​​is the most popular in the world?",
          options: ["Spanish", "Vietnamese", "English", "Japanese"],
          answer: "English",
        },
        // Add more questions here
      ],
      currentQuestion: 0,
      selectedAnswer: null,
      score: 0,
      quizEnd: false,
    };
  }

  handleAnswerSelect = (selectedAnswer) => {
    this.setState({
      selectedAnswer,
    });
  };

  handleAnswerSubmit = () => {
    const { currentQuestion, selectedAnswer, questions, score } = this.state;

    if (selectedAnswer === questions[currentQuestion].answer) {
      this.setState({
        score: score + 1,
        timer: 0,
      });
    } else {
      this.setState({
        timer: 0,
        currentQuestion: currentQuestion + 1,
        selectedAnswer: null,
      });
    }
    if (currentQuestion < questions.length - 1) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedAnswer: null,
      });
    } else {
      this.setState({
        quizEnd: true,
      });
    }
  };

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer >= 200 ? 0 : prevState.timer + 1,
      }));
    }, 50);
  }

  componentDidUpdate(prevProps, prevState) {
    const { timer, currentQuestion, questions } = this.state;

    if (timer === 200) {
      this.setState({
        timer: 0,
      });
      if (currentQuestion < questions.length - 1) {
        this.setState({
          currentQuestion: prevState.currentQuestion + 1,
        });
      } else {
        this.setState({
          quizEnd: true,
        });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  handleReplay = () => {
    this.setState({
      currentQuestion: 0,
      selectedAnswer: null,
      score: 0,
      quizEnd: false,
      timer: 0,
    });
  };

  render() {
    console.log(this.state);

    const {
      questions,
      currentQuestion,
      selectedAnswer,
      score,
      quizEnd,
      timer,
    } = this.state;

    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        {!quizEnd ? (
          <div>
            <div className="timeline">
              <div
                className="progress"
                style={{ width: `${timer / 2}%` }}
              ></div>
              <div className="circle" style={{ left: `${timer / 2}%` }}></div>
            </div>
            <Question
              quest={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={this.handleAnswerSelect}
              onAnswerSubmit={this.handleAnswerSubmit}
              questionNumber={currentQuestion + 1}
            />
          </div>
        ) : (
          <Result score={score} onReplay={this.handleReplay} />
        )}
      </div>
    );
  }
}

export default QuizApp;
