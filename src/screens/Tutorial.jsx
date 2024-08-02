// Tutorial.jsx
import React from "react";
import ArrowButton from "../components/ArrowButton/ArrowButton.jsx";
import { useNavigate } from "react-router-dom";
import LMessageBubble from "../components/LMessageBubble/LMessageBubble.jsx";
import "../index.scss";
import styles from './Tutorial.module.scss';

const Tutorial = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatgpt-ai-healthapp/form");
  };

  return (
    <div className="Tutorial">
      <div className="video-tutorial-container">
        <iframe
          src="https://www.youtube.com/embed/uEeBXUUOBiI?si=jK61N0A0h4sOL_lC"
          title="YouTube video tutorial"
        />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.arrowButton}>
          <ArrowButton onClick={handleClick}></ArrowButton>
        </div>
        <span className={styles.continueFormMessage}>
          Let CareBuddy get to know you!
        </span>
      </div>
    </div>
  );
};

export default Tutorial;
