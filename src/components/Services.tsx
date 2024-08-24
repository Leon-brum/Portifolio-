import React, { useEffect, useRef, useState } from "react";
import '../../public/Services.css';
import frontendIcon from './img/frontend.png';
import backendIcon from './img/backend.png';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div id="services" className="services-container" ref={servicesRef}>
      <h1>Services</h1>
      <h2>What I Provide</h2>
      <div className="services">
        <div className={`service ${isVisible ? 'visible' : 'hidden'}`}>
          <img src={frontendIcon} alt="Frontend Icon" />
          <h3>Frontend Development</h3>
          <p>Desenvolvimento Frontend é a criação da interface visual de um site ou aplicação, incluindo o design, layout e interatividade. Utiliza tecnologias como HTML, CSS e JavaScript para tornar a experiência do usuário intuitiva e envolvente.</p>
        </div>
        <div className={`service ${isVisible ? 'visible' : 'hidden'}`}>
          <img src={backendIcon} alt="Backend Icon" />
          <h3>Backend Development</h3>
          <p>Desenvolvimento Backend envolve a construção da lógica, banco de dados e servidores que dão suporte ao funcionamento de um site ou aplicação. Meu foco é em JavaScript e TypeScript para desenvolver soluções robustas e escaláveis no lado do servidor.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;