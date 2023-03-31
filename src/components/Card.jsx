import React from 'react';

function Card({ children, width, height, padding, flex, bgColor, cursor, onClick }) {
  return (
    <div
      className={`${width} ${height} ${flex} ${cursor} border-radius bg-gradient-to-br from-black0 p-[1px]`}
      onClick={onClick}
    >
      <div className={`${flex} border-radius ${padding} h-full w-full ${bgColor}`}>
        {children}
      </div>
    </div>
  );
}

export default Card;
