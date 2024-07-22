import React from "react";
import styles from './index.module.scss';
import buttonImage from './right-arrow.png'; // Adjust the path to your image

const ArrowButton = ({ onClick }) => {
  return (
    <button className={styles.btnCustom} onClick={onClick}>
      <img src={buttonImage} alt="Custom Button" className={styles.buttonImage} />
    </button>
  );
};

export default ArrowButton;