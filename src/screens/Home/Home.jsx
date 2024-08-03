import React from 'react'
import { Helmet } from 'react-helmet'
import HomeButton from '../../components/HomeButton/HomeButton.jsx';
import styles from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CustomTextarea from '../../components/CustomTextarea/CustomTextarea.jsx';

const Home = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/chatgpt-ai-healthapp/home");
  };

  const sendMessage = () => {};

  const [message, setMessage] = useState("");
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  const handleMessageChange = (e) => {
    const newValue = e.target.value;
    setMessage(newValue);
    setIsArrowVisible(newValue.trim() !== "");
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
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
