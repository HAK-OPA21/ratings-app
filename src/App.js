import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

export default App;

// 1. skapa en header
// 2. skapa FeedbackItem: representera ett omdöme och en score
// 3. skapa FeedbackList: ska visa alla feedbackitems
