import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";

import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FeedbackData from "./data/feedback";
import Stats from "./components/Stats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import {FeedbackProvider} from "./Context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const handleClick = (id) => {
    if (window.confirm(`are you sure to delete this ${id}`)) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider> 
    <Router>
      <Header />
      <div className="container">
        <Link to='/about'>About</Link>
        <Routes>
        <Route path="/about" element={<About />} />
            
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm  />
                <Stats feedback={feedback} />
                <FeedbackList />
              </>
            }
          ></Route>
          
        </Routes>
      </div>
    </Router>
    </FeedbackProvider>

  );
}

export default App;
