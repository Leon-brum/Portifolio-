import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about">
      <img src="sua-foto.jpg" alt="Foto de Leonardo Moreno" />
      <h2>Sobre Mim</h2>
      <p>Desenvolvedor Full Stack com experiência em TypeScript, React e Node.js.</p>
      <ul>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </section>
  );
};

export default About;