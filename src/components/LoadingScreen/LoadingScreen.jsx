import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-screen">
      <div className="particles" id="particles"></div>

      <div className="mini-logos-container">
        <div className={`mini-logos ${showMainContent ? 'fade-out' : ''}`}>
          <img src="https://img.icons8.com/ios-filled/50/bus.png" alt="Bus" />
          <img src="https://img.icons8.com/ios-filled/50/train.png" alt="Train" />
          <img src="https://img.icons8.com/ios-filled/50/truck.png" alt="Camion" />
        </div>
      </div>

      {showMainContent && (
        <div className="main-content">
          <img className="main-logo" src="/images/logo.png" alt="Logo Officiel" />
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;