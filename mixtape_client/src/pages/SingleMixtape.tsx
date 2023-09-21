import background from '../img/main-background.jpg'
import mixtapes from "../models/mixtape.tsx"
import React, {useState} from "react";
import VideoPlayer from '../components/YoutubePlayer.tsx';
import mixtapeGif from "../img/mixtape-gif.gif"

interface SingleMixTapePageProps {
  mixtapeId: string
}

function SingleMixtapePage({ mixtapeId }: SingleMixTapePageProps) {

  const [tapeData, setTapeData] = useState(null);
  const [urlFieldContent, setUrlFieldContent] = useState("")
  const [videoURL, setVideoURL] = useState("ImKY6TZEyrI");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update the state with the new input value
    setUrlFieldContent(event.target.value);
  };

  const changeSong = () => {
    setVideoURL(urlFieldContent);
  }

  return (
    <div className="home-page-background" style={{backgroundImage: `url(${background})`}}>
    <div className="single-mixtape-page">
      <img className="mixtape-gif" alt="Gif of spinning casette tape" src={mixtapeGif}></img>
      <div>
        {mixtapeId}
      </div>
      <VideoPlayer videoURL={videoURL}/> 
      <input value={urlFieldContent} onChange={handleInputChange}></input>
      <button onClick={changeSong}>Byt låt</button>
      {videoURL}
    </div>
    </div>
  );
}

export default SingleMixtapePage;
