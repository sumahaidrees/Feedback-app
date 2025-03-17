import React, { useState } from "react";
import Header from '../components/header'
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from "../components/feedbackStats";
import FeedbackForm from "../components/feedbackform";
import FeedbackData from "../Data/feedback";

const Home = () => {
    const [feedback, setFeedback] = useState(FeedbackData);
    console.log(feedback);
    const HandleDelete = (id) => {
      console.log('App', id);
      if (window.confirm('Are you sure  you want to delete ')) {
        setFeedback(feedback.filter((item) => item.id !== id));
      }
    };
    const HandleSubmit = (newValue) => {
     
      console.log(newValue, 'hoME PAGE');
      setFeedback([newValue, ...feedback]);
    };
    return (
      <div className="container">
        <Header text="Feedback UI" bgColor="blue" textColor="white" />
  
        <FeedbackForm HandleAdd={HandleSubmit} />
        <FeedbackStats feedback={feedback} />
        <div style={{ color: 'white' }}>{feedback.length}</div>
  
        <FeedbackList feedback={feedback} HandleDelete={HandleDelete} />
      </div>
    );
  };

export default Home;
