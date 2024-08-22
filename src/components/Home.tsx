import React from 'react';
import '../../public/Home.css';
import minhafoto from './img/foto.jpg';
const Home: React.FC = () => {
  return (
    <div className="container" id="home">
      <div className="left-section">
        <div className="branding">
          <h1>Dev</h1>
        </div>
        <div className="intro">
          <h2>I am Leonardo</h2>
          <p>
            Sou desenvolvedor full stack apaixonado por tecnologia e
            programação. Sempre buscando novos desafios e oportunidades de
            aprendizado, me dedico a melhorar minhas habilidades e entregar
            soluções criativas e eficientes.
          </p>
          <button className="portfolio-btn">Ver projetos</button>
          <div className="video-resume">
            <button className="video-btn">&#9658;</button>
            <a href="#">Ver currículo em vídeo</a>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img className='myFoto' src={minhafoto} alt="Foto do Leonardo" />
      </div>
    </div>
  );
};

export default Home;