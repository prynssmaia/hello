import React from 'react';

function BackgroundVideo() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full object-cover">
      {/* <img src="./src/assets/bg-hero.png" alt="" srcset="" /> */}
      <video
        loop
        muted
        autoPlay
        playsinline
        className="h-full w-full object-cover"
        src="./src/assets/hello.mp4"
      ></video>
    </div>
  );
}

export default BackgroundVideo;
