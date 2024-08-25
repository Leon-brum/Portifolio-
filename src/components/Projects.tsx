import React from 'react';
import '../../public/Projects.css';
import apiImage from './img/api.jpg';

const projects = [
  {
    title: "Api de filmes",
    description: "Este projeto é uma API de um banco de dados relacional voltado para o gerenciamento de informações sobre filmes.",
    img: apiImage,
    githubLink: "https://github.com/Leon-brum/project_api_movies",
  },
  {
    title: "trybesmith",
    description: "Este projeto é um banco de dados backend desenvolvido em TypeScript para cadastrar e gerenciar armas de universos de fantasia que fiz na Trybe.",
    img: apiImage,
    githubLink: "https://github.com/Leon-brum/project-trybesmith",
  },
  {
    title: "Project 3",
    description: "Brief description of project 3.",
    img: apiImage,
    githubLink: "https://github.com/seu-usuario/seu-repositorio",
  },
  {
    title: "Project 4",
    description: "Brief description of project 3.",
    img: apiImage,
    githubLink: "https://github.com/seu-usuario/seu-repositorio",
  },
  {
    title: "Project 5",
    description: "Brief description of project 3.",
    img: apiImage,
    githubLink: "https://github.com/seu-usuario/seu-repositorio",
  },
  {
    title: "Project 6",
    description: "Brief description of project 3.",
    img: apiImage,
    githubLink: "https://github.com/seu-usuario/seu-repositorio",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>Projects</h1>
      <h2>What I Built</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={`Project ${index + 1}`} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="show-more-container">
        <a href="https://github.com/Leon-brum?tab=repositories" className="show-more-btn" target="_blank" rel="noopener noreferrer">
          Show More
        </a>
      </div>
    </div>
  );
};

export default Projects;