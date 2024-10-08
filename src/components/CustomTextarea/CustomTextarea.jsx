import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { usePatientInfoContext } from "../../PatientInfoContext";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import UpArrowButton from "../UpArrowButton/UpArrowButton.jsx";
import SmallSpinner from "../SmallSpinner/SmallSpinner.jsx";
import styles from "./CustomTextarea.module.scss";
import "../../index.scss";
import axios from "axios";

const MODEL_NAME = "gpt-4-1106-preview";

const CustomTextarea = ({
  setQueryResponse,
  handleUserMessage,
  navigate,
  handleTyping,
  chatHistory,
}) => {
  const [userInput, setUserInput] = useState("");
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { patientInfo } = usePatientInfoContext();

  const location = useLocation();

  const API_KEY = process.env.VITE_OPENAI_API_KEY;

  const queryAPI = async (input) => {
    console.log("Patient Info in API call: ", patientInfo); // Log the patient info

    // Construct the message history with roles
    const messages = [
      {
        role: "system",
        content: `Your name is CareBuddy. You are a personal healthcare assistant. The user's information is as follows: ${JSON.stringify(patientInfo)}. Make sure to inform your responses based on the user's information. Make sure not to be repetitive, and use the previous responses as context for the conversation. Please provide concise and specific responses that will fit 100 tokens and that no sentences or thoughts are cut off.`,
      },
      ...chatHistory.map((chat) => ({
        role: chat.isUser ? "user" : "assistant",
        content: chat.message,
      })),
      {
        role: "user",
        content: input,
      },
    ];

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: MODEL_NAME,
          messages: messages,
          max_tokens: 300,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching response:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsArrowVisible(false);
    if (userInput.trim() === "") {
      setErrorMessage("Input cannot be empty.");
      return;
    }
    setErrorMessage("");
    setUserInput("");
    setIsLoading(true);
    try {
      handleUserMessage(userInput);
      const newResponse = await queryAPI(userInput);
      setQueryResponse(newResponse);
      if (location.pathname === "/chatgpt-ai-healthapp/home") {
        handleTyping(false);
        navigate("/chatgpt-ai-healthapp/conversation", {
          state: {
            chatHistory: [...chatHistory, { message: userInput, isUser: true }],
          },
        });
      }
    } catch (error) {
      setErrorMessage("Failed to fetch response.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const handleMessageChange = (e) => {
    const newValue = e.target.value;
    setUserInput(newValue);
    setIsArrowVisible(newValue.trim() !== "");
    if (location.pathname === "/chatgpt-ai-healthapp/home") {
      handleTyping(newValue.trim() !== "");
    }
  };

  const handleBlur = () => {
    if (location.pathname === "/chatgpt-ai-healthapp/home") {
      if (userInput.trim() === "") {
        handleTyping(false);
      }
    }
  };

  return (
    <div
      style={{
        position: "relative",
        top: "-30px",
        left: "-24px",
        display: "inline-block",
      }}
    >
      <div className={styles.spinner}>{isLoading && <SmallSpinner />}</div>
      <TextareaAutosize
        aria-label="textarea"
        maxRows={4}
        placeholder="Message Me"
        value={userInput}
        onChange={handleMessageChange}
        onKeyDown={handleKeyPress}
        onBlur={handleBlur}
        className={styles.textarea}
        style={{
          boxSizing: "border-box",
          width: "340px",
          padding: "18px",
          borderRadius: "20px",
          borderColor: "#000",
          backgroundColor: "#000",
          opacity: "60%",
          color: "white",
          fontSize: "14px",
          paddingRight: "43px",
          resize: "none",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button
        type="submit"
        disabled={isLoading}
        style={{ display: "none" }}
      ></button>
      <span
        style={{
          position: "absolute",
          right: "10px",
          top: "13px",
          cursor: "pointer",
          opacity: isArrowVisible ? 1 : 0.3,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <UpArrowButton onClick={handleSubmit} />
      </span>
    </div>
  );
};

CustomTextarea.propTypes = {
  setQueryResponse: PropTypes.func.isRequired,
  handleUserMessage: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  chatHistory: PropTypes.array.isRequired, // Add this prop to pass chat history
};

export default CustomTextarea;
