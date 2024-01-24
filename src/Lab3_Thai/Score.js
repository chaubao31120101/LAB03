// Result.js
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const Result = ({ score, onReplay }) => {
    return (
        <div className='border border-dark p-5'>
            <h2>Quiz Completed</h2>
            <p className='text-danger'>Your Score: {score}</p>
            <button className='btn btn-primary' onClick={onReplay}>Replay</button>
        </div>
    );
};

export default Result;
