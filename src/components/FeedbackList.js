import React from 'react';
import FeedbackItem from '../components/FeedbackItem';

const FeedbackList = ({ feedback, HandleDelete }) => {
    if (!feedback || feedback.length === 0) {
        return <h1>NOT FOUND FEEDBACK</h1>;
    }

    return (
        <div className="feedback-list">
            {feedback.map((item,index) => {
                console.log(item);
                return (
                    <>
                    <FeedbackItem key={item.id} item={item} HandleDelete={HandleDelete} />
                    </>
                );
            })}
        </div>
    );
};

export default FeedbackList;
