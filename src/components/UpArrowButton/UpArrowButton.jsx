import React from "react";
import styles from './UpArrowButton.module.scss';
import buttonImage from './UpArrow.png'; // Adjust the path to your image

const UpArrowButton = ({ onClick }) => {
  return (
    <button className={styles.btnCustom} onClick={onClick}>
      <img src={buttonImage} alt="Custom Button" className={styles.buttonImage} />
    </button>
  );
};

export default UpArrowButton;