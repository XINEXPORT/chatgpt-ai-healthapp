import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";

const Conversation = () => {
  const location = useLocation();
  const { responseText } = location.state || {};

  return (
    <div className="container mt-5">
      {responseText ? (
        <div className="convo-text">
          <p>{responseText}</p>
        </div>
      ) : (
        <p>No response found. Please submit the form first.</p>
      )}
    </div>
  );
};

export default Conversation;
