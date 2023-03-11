import React from 'react';

function Card({ children, width, height, padding, flex, bgColor, cursor }) {
  return (
    // <div className= card z-50 text-white`}>
    //   <div className="card-content flex-center">{(children, text)}</div>
    // </div>
    <div
      className={`${width} ${height} ${flex} ${cursor} border-radius z-10 bg-gradient-to-br from-black0 p-[1px]`}
    >
      <div className={`${flex} border-radius ${padding} h-full w-full ${bgColor}`}>
        {children}
      </div>
    </div>
  );
}

export default Card;
