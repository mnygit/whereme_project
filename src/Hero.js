import React from 'react';
import './index.css';
import video from './hero_video.mp4';
import ReactPlayer from 'react-player';


  const HeroSection = () => {
      return (
        <div className="hero-section"> 
          <div className="intro"> 
          <h2>Sed ut perspiciatis unde</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua.</p>
          </div>
         <ReactPlayer
         className="hero-video"
         url={video} 
         width="50%" 
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
        </div>
      )
  }



  export default HeroSection;