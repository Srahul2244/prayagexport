import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import { Power1 } from "gsap/all";
import muteIcon from "../../Assest/Logo/mute.png";
import pause from "../../Assest/Logo/pause.png";
import playIcon from "../../Assest/Logo/play-button-arrowhead.png";
import intro from "../../Assest/Logo/Produce_4.mp4";
import volume from "../../Assest/Logo/volume.png";

const Video = () => {
  const [mute, setMute] = useState(true);
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const handleMute = () => {
    setMute(prevMute => !prevMute);
    gsap.to(videoRef.current, {
      volume: mute ? 1 : 0,
      duration: 1,
      ease: Power1.easeInOut,
    });
  };

  const handlePlay = () => {
    setPlay(prevPlay => !prevPlay);
    if (!play) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    gsap.from(videoRef.current, {
      opacity: 2,
      duration: 1,
      ease: Power1.easeInOut,
    });
    handlePlay();
  }, []);

  return (
    <div>
      <div className="video relative">
        <video
          ref={videoRef}
          autoPlay={play}
          muted={mute}
          src={intro}
          preload="auto"
        />
        <div
          onClick={handleMute}
          className="sound absolute top-0 right-0 m-8 cursor-pointer"
        >
          {mute ? (
            <img src={muteIcon} alt="Mute" />
          ) : (
            <img src={volume} alt="Volume" />
          )}
        </div>
        <div
          onClick={handlePlay}
          className="sound absolute top-0 left-0 m-8 cursor-pointer"
        >
          {play ? (
            <img src={pause} alt="Pause" />
          ) : (
            <img src={playIcon} alt="Play" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
