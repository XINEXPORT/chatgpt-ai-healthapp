import React, { useEffect, useState } from "react";
import "../index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Loading = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // 4 second delay before starting the fade-out
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        <div className={`loading-container ${fadeOut ? "fade-out" : ""}`}>
          <img
            src="src/assets/baymax/loading-icon.png"
            alt="Spinner"
            className="custom-image-spinner"
          />
          <div id="loading-message">
            <p>CareBuddy is thinking...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
