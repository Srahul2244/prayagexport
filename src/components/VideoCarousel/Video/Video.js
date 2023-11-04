import React, { useEffect, useState } from "react";
import intro from "../../Assest/Logo/Produce_4.mp4";
import volume from "../../Assest/Logo/volume.png";
import muteIcon from "../../Assest/Logo/mute.png";
import playIcon from "../../Assest/Logo/play-button-arrowhead.png";
import pause from "../../Assest/Logo/pause.png";
const Video = () => {
  const [mute, setMute] = useState(true);
  const [play, setPlay] = useState(false);
  const video = document.getElementById("video");

  const handleMute = () => {
    if (mute) {
      setMute(false);
    } else {
      setMute(true);
    }
  };

  const handlePlay = () => {
    console.log(play);
    if (play) {
      setPlay(false);
      video?.pause();
    } else {
      setPlay(true);
      video?.play();
    }
  };
  useEffect(() => {
    handlePlay();
  }, []);
  return (
    <div>
      <div className="video relative">
        <video
          id="video"
          autoPlay={play}
          muted={mute}
          src={intro}
          preload="auto"
        ></video>
        <div onClick={handleMute} className="sound absolute top-0 right-0 m-8">
          {mute ? <img src={muteIcon} alt="" /> : <img src={volume} alt="" />}
        </div>
        <div onClick={handlePlay} className="sound absolute top-0 left-0 m-8">
          {play ? <img src={pause} alt="" /> : <img src={playIcon} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default Video;
