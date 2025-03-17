import React,{useState} from "react";
import Header from '../components/header'
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from "../components/feedbackStats";
import FeedbackForm from "../components/feedbackform";
import FeedbackData from "../Data/feedback";

const Home=()=>{
    const [feedback , setFeedback]=useState(FeedbackData)
    console.log(feedback)
    const HandleDelete = (id) => {
 if(window.confirm('Are you sure you want to delete')){
    setFeedback(feedback.filter((item)=>item.id!==id))
 }

    }
    return(
        <div className="container">
            <Header text="Feedbak UI" bgColor="blue" textColor="white"/>
            <FeedbackStats feedback={feedback}/>
            <div className="feedback-length">Total Feedbacks: {feedback.length}</div>
            <FeedbackForm/>

            <FeedbackList feedback={feedback} HandleDelete={HandleDelete}/>
        </div>
    )
}
export default Home


