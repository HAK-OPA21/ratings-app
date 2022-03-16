import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FeedbackProvider } from "./context/FeedbackContext";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./components/AboutPage";
import AboutLink from "./components/AboutLink";
import MultipleInput from "./multipleinput/MultipleInput";

function App() {
  //const [feedback, setFeedback] = useState(FeedbackData);
  // app level state

  return (
    <div className="container">
      <MultipleInput />
    </div>
  );
}

export default App;

// 1. skapa en header
// 2. skapa FeedbackItem: representera ett omdöme och en score
// 3. skapa FeedbackList: ska visa alla feedbackitems

/*
<FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutLink />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
*/
