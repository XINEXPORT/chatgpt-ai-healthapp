import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import UpArrowButton from "../UpArrowButton/UpArrowButton.jsx";
import styles from './CustomTextarea.module.scss';
import '../../index.scss';

const CustomTextarea = () => {
  const [message, setMessage] = useState('');
  const [isArrowVisible, setIsArrowVisible] = useState(false);

  const handleMessageChange = (e) => {
    const newValue = e.target.value;
    setMessage(newValue);
    setIsArrowVisible(newValue.trim() !== '');
  };

  const sendMessage = () => {
  };

  return (
    <div style={{ position: 'relative', top: '-30px', left: '-24px', display: 'inline-block' }}>
      <TextareaAutosize
        aria-label="textarea"
        maxRows={4}
        placeholder="Message Me"
        value={message}
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
        <UpArrowButton onClick={sendMessage} />
      </span>
    </div>
  );
};

export default CustomTextarea;





