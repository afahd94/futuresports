import React from 'react';

function VideoPlayer() {
  return (
    <div>
      <h2>Watch the action</h2>
      <div className="video-container">
        <iframe
          width="860" 
          height="615"
          src="https://www.youtube.com/embed/-7XNVfNj2h0" 
          title="YouTube Video"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPlayer;
