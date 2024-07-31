import React from "react";
import ArrowButton from "../components/ArrowButton/ArrowButton.jsx";
import { useNavigate } from "react-router-dom";
import LMessageBubble from "../components/LMessageBubble/LMessageBubble.jsx";

const Tutorial = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/chatgpt-ai-healthapp/home');
    };

    return (
        <div className="Tutorial">
            <div className="button button-container">
                <ArrowButton className="button-image" onClick={handleClick}></ArrowButton>
                <div className="continue-home-message">Continue to home</div>
            </div>
        </div>
    )
};

export default Tutorial;
