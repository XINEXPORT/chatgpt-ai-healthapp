import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./iPhone15Pro.module.scss";

const IPhone15Pro = ({ children }) => {
  return (
    <HelmetProvider>
      <div className="i-phone15-pro-container">
        <Helmet>
          <title>exported project</title>
        </Helmet>
        <div className="i-phone15-pro-i-phone15-pro">
          <img
            src="public/iphone-frame.png"
            alt="iPhone15ProBlackTitaniumPortraitI318"
            className="i-phone15-pro-i-phone15-pro-black-titanium-portrait"
          />
          {children}
        </div>
      </div>
    </HelmetProvider>
  );
};

export default IPhone15Pro;
