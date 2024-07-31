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
        <div className="button-container">
          <iframe
            src="https://www.youtube.com/embed/uEeBXUUOBiI?si=jK61N0A0h4sOL_lC"
            allowFullScreen
          ></iframe>
        </div>
        <ArrowButton onClick={handleClick}></ArrowButton>
        <div className="continue-home-message">Continue to home</div>
      </div>
    </div>
  );
};

export default Tutorial;
