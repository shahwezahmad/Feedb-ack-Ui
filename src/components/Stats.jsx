import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

const Stats = () => {
  const { feedback } = useContext(FeedbackContext)
   // let average = feedback.reduce((acc, cur) => {
  //    return acc + cur;
  //   }, 0) / average.length;
  let avg = feedback.reduce((acc,cur)=> {
  
        return acc + cur.rating
  },0)  / feedback.length
  avg = avg.toFixed(1).replace(/[.,]$/,'')
  return (
    <div>
      <div className="feedback-stats">
        <h4> {feedback.length} Reviews </h4>
        <h4>Average Rating: {  isNaN(avg) ? 0 : avg} </h4>
      </div>
    </div>
  );
};

export default Stats;
