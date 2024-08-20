import React from 'react';
import ReactDOM from 'react-dom';
import '../public/styles.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';


const App: React.FC = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));