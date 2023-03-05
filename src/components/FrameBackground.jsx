import React from 'react';
import styles from '../style';

function FrameBackground({ children }) {
  return (
    <div className="container-canva solid padding bg-grid-pattern flex h-screen flex-col border border-black0">
      <div className="blk-gradient absolute inset-0 h-screen opacity-90"></div>
      {children}
    </div>
  );
}

export default FrameBackground;
