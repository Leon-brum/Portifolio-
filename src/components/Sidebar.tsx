import React, { useState } from 'react';
//import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Importa ícones de redes sociais
import '../../public/Sidebar.css'; // Crie o CSS correspondente

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="sidebar">
      <button className="menu-btn" onClick={toggleMenu}>&#9776;</button>
      <div className="menu">
        <p>Desenvolvedor Full Stack</p>
        <div className="social-icons">
          <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer"></a>
          <a href="https://twitter.com/seuusuario" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;