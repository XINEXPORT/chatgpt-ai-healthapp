// Conversation.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Conversation = () => {
  const location = useLocation();
  const { result } = location.state || {};

  return (
    <div className="container mt-5">
      {result ? (
        <div>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : (
        <p>No result found. Please submit the form first.</p>
      )}
    </div>
  );
};

export default Conversation;
