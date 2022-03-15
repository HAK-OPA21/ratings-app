import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.lengt === 0) {
    return <p>No feedback to show</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
