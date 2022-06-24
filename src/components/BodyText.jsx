import React from 'react';

function BodyText({ text }) {
  return (
    <p class="w-64 font-text text-xl font-light text-primary md:w-3/5 lg:w-2/5 lg:text-4xl lg:font-extralight">
      {text}
    </p>
  );
}

export default BodyText;
