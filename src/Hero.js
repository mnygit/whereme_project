import React from 'react';
import './index.css';
import video from './hero_video.mp4';
import ReactPlayer from 'react-player';


  const HeroSection = () => {
      return (
        <div className="hero-section"> 
          <section className="hero-column hero-intro"> 
          <div className="intro">
          <h2 className="intro-header">A creative approach to shopping.</h2>
          <p className="intro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua magna aliqua.</p>
            <div className="btn-center">
            <button className="btn">Style Me Now!</button>
            </div>
          </div>
          </section>
          <section className="hero-column hero-video">
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
         </section>
        </div>
      )
  }



  export default HeroSection;