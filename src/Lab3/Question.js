// Question.js
import React from 'react';

const Question = ({ question, options, selectedAnswer, onAnswerSelect, onAnswerSubmit, questionNumber }) => {
    return (
        <div>
            <h2>{`Question ${questionNumber}: ${question}`}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => onAnswerSelect(option)}
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={onAnswerSubmit}>Submit Answer</button>
        </div>
    );
};

export default Question;
