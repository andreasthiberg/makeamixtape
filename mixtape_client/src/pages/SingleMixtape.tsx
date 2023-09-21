import background from '../img/main-background.jpg'
import mixtapes from "../models/mixtape.tsx"
import React, {useState} from "react";
import VideoPlayer from '../components/VideoPlayers';
import mixtapeGif from "../img/mixtape-gif.gif"

function SingleMixtape(props) {

  const [tapeData, setTapeData] = useState(null);

  return (
    <div className="home-page-background" style={{backgroundImage: `url(${background})`}}>
    <div className="single-mixtape-page">
      <img className="mixtape-gif" alt="Gif of spinning casette tape" src={mixtapeGif}></img>
      <VideoPlayer/>
    </div>
    </div>
  );
}

export default SingleMixtape;
