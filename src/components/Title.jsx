import React from 'react';

function Title({ text, color }) {
  return (
    <h1 className={`${color} heading1 flex-center h-full w-full rounded font-text`}>
      {text}
    </h1>
  );
}

export default Title;