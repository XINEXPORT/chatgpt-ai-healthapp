import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useQueryContext } from '../../App';
import { usePatientInfoContext } from '../../PatientInfoContext';
import styles from './Home.module.scss';
import "../../effects/FadeInFadeOut.scss";
import CustomTextarea from '../../components/CustomTextarea/CustomTextarea.jsx';

const Home = () => {
  const { setQueryResponse } = useQueryContext();
  const { patientInfo } = usePatientInfoContext();
  const navigate = useNavigate();
  const [chatHistory, setChatHistory] = useState([]);

  const handleUserMessage = (userMessage) => {
    setChatHistory((prevHistory) => [...prevHistory, { message: userMessage, isUser: true }]);
  };

  const [isTyping, setIsTyping] = useState(false);

  const handleTyping = (typing) => {
    setIsTyping(typing);
  };

  // Ensure patientInfo is an object and handle the case where patientInfo.name might be undefined
  const patientName = patientInfo?.name || 'Guest';
  const firstName = patientName.split(' ')[0]; // Get the first name

  return (
    <div className={styles.Home}>
      <Helmet>
        <title>CareBuddy</title>
      </Helmet>
      <div className={styles.homeContainer}>
        <div className={`styles.aboveMessageBox fadingContent ${isTyping ? 'fadeOut' : 'fadeIn'}`}>
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
              <span>{patientName}</span>
            </span>
          </div>
          <img
            src="src/assets/Home/friendly robot assistant waving.png"
            alt="friendlyrobotassistantwaving1132"
            className={styles.friendlyrobotassistantwaving}
          />
          <span className={styles.text5}>
            <span>Hi <span className={styles.differentFont}>{firstName}</span>,<br />
              Your <span className={styles.differentColorAndFont}>Personal Healthcare </span>
              Companion is Here!
              <span className={styles.differentFont}> Informed answers,
              <br />Friendly<br />Conversation <br /></span>
              and <span className={styles.differentFont}>Personalized
                Assistance</span> are<br />
              assured by me.</span>
          </span>
          <span className={styles.text4}>
            <span>How can I help you?</span>
          </span>
        </div>
        <div className={styles.messageBox}>
          <CustomTextarea
            setQueryResponse={setQueryResponse}
            handleUserMessage={handleUserMessage}
            navigate={navigate}
            handleTyping={handleTyping}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

