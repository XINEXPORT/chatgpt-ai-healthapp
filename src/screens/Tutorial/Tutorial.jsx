import React from "react";
import ArrowButton from "../../components/ArrowButton/ArrowButton.jsx";
import { useNavigate } from "react-router-dom";
import LMessageBubble from "../../components/LMessageBubble/LMessageBubble.jsx";
import "../../index.scss";
import styles from "./Tutorial.module.scss";

const Tutorial = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatgpt-ai-healthapp/patient-info");
  };

  return (
    <div className="Tutorial">
      <h1 id={styles.tutorialHeading} aria-labelledby="tutorial-heading">
        Tutorial
      </h1>
      <div className={styles.videoTutorialContainer}>
        <iframe
          src="https://www.youtube.com/embed/Y253UFw9eD8?si=7EkzMPedewa7nTyn?autoplay=1"
          allow="autoplay"
          title="YouTube video tutorial"
          className={styles.tutorialVideo}
          allowFullScreen
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
