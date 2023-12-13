import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

// Set the app element for accessibility
Modal.setAppElement('#___gatsby');

const VideoPopup = ({ isOpen, onClose, videoUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Popup"
      className="video-popup"
    >
      <button className="close-button" onClick={onClose}>
        Close Tutorial
      </button>
      <div className="video-container">
        <ReactPlayer url={videoUrl}
        controls
        width="100%"
        height="100%"
        />
      </div>
    </Modal>
  );
};

export default VideoPopup;
