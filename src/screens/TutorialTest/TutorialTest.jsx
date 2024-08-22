import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialTest.module.scss";

const steps = [
  {
    id: "navBar",
    text: "This is the navigation bar. Use it to navigate between different sections of the app.",
    highlight: "navBar",
    nextPage: null,
  },
  {
    id: "homePage",
    text: "This is the Home page. Here you can interact with the chatbot and get personalized assistance.",
    highlight: "homeContainer",
    nextPage: "conversation",
  },
  {
    id: "conversationPage",
    text: "This is the Conversation page. Here you can view your chat history and continue conversations.",
    highlight: "chatContainer",
    nextPage: "favorites",
  },
  {
    id: "favoritesPage",
    text: "This is the Favorites page. Here you can save and view your favorite responses.",
    highlight: "favoritesContainer",
    nextPage: "edit-patient-info",
  },
  {
    id: "editInfoPage",
    text: "This is the Edit Information page. Here you can update your personal information.",
    highlight: "editInformation",
    nextPage: null,
  },
];

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const highlightRef = useRef(null);

  useEffect(() => {
    // Scroll to the highlighted element
    const elementToHighlight = document.querySelector(
      `#${steps[currentStep].highlight}`,
    );
    if (elementToHighlight) {
      elementToHighlight.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      highlightRef.current = elementToHighlight;
    }
  }, [currentStep]);

  const handleNext = () => {
    const nextStep = steps[currentStep].nextPage;

    if (nextStep) {
      navigate(`/chatgpt-ai-healthapp/${nextStep}`);
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSkip = () => {
    setCurrentStep(steps.length);
  };

  if (currentStep >= steps.length) {
    return null; // End the tutorial
  }

  return (
    <div className={styles.tutorialOverlay}>
      <div
        className={styles.highlight}
        style={{
          top: highlightRef.current?.offsetTop,
          left: highlightRef.current?.offsetLeft,
          width: highlightRef.current?.offsetWidth,
          height: highlightRef.current?.offsetHeight,
        }}
      />
      <div className={styles.explanation}>
        <p>{steps[currentStep].text}</p>
        <div className={styles.buttons}>
          {currentStep < steps.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
          <button onClick={handleSkip}>Skip Tutorial</button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
