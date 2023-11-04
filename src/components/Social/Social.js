import React from "react";
import "./Social.css";
import image1 from "../../Assest/image1.jpg";
import image2 from "../../Assest/image2.jpg";
import first from "../../Assest/Logo/instagram.png";
const Social = () => {
  return (
    <div className="grid grid-cols-3 gap-2 items-center">
      <div className="first">
        <img src={image1} alt="" />
        <img className="instagram-first" src={first} alt="" />
      </div>
      <div className="middle-column">
        <div className="image1">
          <img className="instagram-first" src={first} alt="" />
        </div>
        <div className="image2">
          <img className="instagram-first" src={first} alt="" />
        </div>
        <div className="image3">
          <img className="instagram-first" src={first} alt="" />
        </div>
        <div className="image4">
          <img className="instagram-first" src={first} alt="" />
        </div>
      </div>
      <div className="last">
        <img src={image2} alt="" />
      </div>
    </div>
  );
};

export default Social;
