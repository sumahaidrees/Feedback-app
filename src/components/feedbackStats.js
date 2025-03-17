import React from 'react';

const FeedbackStats = ({ feedback }) => {
    console.log(feedback);

    let average =
        feedback.reduce((acc, cur) => {
            return acc + cur.rating;
        }, 0) / feedback.length;

    console.log(average);

    return (
        <div className="feedback-stats">
            Average rating:
            {isNaN(average) ? 0 : average.toFixed(2)}
        </div>
    );
};

export default FeedbackStats;
