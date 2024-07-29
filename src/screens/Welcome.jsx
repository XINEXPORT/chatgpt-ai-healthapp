import React from "react";
import ArrowButton from "../components/ArrowButton/ArrowButton.jsx";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chatgpt-ai-healthapp/tutorial');
  };

  return (
    <div id="welcome-container">
      <div className="welcome-message">
        <img
          src="src\assets\textboxes\message1.png"
          alt="Message 1"
          className="message message1">
        </img>
        <img
          src="src\assets\textboxes\message2.png"
          alt="Message 2"
          className="message message2">
        </img>
        <img
          src="src\assets\textboxes\message3.png"
          alt="Message 3"
          className="message message3">
        </img>
      </div>

      <img
        src="src\assets\baymax\waving.png"
        alt="Baymax Waving"
        className="baymax-waving">
      </img>
      <div className="button button-container">
        <ArrowButton onClick={handleClick}></ArrowButton>
        <div className="continue-tutorial-message">Continue to tutorial</div>
      </div>
      <div className="glow"></div>
    </div>
  );
};

export default Welcome;
