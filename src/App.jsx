import React from 'react';
import Home from './containers/Home';
import Projects from './containers/Projects';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-home cursor-default">
      <Home />
      <Projects />
    </div>
  );
}

export default App;
