// import { useState } from "react"
import Card from "../common/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
const FeedbackItem = ({ item }) => {
  const { handleDelete, handleEdit } = useContext(FeedbackContext);
  // const [rating,setRating] = useState(0)
  // const [text,setText] = useState('this is from state')

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="blue" />
      </button>
      <button className="edit" onClick={() => handleEdit(item)}>
        <FaEdit color="blue" />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={(rating)=> setRating((rating)=>rating + rating+1)}>click</button> */}
    </Card>
  );
};
export default FeedbackItem;
