import React, { useState } from 'react';
import VideoPopup from './videopopup';

const VideoButton = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openPopup}>Show Me How</button>
      <VideoPopup isOpen={isOpen} onClose={closePopup} videoUrl={videoUrl} />
    </>
  );
};

export default VideoButton;
