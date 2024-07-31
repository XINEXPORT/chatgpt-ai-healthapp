import React from 'react'

import { Helmet } from 'react-helmet'

import UpArrowButton from "../components/UpArrowButton/UpArrowButton.jsx";

import HomeButton from '../components/HomeButton/HomeButton.jsx';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const textareaRef = useRef(null);

  const handleClickHome = () => {
    navigate('/chatgpt-ai-healthapp/home');
  };

  const sendMessage = () => {

  };

  const [message, setMessage] = useState('');
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  const handleMessageChange = (e) => {
    const newValue = e.target.value;
    setMessage(newValue);
    setIsArrowVisible(newValue.trim() !== '');
  };
  
  useEffect(() => {
    adjustTextareaHeight(); // Adjust height on initial render
  }, []);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
    }
  };

  return (
    <div className="Home">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-home">
        <img
          src="src/assets/Home/Rectangle11.png"
          alt="Rectangle111235"
          className="home-rectangle11"
        />
        <img
          src="src/assets/Home/Ellipse4.png"
          alt="Ellipse4113"
          className="home-ellipse4"
        />
        <div className="home-group3">
          <span className="home-text">
            <span>Welcome Back,</span>
          </span>
          <span className="home-text2">
            <span>Vaishag P Biju</span>
          </span>
        </div>
        <img
          src="src/assets/Home/friendly robot assistant waving.png"
          alt="friendlyrobotassistantwaving1132"
          className="home-friendlyrobotassistantwaving"
        />
        <span className="home-text5">
          <span>Hi <span className="different-font">Vaishag</span>,
            Your <span className="different-color-and-font">Personal Healthcare </span>
            Companion is Here!
            <span className="different-font"> Informed answers,
              Friendly
              Conversation </span>
            and <span className="different-font">Personalized
              Assistance</span> are
            assured by me.</span>
        </span>
        <span className="home-text4">
          <span>How can I help you?</span>
        </span>
        <div className="home-tab">
          <div className="home-icons">
            <img
              src="src/assets/Home/Bookmark.png"
              alt="Bookmark1240"
              className="home-bookmark"
            />
            <img
              src="src/assets/Home/Settings.png"
              alt="Settings1241"
              className="home-settings"
            />
            <img
              src="src/assets/Home/Chat Message.png"
              alt="ChatMessage1347"
              className="home-chat-message"
            />
            <HomeButton className="home-home1" onClick={handleClickHome}/>
          </div>
        </div>
          <div className="message-box">
          <textarea
                ref={textareaRef}
                className="home-text-field"
                placeholder="Message Me"
                value={message}
                onChange={handleMessageChange}
              />
            <span className="home-right-arrow" style={{ opacity: isArrowVisible ? 1 : 0.5 }}>
              <UpArrowButton onClick={sendMessage}></UpArrowButton>
            </span>
          </div>
      </div>
    </div>
  )
}

export default Home

