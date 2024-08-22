import React, { useEffect, useRef } from 'react';
import '../../public/About.css';
import htmlIcon from './img/HTML.png'
const About = () => {
  return (
    <div id="about" className="about-container">
      <h2>About Me</h2>
      <p>A bit about me...</p>
      <h3>Technologies and Tools</h3>
      <div className="balao-tecnologias">
        <div className="balao-tecnologia"><img src={htmlIcon} alt="" /></div>
        <div className="balao-tecnologia">CSS</div>
        <div className="balao-tecnologia">JavaScript</div>
      </div>
    </div>
  );
};

export default About;