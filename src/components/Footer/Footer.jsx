import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-[#f0cc71] pt-10 relative">
      <img
        className="width-[100%]"
        src="https://www.lays.com/sites/lays.com/themes/lays/img/bg-contactus-en.jpg?3"
      />
      <div className="absolute top-[115px] left-[450px] transform -translate-x-2/4 -translate-y-2/4 sm:left-[450px] md:left-[360px] lg:left-[474px]  transition-transform  hover:scale-110">
        <SocialIcon url="https://facebook.com" />
      </div>
      <div className="absolute  md:top-[115px]  left-[450px] transform -translate-x-2/4 -translate-y-2/4 sm:left-[450px] md:left-[455px] lg:left-[597px]  transition-transform  hover:scale-110">
        <SocialIcon url="https://twitter.com" />
      </div>
      <div className="absolute top-[115px] left-[450px] transform -translate-x-2/4 -translate-y-2/4 sm:left-[450px] md:left-[550px] lg:left-[721px]  transition-transform  hover:scale-110">
        <SocialIcon url="https://youtube.com" />
      </div>
      <div className="absolute top-[115px] left-[450px] transform -translate-x-2/4 -translate-y-2/4 sm:left-[450px] md:left-[644px] lg:left-[844px]  transition-transform  hover:scale-110">
        <SocialIcon url="https://instagram.com" />
      </div>
    </div>
  );
};

export default Footer;
