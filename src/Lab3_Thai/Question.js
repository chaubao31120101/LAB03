// Question.js
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Question = ({
  quest,
  options,
  selectedAnswer,
  onAnswerSelect,
  onAnswerSubmit,
  questionNumber,
}) => {
  return (
    <div className="text-light p-5">
      <h2>{`Question ${questionNumber}: ${quest}`}</h2>
      <ul className="list-group">
        {options.map((option, index) => (
          <li className="w-100 list-group-item" key={index}>
            <label
              className={`btn w-100 ${
                selectedAnswer === option ? "btn-primary" : ""
              }`}
              for={index}
            >
              <input
                hidden
                type="radio"
                id={index}
                value={option}
                checked={selectedAnswer === option}
                onChange={() => {
                  onAnswerSelect(option);
                }}
              />

              {option}
            </label>
          </li>
        ))}
      </ul>
      <button className="btn btn-success m-3" onClick={onAnswerSubmit}>
        Submit Answer
      </button>
    </div>
  );
};

export default Question;
