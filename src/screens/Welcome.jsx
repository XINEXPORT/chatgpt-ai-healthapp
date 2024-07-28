// File: src/components/Welcome.jsx

import React from "react";
import ArrowButton from "../components/ArrowButton/ArrowButton.jsx";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatgpt-ai-healthapp/tutorial");
  };

  return (
    <div id="welcome-container" role="main">
      <div className="welcome-message" aria-labelledby="welcome-heading">
        <h1 id="welcome-heading" className="visually-hidden">
          Welcome Messages
        </h1>
        <img
          src="src/assets/textboxes/message1.png"
          alt="Message 1"
          className="message message1"
        />
        <img
          src="src/assets/textboxes/message2.png"
          alt="Message 2"
          className="message message2"
        />
        <img
          src="src/assets/textboxes/message3.png"
          alt="Message 3"
          className="message message3"
        />
      </div>

      <img
        src="src/assets/baymax/waving.png"
        alt="Baymax Waving"
        className="baymax-waving"
        aria-label="Baymax Waving"
      />
      <div
        className="button button-container"
        aria-labelledby="continue-tutorial"
      >
        <ArrowButton onClick={handleClick} aria-label="Continue to tutorial" />
        <div id="continue-tutorial" className="continue-tutorial-message">
          Continue to tutorial
        </div>
      </div>
    </div>
  );
};

export default Welcome;
