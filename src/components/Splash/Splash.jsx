import React, { useEffect } from 'react';
import './Splash.css';
import logo from './1366x768-16526995-blue-movie-logo-on-a-black-background.jpg'

const Splash = () => {
 
  return (
    <div className="splash-screen">
      <div className="splash-logo">
        <h1><img src={logo}/></h1> 
      </div>
      <div className="splash-message">
        <p>Welcome to my Website!</p>
      </div>
    </div>
  );
};

export default Splash;
