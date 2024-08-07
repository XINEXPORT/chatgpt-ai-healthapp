import React from "react";
import styles from "./ConversationIcon.module.scss";
import buttonImage from "./Chat_Message.png";

const ConversationIcon = ({ onClick }) => {
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

export default ConversationIcon;
