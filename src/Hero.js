import React from 'react';
import './index.css';
import video from './hero_video.mp4';
import ReactPlayer from 'react-player';


  const HeroSection = () => {
      return (
        <div className="hero-section"> 
          <section className="hero-column hero-intro"> 
          <div className="intro">
          <h2 className="intro-header">Sed ut perspiciatis unde</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          </section>
          <section className="hero-column">
         <ReactPlayer
         className="hero-video"
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
         </section>
        </div>
      )
  }



  export default HeroSection;