import React from 'react';

function TitleGradient({ text }) {
  return (
    <h1 className="xl:text8xl bg-hero bg-clip-text font-text text-7xl font-bold text-transparent underline hover:decoration-blue10 hover:decoration-2 hover:underline-offset-1 md:text-6xl">
      {text}
    </h1>
  );
}

export default TitleGradient;
