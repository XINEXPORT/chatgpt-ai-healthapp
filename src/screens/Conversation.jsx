// src/screens/Conversation.jsx

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import axios from "axios";
import Spinner from "../components/Spinner"; // Import the Spinner component

const MODEL_NAME = "gpt-4-1106-preview";

const Conversation = () => {
  const location = useLocation();
  const { responseText } = location.state || {};
  const [userInput, setUserInput] = useState("");
  const [newResponseText, setNewResponseText] = useState(responseText);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading screen visibility

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const queryAPI = async (prompt) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: MODEL_NAME,
          messages: [
            {
              role: "system",
              content: "You are a nutrition coach.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (
        response.data &&
        response.data.choices &&
        response.data.choices[0].message &&
        response.data.choices[0].message.content
      ) {
        return response.data.choices[0].message.content.trim();
      } else {
        console.error("Unexpected response format:", response);
        return "Error: Unexpected response format.";
      }
    } catch (error) {
      console.error("Error querying the API:", error);
      return "Error querying the API.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim() === "") {
      setErrorMessage("Input cannot be empty.");
      return;
    }
    setErrorMessage("");
    setIsLoading(true); // Show loading screen
    const newResponse = await queryAPI(userInput);
    setNewResponseText(newResponse);
    setUserInput("");
    setIsLoading(false); // Hide loading screen
  };

  const formatResponseText = (text) => {
    return text
      .split("\n")
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  return (
    <div className="linear-gradient-background" role="main">
      {" "}
      {/* Add linear gradient background */}
      <div className="container mt-4">
        {!isLoading && (
          <h1 id="form-title" className="text-white">
            CareBuddy Advice
          </h1>
        )}
        {isLoading ? (
          <Spinner /> // Show Spinner component when isLoading is true
        ) : (
          <>
            {newResponseText ? (
              <div className="convo-text response-container" aria-live="polite">
                {formatResponseText(newResponseText)}
              </div>
            ) : (
              <p aria-live="polite">
                No response found. Please submit the form first.
              </p>
            )}
            <form onSubmit={handleSubmit} aria-labelledby="form-title">
              <div className="mb-3">
                <label htmlFor="userInput" className="form-label text-white">
                  Your Question:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userInput"
                  value={userInput}
                  onChange={handleInputChange}
                  aria-label="Enter your question"
                />
              </div>
              {errorMessage && (
                <div className="text-danger mb-3" aria-live="assertive">
                  {errorMessage}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                aria-label="Submit your question"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Conversation;
