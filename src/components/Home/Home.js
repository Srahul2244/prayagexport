import React from "react";
import Social from "../Social/Social";
import Video from "../Video/Video";
import VideoCarousel from "../VideoCarousel/VideoCarousel";
import img from "../../Assest/1.png"
import { useEffect } from "react";
import gsap from "gsap";
const Home = () => {
 

  return (
    <div className="w-[90%] mx-auto mt-5">
      <Video />
      <div className="video-carousel p-20 bg-green-400 mt-5 floating-image-trigger">
        <div className="heading text-7xl mb-3 text-white">Videos</div>
        <VideoCarousel />
      </div>
      <div className="social p-20 bg-[#01A9E7] mt-5">
        <div className="heading text-7xl mb-3 text-white">Social</div>
        <Social />
      </div>
    </div>
  );
};

export default Home;

