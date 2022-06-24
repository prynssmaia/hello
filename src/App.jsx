import React from 'react';
import TitleGradient from './components/TitleGradient';
import BodyText from './components/BodyText';

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-portait font-text">
      <TitleGradient text="Prynss Maia" />
      <BodyText text="Losing myself to design and some web projects while listen to music." />
    </div>
  );
}

export default App;
