import React from "react";
import styles from "./Bookmark.module.scss";
import buttonImage from "./Bookmark.png";

const Bookmark = ({ onClick }) => {
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

export default Bookmark;
