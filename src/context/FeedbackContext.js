import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch("/feedback");
    const data = await response.json();

    console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  // flytta delete och add sen göra en edit funktion
  /*const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };*/

  // update feedback
  const updateFeedback = async (id, upItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  /*const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
      // loopar igenom typ som foreach men du kan sätta ett villkor för att
      // filtrera ut något. Kommer returnera alla element förutom det vi valt att
      // filtrera ut.
    }
  };*/

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback,
        updateFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
