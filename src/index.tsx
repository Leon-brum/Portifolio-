import React from 'react';
import ReactDOM from 'react-dom';
import '../public/styles.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
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