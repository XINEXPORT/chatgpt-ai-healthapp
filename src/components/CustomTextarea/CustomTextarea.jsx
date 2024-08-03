import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import UpArrowButton from "../UpArrowButton/UpArrowButton.jsx";
import styles from './CustomTextarea.module.scss';
import '../../index.scss';
import axios from "axios";

const MODEL_NAME = "gpt-4-1106-preview";

const CustomTextarea = ({ setQueryResponse, handleUserMessage, navigate }) => {
  const [userInput, setUserInput] = useState('');
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();

  const API_KEY = process.env.VITE_OPENAI_API_KEY;

  const queryAPI = async (input) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: MODEL_NAME,
          messages: [
            {
              role: "system",
              content: "You are a nutrition coach. Please provide concise and specific responses that will fit 100 tokens.",
            },
            {
              role: "user",
              content: input,
            },
          ],
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
          },
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching response:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsArrowVisible(false); // Hide the arrow button if needed
    if (userInput.trim() === '') {
      setErrorMessage('Input cannot be empty.');
      return;
    }
    setErrorMessage('');
    setIsLoading(true);
    try {
      handleUserMessage(userInput);  // Add user's message to the chat history
      const newResponse = await queryAPI(userInput);
      setQueryResponse(newResponse);
      setUserInput('');  // Clear the input field
      if (location.pathname === '/chatgpt-ai-healthapp/home') {
        navigate('/chatgpt-ai-healthapp/conversation', { state: { chatHistory: [{ message: userInput, isUser: true }] } });
      }
    } catch (error) {
      setErrorMessage('Failed to fetch response.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleMessageChange = (e) => {
    const newValue = e.target.value;
    setUserInput(newValue);
    setIsArrowVisible(newValue.trim() !== '');
  };

  return (
    <div style={{ position: 'relative', top: '-30px', left: '-24px', display: 'inline-block' }}>
      <TextareaAutosize
        aria-label="textarea"
        maxRows={4}
        placeholder="Message Me"
        value={userInput}
        onChange={handleMessageChange}
        className={styles.textarea}
        style={{
          boxSizing: 'content-box',
          width: '290px',
          padding: '12px',
          borderRadius: '20px',
          borderColor: '#000',
          backgroundColor: '#000',
          color: 'white',
          fontSize: '14px',
          paddingRight: '40px',
          resize: 'none'
        }}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <button type="submit" disabled={isLoading} style={{ display: 'none' }}></button>
      <span
        style={{
          position: 'absolute',
          right: '10px',
          top: '9px',
          cursor: 'pointer',
          opacity: isArrowVisible ? 1 : 0.3,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        <UpArrowButton onClick={handleSubmit} />
      </span>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

CustomTextarea.propTypes = {
  setQueryResponse: PropTypes.func.isRequired,
  handleUserMessage: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default CustomTextarea;



