import React, { useState } from 'react';
import Card from '../Shared/card';
import RatingSelect from '../components/rating';

const FeedBackForm = ({ HandleAdd }) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    let inputValue = e.target.value;
    setText(inputValue);

    if (inputValue.trim() === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (inputValue.trim().length < 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 10) return; 

    let newFeedback = { text, rating };
    HandleAdd(newFeedback);
    setText('');
    setBtnDisabled(true); 
  };

  return (
    <Card>
      <form onSubmit={HandleSubmit}>
        <h2>How would you rate your services with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text} />
          <button type="submit" disabled={btnDisabled}>Send</button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
