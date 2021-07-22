import React from 'react';
import './index.css';
import './hero_video.mp4';
import ReactPlayer from 'react-player';


  const HeroSection = () => {
      return (
        <div className="hero-section">
         <ReactPlayer url='./hero_video.mp4' width="100%" height="100%" controls={true}/> 
        <h2 className="hero">Hero Section</h2>

        </div>
      )
  }



  export default HeroSection;