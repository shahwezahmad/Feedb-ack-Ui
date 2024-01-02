import { createContext, useEffect, useState } from "react";
import FeedbackData from "../data/feedback";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    FetchData();
    console.log(34);
  }, []);
  const FetchData = async () => {
    // const response = await fetch(`/feedback?_sort=id&order=desc`)
    const response = await fetch(
      `http://localhost:4000/feedback?_sort=id&order=desc`
    );
    const data = await response.json();
    console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:4000/feedback/${id}`, {
      method: "DELETE",
    });
    if (window.confirm(`Are you sure to delete this ${id} feedback`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const handleAdd = async (newFeedback) => {
    const response = await fetch("http://localhost:4000/feedback", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleEdit = (item) => {
    setEditFeedback({ item, edit: true });
  };
  const handleUpdate = async (id, upItem) => {
    const response = await fetch(`http://localhost:4000/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(upItem),
    });
    const data = response.json();
    setFeedback(feedback.map((item) => (item.id === id ? upItem : item)));
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        handleDelete,
        handleAdd,
        handleEdit,
        editFeedback,
        isLoading,
        handleUpdate,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
