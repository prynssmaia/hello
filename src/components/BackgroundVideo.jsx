import React from 'react';
import video from '/assets/hello.mp4';
import image from '/assets/bg-hero.png';
import TitleGradient from '../components/TitleGradient';

function BackgroundVideo() {
  return (
    <>
      <div className="relative rounded">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="inset-0 -z-10 h-40 w-full rounded object-cover"
        >
          <source src={video} type="video/mp4; codecs=hvc1" />
          <source src={video} type="video/webm; codecs=vp9" />
          <source src={video} type="video/ogg" />
        </video>
        <div className="absolute bottom-4 left-4 px-2">
          <TitleGradient text="Hello." />
        </div>
      </div>
      {/* <video
        loop
        muted
        autoPlay
        playsInline
        className="inset-0 -z-10 h-full w-full rounded object-cover"
      >
        <source src={video} type="video/mp4; codecs=hvc1" />
        <source src={video} type="video/webm; codecs=vp9" />
        <source src={video} type="video/ogg" />
      </video> */}
      {/*<img
        className="inset-0 -z-10 h-40 w-full rounded object-cover"
        src={image}
        alt=""
        srcset=""
      />
      */}
    </>
  );
}

export default BackgroundVideo;
