import React from 'react';

function FrameBackground({ children }) {
  return (
    <div className="container-canva flex-grow-h bg-grid-pattern solid padding z-10 border border-black0">
      <div className="blk-gradient absolute inset-0 h-screen opacity-90"></div>
      {children}
    </div>
  );
}

export default FrameBackground;
