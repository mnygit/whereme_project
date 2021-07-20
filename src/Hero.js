import React from 'react';
import './index.css';
import './hero_video.mp4';
import ReactPlayer from 'react-player';


  const HeroSection = () => {
      return (
        <div className="hero-section">
         <ReactPlayer url='https://www.youtube.com/watch?v=e90eWYPNtJ8' /> 
        <h2 className="hero">Hero Section</h2>

        </div>
      )
  }



  export default HeroSection;