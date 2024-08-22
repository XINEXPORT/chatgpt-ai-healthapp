import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./SmallSpinner.module.scss";

const SmallSpinner = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // 4 second delay before starting the fade-out
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div
        className={`${styles.loadingContainer} ${fadeOut ? "fade-out" : ""}`}
      >
        <img
          src="src/assets/baymax/loading-icon.png"
          alt="Spinner"
          className={styles.customImageSpinner}
        />
        <div id={styles.loadingMessage}>
          <p>CareBuddy is thinking...</p>
        </div>
      </div>
    </div>
  );
};

export default SmallSpinner;
