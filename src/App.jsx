// src/App.jsx

import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "./screens/Loading.jsx";
import Welcome from "./screens/Welcome.jsx";
import "./index.scss";
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  // Define routes where the NavBar should not be displayed
  const noNavBarRoutes = ['/chatgpt-ai-healthapp/', '/chatgpt-ai-healthapp/tutorial', '/chatgpt-ai-healthapp/form', '/chatgpt-ai-healthapp/form2'];

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
          {!noNavBarRoutes.includes(location.pathname) && (
            <div className="nav-bar-container">
              <NavBar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
