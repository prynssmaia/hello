import React from 'react';

function TitleGradient({ text }) {
  return (
    <h1 class="bg-hero bg-clip-text pb-5 font-text text-5xl font-bold text-transparent underline hover:decoration-blue10 hover:decoration-2 hover:underline-offset-1 md:text-6xl lg:pb-8 lg:text-7xl">
      {text}
    </h1>
  );
}

export default TitleGradient;
