import React from 'react';

function Card({ grid, children, bgColor, width, height }) {
  return (
    <div
      className={`${grid} ${bgColor} ${width} ${height} flex items-center justify-center rounded`}
    >
      {children}
    </div>
  );
}

export default Card;
