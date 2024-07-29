import React from 'react';

import { Helmet } from 'react-helmet';

import './iPhone15Pro.module.scss';

const IPhone15Pro = ({ children }) => {
  return (
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
  )
}

export default IPhone15Pro
