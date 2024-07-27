import React from "react";
import ArrowButton from "../components/ArrowButton/ArrowButton.jsx";
import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatgpt-ai-healthapp/patientform");
  };

  return (
    <div className="Tutorial">
      <h1>Tutorial</h1>
      <div>Continue to Form</div>
      <ArrowButton onClick={handleClick} />
    </div>
  );
};

export default Tutorial;
