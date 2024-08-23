import React, { useEffect, useRef } from 'react';
import '../../public/About.css';
import htmlIcon from './img/HTML.png';
import cssIcon from './img/CSS.png';
import javascriptIcon from './img/javascript.png';
import typescriptIcon from './img/typescript.png';
import reactIcon from './img/react.png';
import reduxIcon from './img/redux.png';
import dockerIcon from './img/docker.png';
import mysqlIcon from './img/mysql.png';
import nodejsIcon from './img/nodejs.png';
import expressIcon from './img/express.png';
import apirestIcon from './img/apirest.png';
import sequelizeIcon from './img/sequelize.png';
import gitIcon from './img/git.png';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const baloesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            baloesRef.current.forEach((balao, index) => {
              if (balao) {
                setTimeout(() => {
                  balao.classList.add('ativo');
                }, index * 150);
              }
            });
          } else {
            baloesRef.current.forEach((balao) => {
              if (balao) {
                balao.classList.remove('ativo');
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="about-container" ref={aboutRef}>
      <h2>About Me</h2>
      <p>Olá! 👋 Sou um desenvolvedor full-stack apaixonado por tecnologia e inovação. Minha jornada começou na Trybe, onde mergulhei fundo no mundo do desenvolvimento web. Desde então, venho construindo soluções criativas e robustas para desafios complexos. Estou sempre buscando aprender mais e aprimorar minhas habilidades para oferecer as melhores soluções aos meus clientes e usuários.</p>
      <h3>Technologies and Tools</h3>
      <p>Utilizo tecnologias de código aberto e confiáveis, tanto para o desenvolvimento front-end, responsável pela estruturação da página, quanto para o back-end, que gerencia o banco de dados.</p>
      <div className="balao-tecnologias">
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[0] = el)}><img src={htmlIcon} alt="HTML Icon" /><span>HTML</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[1] = el)}><img src={cssIcon} alt="HTML Icon" /><span>CSS</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[2] = el)}><img src={javascriptIcon} alt="HTML Icon" /><span>JavaScript</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[3] = el)}><img src={typescriptIcon} alt="HTML Icon" /><span>TypeScript</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[4] = el)}><img src={reactIcon} alt="HTML Icon" /><span>React</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[5] = el)}><img src={reduxIcon} alt="HTML Icon" /><span>Redux</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[6] = el)}><img src={dockerIcon} alt="HTML Icon" /><span>Docker</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[7] = el)}><img src={mysqlIcon} alt="HTML Icon" /><span>MySQL</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[8] = el)}><img src={nodejsIcon} alt="HTML Icon" /><span>NodeJS</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[9] = el)}><img src={expressIcon} alt="HTML Icon" /><span>Express</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[10] = el)}><img src={apirestIcon} alt="HTML Icon" /><span>ApiRest</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[11] = el)}><img src={sequelizeIcon} alt="HTML Icon" /><span>Sequelize</span></div>
        <div className="balao-tecnologia" ref={(el) => (baloesRef.current[12] = el)}><img src={gitIcon} alt="HTML Icon" /><span>Git</span></div>
      </div>
    </div>
  );
};

export default About;
