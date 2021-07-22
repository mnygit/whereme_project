import React from 'react';
import './index.css';
import video from './hero_video.mp4';
import ReactPlayer from 'react-player';


  const HeroSection = () => {
      return (
        <div className="hero-section">
         <ReactPlayer url={video} width="50%" height="auto" controls={true}/> 
        <h2 className="hero">Hero Section</h2>

        </div>
      )
  }



  export default HeroSection;