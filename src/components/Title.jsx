import React from 'react';

function Title({ text, color }) {
  return (
    <h1
      className={`${color} flex h-full w-full items-center justify-center rounded font-text text-8xl font-bold md:text-6xl lg:text-7xl`}
    >
      {text}
    </h1>
  );
}

export default Title;
