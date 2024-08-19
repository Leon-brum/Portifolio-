import React from 'react';
import ReactDOM from 'react-dom';
import '../public/styles.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));