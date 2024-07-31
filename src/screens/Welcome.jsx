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
      <div className="welcome-message">
        <h1 id="welcome-heading" aria-labelledby="welcome-heading">
          Welcome to CareBuddy
        </h1>
        <img
          src="src/assets/textboxes/message1.png"
          alt="Message 1"
          className="message message1"
          aria-label="Message 1"
        />
        <img
          src="src/assets/textboxes/message2.png"
          alt="Message 2"
          className="message message2"
          aria-label="Message 2"
        />
        <img
          src="src/assets/textboxes/message3.png"
          alt="Message 3"
          className="message message3"
          aria-label="Message 3"
        />
      </div>

      <img
        src="src/assets/baymax/waving.png"
        alt="Baymax Waving"
        className="baymax-waving"
        aria-label="Baymax Waving"
      />
      <div className="button button-container">
        <ArrowButton onClick={handleClick} />
        <p id="continue-tutorial" className="continue-tutorial-message">
          Continue to tutorial
        </p>
      </div>
      <div className="glow"></div>
    </div>
  );
};

export default Welcome;
