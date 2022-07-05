import React from 'react';
import Home from './containers/Home';
import Projects from './containers/Projects';

function App() {
  return (
    <div className="min-h-screen bg-home">
      <Home />
      <Projects />
    </div>
  );
}

export default App;
