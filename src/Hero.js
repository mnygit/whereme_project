import React from 'react';
import './index.css';
import video from './hero_video.mp4';
import ReactPlayer from 'react-player';


  const HeroSection = () => {
      return (
        <div className="hero-section">
         <ReactPlayer
         url={video} 
         width="100%" 
         height="auto" 
         controls={false}
         playing
         loop
         muted
         config={{ file: { attributes: {
           autoPlay: true,
           muted: true
         }}}}
         /> 
        <h2 className="hero">Hero Section</h2>

        </div>
      )
  }



  export default HeroSection;