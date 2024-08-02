// src/App.jsx

import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./screens/Loading.jsx";
import styles from "./screens/Home.module.scss";
import Welcome from "./screens/Welcome.jsx";
import "./index.scss";
import NavBar from "./components/NavBar/NavBar.jsx";

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
          <div className="nav-bar-container">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
