import React from 'react';
import video from '../assets/hello.mp4'
import image from '../assets/bg-hero.png'

function BackgroundVideo() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full object-cover">
      {/* <img src={image} alt="" srcset="" /> */}
      <video
        loop
        muted
        autoPlay
        playsinline
        className="h-full w-full object-cover"
        src={video}
      ></video>
    </div>
  );
}

export default BackgroundVideo;
