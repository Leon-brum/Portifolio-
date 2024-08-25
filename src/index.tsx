import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../public/styles.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

const sections = ['home', 'about', 'services', 'projects', 'contact'];

const App: React.FC = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isTransitioning) {
        event.preventDefault(); // Previne o scroll durante a transição
        return;
      }

      if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        // Scroll down
        goToSection(currentSectionIndex + 1);
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        // Scroll up
        goToSection(currentSectionIndex - 1);
      }
    };

    const goToSection = (index: number) => {
      setIsTransitioning(true);
      setCurrentSectionIndex(index);

      const sectionId = sections[index];
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        window.scrollTo({
          top: sectionElement.offsetTop,
          behavior: 'smooth',
        });
      }

      // Delay para desativar o bloqueio do scroll até a transição estar completa
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // Tempo de transição
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSectionIndex, isTransitioning]);
  return (
    <div>
      <div id='home'><Home /></div>
      <div id='about'><About /></div>
      <div id='services'><Services /></div>
      <div id='projects'><Projects /></div>
      <div id='contact'><Contact /></div>
      <Sidebar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));