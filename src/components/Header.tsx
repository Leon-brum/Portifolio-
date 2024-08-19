import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Leonardo Moreno - Full Stack Developer</h1>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
      <a href="curriculo.pdf" download>Download CV</a>
    </header>
  );
};

export default Header;