import { useState } from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./Card";

const FeedbackItem = ({ item }) => {
  //const [rating, setRating] = useState(8);
  //const [text, setText] = useState("Example of a feedback item");

  const { deleteFeedback } = useContext(FeedbackContext);

  //TODO edit and delete from context

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="#B000B9" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
