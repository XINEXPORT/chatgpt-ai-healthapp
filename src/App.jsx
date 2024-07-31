// src/App.jsx

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./screens/Loading.jsx";
import Welcome from "./screens/Welcome.jsx";
import "./index.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="iphone-15-container">
      <div className="iphone-15-frame">
        <div className="screen">
          <div className="lensmain">
            <div className="camera1"></div>
            <div className="camera2"></div>
            <div className="content">
              <Outlet />
            </div>
          </div>
          <footer></footer>
        </div>
      </div>
    </div>
  );
};

export default App;
