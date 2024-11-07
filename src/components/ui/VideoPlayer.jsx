"use client";
import React, { useRef } from "react";

const VideoPlayer = ({ src, controls, autoPlay, muted }) => {
  const videoRef = useRef(null);

  return (
    <video
      ref={videoRef}
      width={400}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
};

export default VideoPlayer;
