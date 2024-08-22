import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../public/styles.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';


const App: React.FC = () => {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > lastScrollTop) {
        window.scrollTo({
          top: document.getElementById("about")?.offsetTop,
          behavior: 'smooth'
        });
      } else if (currentScroll < lastScrollTop) {
        window.scrollTo({
          top: document.getElementById("home")?.offsetTop,
          behavior: 'smooth'
        });
      }

      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div>
      <Home />
      <Sidebar />
      <About />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));