import React from 'react';
import './index.css';
import './hero_video.mp4';


  const HeroSection = () => {
      return (
        <div className="hero-section">
        <h2 className="hero">Hero Section</h2>
        <video src="hero_video.mp4"/>
        </div>
      )
  }



  export default HeroSection;