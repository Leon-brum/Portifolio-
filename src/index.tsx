import React from 'react';
import ReactDOM from 'react-dom';
import '../public/styles.css';
import Home from './components/Home';
import Sidebar from './components/Sidebar';


const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Sidebar />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));