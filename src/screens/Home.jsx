import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useQueryContext } from '../App';
import CustomTextarea from '../components/CustomTextarea/CustomTextarea.jsx';
import styles from './Home.module.scss';

const Home = () => {
  const { setQueryResponse } = useQueryContext();
  const navigate = useNavigate();
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserMessage = (userMessage) => {
    setChatHistory((prevHistory) => [...prevHistory, { message: userMessage, isUser: true }]);
    navigate('/chatgpt-ai-healthapp/conversation', { state: { chatHistory: [...chatHistory, { message: userMessage, isUser: true }] } });
  };

  return (
    <div className={styles.Home}>
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className={styles.homeContainer}>
        <img
          src="src/assets/Home/Rectangle11.png"
          alt="Rectangle111235"
          className={styles.rectangle11}
        />
        <img
          src="src/assets/Home/Ellipse4.png"
          alt="Ellipse4113"
          className={styles.ellipse4}
        />
        <div className={styles.group3}>
          <span className={styles.text}>
            <span>Welcome Back,</span>
          </span>
          <span className={styles.text2}>
            <span>Vaishag P Biju</span>
          </span>
        </div>
        <img
          src="src/assets/Home/friendly robot assistant waving.png"
          alt="friendlyrobotassistantwaving1132"
          className={styles.friendlyrobotassistantwaving}
        />
        <span className={styles.text5}>
          <span>Hi <span className={styles.differentFont}>Vaishag</span>,
            Your <span className={styles.differentColorAndFont}>Personal Healthcare </span>
            Companion is Here!
            <span className={styles.differentFont}> Informed answers,
              Friendly
              Conversation </span>
            and <span className={styles.differentFont}>Personalized
              Assistance</span> are
            assured by me.</span>
        </span>
        <span className={styles.text4}>
          <span>How can I help you?</span>
        </span>
        <div className={styles.messageBox}>
          <CustomTextarea
            setQueryResponse={setQueryResponse}
            handleUserMessage={handleUserMessage}
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;



