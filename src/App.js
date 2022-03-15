import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  // app level state

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;

// 1. skapa en header
// 2. skapa FeedbackItem: representera ett omdöme och en score
// 3. skapa FeedbackList: ska visa alla feedbackitems
