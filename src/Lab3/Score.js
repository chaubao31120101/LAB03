// Result.js
import React from 'react';

const Result = ({ score, onReplay }) => {
    return (
        <div>
            <h2>Quiz Completed</h2>
            <p>Your Score: {score}</p>
            <button onClick={onReplay}>Replay</button>
        </div>
    );
};

export default Result;
