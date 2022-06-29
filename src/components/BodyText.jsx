import React from 'react';

function BodyText({ text }) {
  return (
    <p className="w-64 font-text text-xl font-light text-primary md:w-3/5 md:text-2xl lg:w-3/5 lg:text-4xl">
      {text}
    </p>
  );
}

export default BodyText;
