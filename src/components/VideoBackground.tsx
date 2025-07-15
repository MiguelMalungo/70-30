import React, { useEffect } from 'react';
import './VideoBackground.css';

interface VideoBackgroundProps {
  videoSrc: string;
  opacity?: number; // Overlay opacity (0-1)
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, opacity = 0.7 }) => {
  useEffect(() => {
    console.log(`Video loaded: ${videoSrc}`);
  }, [videoSrc]);

  return (
    <div className="video-background">
      <video autoPlay loop muted playsInline className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}></div>
    </div>
  );
};

export default VideoBackground;
