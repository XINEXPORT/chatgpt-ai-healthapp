import React, { useState, useEffect, createContext, useContext } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Loading from "./screens/Loading.jsx";
import NavBar from './components/NavBar/NavBar.jsx';
import "./effects/CrossFadeScreens.scss";
import { PatientInfoProvider } from './PatientInfoContext';
import TutorialTest from './screens/TutorialTest/TutorialTest.jsx';
import "./index.scss";

// Create a context for managing query responses
const QueryContext = createContext();

export const useQueryContext = () => {
  return useContext(QueryContext);
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [queryResponse, setQueryResponse] = useState('');
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
  const noNavBarRoutes = [
    '/chatgpt-ai-healthapp/',
    '/chatgpt-ai-healthapp/tutorial',
    '/chatgpt-ai-healthapp/patient-info'
  ];

  return (
    <QueryContext.Provider value={{ queryResponse, setQueryResponse }}>
      <PatientInfoProvider>
        <div id="iphone-15-container">
          <div className="iphone-15-frame">
            <div className="screen">
              <div className="lensmain">
                <div className="camera1"></div>
                <div className="camera2"></div>
                <div className="content">
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      timeout={500}
                      classNames="fade"
                    >
                      <Outlet />
                    </CSSTransition>
                  </TransitionGroup>
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
      </PatientInfoProvider>
    </QueryContext.Provider>
  );
};

export default App;

