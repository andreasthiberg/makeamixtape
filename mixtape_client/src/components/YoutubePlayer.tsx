// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';

interface YoutubePlayerProps {
  videoURL: string
}

function YouTubePlayer({videoURL} : YoutubePlayerProps) {
  const playerRef = useRef(null);
  const [currentVideoURL, setCurrentVideoURL] = useState<string | null>(null);

  useEffect(() => {
    // Load the YouTube iframe API script
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(script);

    // Define an API callback function
    window.onYouTubeIframeAPIReady = () => {
      const player = new window.YT.Player(playerRef.current, {
        videoId: videoURL, // Replace with your YouTube video's ID
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

  const changeVideo = () => {
    const player = playerRef.current;
    if (player) {
      player.loadVideoById({videoId: videoURL}); // Change to new video.
    }
  };


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
      <div style={{display:"block"}} className="video-container">
        <div ref={playerRef}></div>
      </div>
      <div className="music-controls-container">
      <button className="music-controls-button" onClick={playVideo}>Play</button>
      <button className="music-controls-button" onClick={stopVideo}>Stop</button>
      <button className="music-controls-button" onClick={changeVideo}>Change</button>
      </div>
      {videoURL}
    </div>
  );
}

export default YouTubePlayer;