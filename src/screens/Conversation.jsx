import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.scss";
import axios from "axios";

const MODEL_NAME = "gpt-4-1106-preview"; // Use the model name appropriate for your use case

const Conversation = () => {
  const location = useLocation();
  const { responseText } = location.state || {};
  const [userInput, setUserInput] = useState("");
  const [newResponseText, setNewResponseText] = useState(responseText);
  const [errorMessage, setErrorMessage] = useState("");

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
    const newResponse = await queryAPI(userInput);
    setNewResponseText(newResponse);
    setUserInput("");
  };

  return (
    <div className="container mt-5">
      {newResponseText ? (
        <div className="convo-text">
          <p>{newResponseText}</p>
        </div>
      ) : (
        <p>No response found. Please submit the form first.</p>
      )}
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Conversation;
