import React from "react";
import styles from "./LMessageBubble.module.scss";

const LMessageBubble = ({ text }) => {
  return <div className="message-bubble">{text}</div>;
};

export default LMessageBubble;
