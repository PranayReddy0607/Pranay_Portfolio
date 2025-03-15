import React, { useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/Pranay pic.jpg';
import profile_img2 from '../../assets/Pranay pic 2.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div id='home' className='hero'>
      <div className={`flip-card ${isFlipped ? 'flip' : ''}`} onClick={handleFlip}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={profile_img} alt="Front Image" />
          </div>
          <div className="flip-card-back">
            <img src={profile_img2} alt="Back Image" />
          </div>
        </div>
      </div>
      <h1><span>I'm Pranay,</span> full stack developer.</h1>
      <p>I'm a full stack developer, with the experience of .6 months, and developing in the field of software to be a good software engineer.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with me </AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
