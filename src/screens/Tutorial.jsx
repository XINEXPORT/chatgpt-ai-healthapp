// Tutorial.jsx
import React from "react";
import ArrowButton from "../components/ArrowButton/ArrowButton.jsx";
import { useNavigate } from "react-router-dom";
import LMessageBubble from "../components/LMessageBubble/LMessageBubble.jsx";
import "../index.scss";

const Tutorial = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatgpt-ai-healthapp/home");
  };

  return (
    <div className="Tutorial">
      <div className="button-container">
        <iframe
          src="https://www.youtube.com/embed/uEeBXUUOBiI?si=jK61N0A0h4sOL_lC"
          title="YouTube video tutorial"
        />
        <div className="button">
          <button onClick={handleClick}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
