import { useState, useEffect } from "react";
import Card from "../common/Card";
import Button from "../common/Button";
import SelectRating from "./SelectRating";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";

function FeedbackForm() {
  const { handleAdd, editFeedback, handleUpdate } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [btnDisable, setBtnDisable] = useState(true);

  useEffect(() => {
    if (editFeedback.edit === true) {
      setBtnDisable(false);
      setRating(editFeedback.item.rating);
      setText(editFeedback.item.text);
    }
  }, [editFeedback]);

  const handleChange = (e) => {
    // console.log(text.length);
    if (text === "") {
      // console.log(text.length);
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      // console.log(text.length);
      setBtnDisable(true);
      setMessage("enter atleast 10 characters");
    } else {
      // console.log(text.length);
      setBtnDisable(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      if (editFeedback.edit === true) {
        handleUpdate(editFeedback.item.id, newFeedback);
      } else {
        handleAdd(newFeedback);
      }

      setText("");
      // console.log(text   )
      // console.log(newFeedback);
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate our services?</h2>
        <SelectRating />
        <div className="input-group">
          <input
            type="text"
            name="review"
            placeholder="write a review"
            onChange={handleChange}
          />
          <Button type="submit" isDisable={btnDisable}>
            send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
