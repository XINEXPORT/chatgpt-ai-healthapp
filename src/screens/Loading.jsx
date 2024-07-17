import React, { useEffect, useState } from "react";
import "../index.scss";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // 1 second delay before starting the fade-out
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
      <div id="loading-message">
        <p>Loading your personal healthcare companion...</p>
      </div>
      <img
        src="src/assets/baymax/loading-icon.png"
        alt="Spinner"
        className="custom-image-spinner"
      ></img>
    </div>
  );
};

export default Loading;
