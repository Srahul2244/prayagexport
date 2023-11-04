import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

const VideoCarousel = () => {
  const [playing, setPlaying] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [playing3, setPlaying3] = useState(false);
  const handlePause = () => {
    setPlaying(false);
    setPlaying2(false);
    setPlaying3(false);
  };

 
  return (
    <div className="">
      <div class="carousel w-full">
        <div
          id="slide1"
          class="carousel-item relative w-full items-center gap-6"
        >
          <div className="video overflow-hidden">
            <ReactPlayer
              id="first"
              url="https://www.youtube.com/embed/FttGn7Ws-Ws"
              playing={playing}
              onPlay={() => setPlaying(true)}
              light={true}
              className="transition-all hover:scale-110"
            ></ReactPlayer>
          </div>
          <div className="head">
            <div className="heading text-3xl font-bold mb-3 uppercase text-white">
              Soldier Snacks Limon
            </div>
          </div>
        </div>
        <div
          id="slide2"
          class="carousel-item relative w-full items-center gap-6"
        >
          <div className="video  overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/embed/5Fp3S3CIH_s"
              playing={playing2}
              onPlay={() => setPlaying2(true)}
              light={true}
              className="transition-all hover:scale-110"
            ></ReactPlayer>
          </div>
          <div className="head">
            <div className="heading text-3xl font-bold mb-3 uppercase text-white">
              Soldier Snacks Limon
            </div>
          </div>
        </div>
        <div
          id="slide3"
          class="carousel-item relative w-full items-center gap-6"
        >
          <div className="video overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/embed/LzlOyGkugGA"
              playing={playing3}
              onPlay={() => setPlaying3(true)}
              light={true}
              className="transition-all hover:scale-110"
            ></ReactPlayer>
          </div>
          <div className="head">
            <div className="heading text-3xl font-bold mb-3 uppercase text-white">
              Soldier Snacks Limon
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-[59%] justify-center py-2 gap-2">
        <a
          href="#slide1"
          onClick={handlePause}
          class="h-5 w-5 bg-slate-600 rounded-full hover:bg-red-600"
        ></a>
        <a
          href="#slide2"
          onClick={handlePause}
          class="h-5 w-5 bg-slate-600 rounded-full hover:bg-red-600"
        ></a>
        <a
          onClick={handlePause}
          class="h-5 w-5 bg-slate-600 rounded-full hover:bg-red-600"
          href="#slide3"
        ></a>
      </div>
    </div>
  );
};

export default VideoCarousel;
