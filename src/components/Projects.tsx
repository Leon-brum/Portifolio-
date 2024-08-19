import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="project-card">
        <img src="projeto1.png" alt="Projeto 1" />
        <h3>Nome do Projeto</h3>
        <p>Descrição breve do projeto e tecnologias usadas.</p>
        <a href="https://github.com/seu-usuario/projeto1">Código</a>
        <a href="https://seuprojeto1.com">Live Demo</a>
      </div>
      {/* Repita para outros projetos */}
    </section>
  );
};

export default Projects;