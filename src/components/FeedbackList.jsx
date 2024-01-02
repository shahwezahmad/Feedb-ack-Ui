import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
import Spinner from "../common/Spinner";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Review</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};
FeedbackList.defaultProps = {
  feedback: PropTypes.arrayOf({
    id: PropTypes.shape().number,
  }),
};
export default FeedbackList;
