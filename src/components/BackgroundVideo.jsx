import React from 'react';

function BackgroundVideo() {
  return (
    <div className="absolute inset-0 -z-10">
      <img src="./assets/bg-hero.png" alt="" srcset="" />
      {/* <video
        loop
        muted
        autoplay
        playsinline
        className="h-full w-full object-cover"
        src="./assets/hello.mp4"
      ></video> */}
    </div>
  );
}

export default BackgroundVideo;
