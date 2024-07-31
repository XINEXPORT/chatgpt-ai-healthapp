import React from "react";
import styles from "./HomeButton.module.scss";
import buttonImage from "./Home.png"; // Adjust the path to your image

const HomeButton = ({ onClick }) => {
  return (
    <button className={styles.btnCustom} onClick={onClick}>
      <img
        src={buttonImage}
        alt="Custom Button"
        className={styles.buttonImage}
      />
    </button>
  );
};

export default HomeButton;
