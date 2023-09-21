// @ts-nocheck
import React, { useRef, useEffect } from 'react';

function YouTubePlayer() {
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube iframe API script
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    // Define an API callback function
    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player(playerRef.current, {
        videoId: 'ImKY6TZEyrI', // Replace with your YouTube video's ID
        playerVars: {
          autoplay: 1, // Auto-play is turned off
          controls: 0, // Hide player controls
          showinfo: 0, // Hide video title and info
          modestbranding: 1, // Prevent YouTube logo
        },
        events: {
          onReady: (event) => {
            // The video is ready to play, but we keep it hidden
            event.target.mute();
          },
        },
      });

      // Store the player instance for later use
      playerRef.current = player;
    };
  }, []);

  const playVideo = () => {
    const player = playerRef.current;
    if (player) {
      player.unMute(); // Unmute the player
      player.playVideo(); // Start playback
    }
  };

  const stopVideo = () => {
      const player = playerRef.current;
    if (player) {
      player.pauseVideo(); // Start playback
    }
  };


  return (
    <div>
      <div style={{display:"none"}} className="video-container">
        <div ref={playerRef}></div>
      </div>
      <div className="music-controls-container">
      <button className="music-controls-button" onClick={playVideo}>Play</button>
      <button className="music-controls-button" onClick={stopVideo}>Stop</button>
      </div>
    </div>
  );
}

export default YouTubePlayer;