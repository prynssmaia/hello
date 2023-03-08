import React from 'react';

function Card({ children, width, height }) {
  return (
    // <div className= card z-50 text-white`}>
    //   <div className="card-content flex-center">{(children, text)}</div>
    // </div>
    <div className="z-10 mb-6">
      <div
        className={`${width} ${height} flex-start border-radius w-full bg-gradient-to-br from-black0 p-[1px]`}
      >
        <div className="flex-start border-radius padding h-full w-full space-y-2 bg-black19 md:space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Card;
