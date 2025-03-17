import React, { useState } from 'react';
import Card from '../Shared/card';

const FeedbackItem = ({ item, HandleDelete }) => {
    return (
        <div>
            <Card>
                <div className="num-display">{item.rating}</div>
                <div className="text-display">{item.text}</div>
                <button  onClick={() => HandleDelete(item.id)}>Delete</button>
            </Card>
        </div>
    );
};

export default FeedbackItem;