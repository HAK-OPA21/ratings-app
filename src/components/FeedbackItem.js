import { useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./Card";

const FeedbackItem = ({ item, handleDelete }) => {
  //const [rating, setRating] = useState(8);
  //const [text, setText] = useState("Example of a feedback item");

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="#B000B9" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
