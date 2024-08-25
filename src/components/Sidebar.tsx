import React, { useState } from 'react';
import '../../public/Sidebar.css';
import gitHubIcon from './img/github.png';
import linkedinIcon from './img/linkedin.png';
import instagramIcon from './img/instagram.png';

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <button className="menu-btn" onClick={toggleMenu}>&#9776;</button>
      
      <div className="sidebar-title">Desenvolvedor Full Stack</div> 
      <div className="icons-links">
      <a href="https://github.com/Leon-brum" target="_blank" rel="noopener noreferrer">
            {
              <img src={gitHubIcon} alt="" />
            }
          </a>
          <a href="https://www.linkedin.com/in/leonardo-moreno-b8015a294/" target="_blank" rel="noopener noreferrer">
            {
              <img src={linkedinIcon} alt="" />
            }
          </a>
          <a href="https://www.instagram.com/leo_morenolm" target="_blank" rel="noopener noreferrer">
            {
              <img src={instagramIcon} alt="" />
            }
          </a>
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" className="menu-link" >Home</a>
        <a href="#about" className="menu-link" >Sobre</a>
        <a href="#services" className="menu-link" >Serviços</a>
        <a href="#projects" className="menu-link" >Projetos</a>
        <a href="#contact" className="menu-link" >Contato</a>
      </div>
    </div>
  );
};

export default Sidebar;