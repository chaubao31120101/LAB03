// QuizApp.js
import React, { Component } from 'react';
import Question from './Question';
import Result from './Score';

class QuizApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [
                {
                    id: 1,
                    question: "What is the capital of France?",
                    options: ["Paris", "London", "Berlin", "Madrid"],
                    answer: "Paris"
                },
                {
                    id: 2,
                    question: "What is the largest planet in our solar system?",
                    options: ["Saturn", "Mars", "Jupiter", "Earth"],
                    answer: "Jupiter"

                },
                {
                    id: 3,
                    question: "What is the largest planet in our solar system?",
                    options: ["1", "2", "3", "4"],
                    answer: "4"
                }
                // Add more questions here
            ],
            currentQuestion: 0,
            selectedAnswer: null,
            score: 0,
            quizEnd: false
        };
    }

    handleAnswerSelect = (selectedAnswer) => {
        this.setState({
            selectedAnswer
        });
    };

    handleAnswerSubmit = () => {
        const { currentQuestion, selectedAnswer, questions, score } = this.state;

        if (selectedAnswer === questions[currentQuestion].answer) {
            this.setState({
                score: score + 1
            });
        }

        if (currentQuestion < questions.length - 1) {
            this.setState({
                currentQuestion: currentQuestion + 1,
                selectedAnswer: null
            });
        } else {
            this.setState({
                quizEnd: true
            });
        }
    };

    handleReplay = () => {
        this.setState({
            currentQuestion: 0,
            selectedAnswer: null,
            score: 0,
            quizEnd: false
        });
    };


    render() {
        console.log(this.state);

        const { questions, currentQuestion, selectedAnswer, score, quizEnd } = this.state;

        return (
            <div>
                {!quizEnd ? (
                    <Question
                        question={questions[currentQuestion].question}
                        options={questions[currentQuestion].options}
                        selectedAnswer={selectedAnswer}
                        onAnswerSelect={this.handleAnswerSelect}
                        onAnswerSubmit={this.handleAnswerSubmit}
                        questionNumber={currentQuestion + 1}
                    />
                ) : (
                    <Result score={score} onReplay={this.handleReplay} />
                )}
            </div>
        );
    }
}

export default QuizApp;
