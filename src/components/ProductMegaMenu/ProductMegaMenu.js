import React from "react";
import "animate.css";
import cheddar from "../../Assest/Cheddar-Cheese-Puffs-14.625-x-12-3.5-Oz.png";
import honey from "../../Assest/Honey-BBQ-Puffs-18.625-x-14-6-Oz.png";
import lousiana from "../../Assest/Louisiana-BBQ-Chips-6-Oz.png";
import crinckle from "../../Assest/Original-Crinkle-Chips-6-Oz.png";
import southern from "../../Assest/Southern-Crunchy-Cheddar-Cheese-Curls-12.625-x-11-4-Oz.png";
import sour from "../../Assest/Sour-Cream-and-Onion-6-Oz.png";
import spicy from "../../Assest/Spicy-Jalapeno-Cheese-Puffs-14.625-x-12-3.5-Oz-2.png";
import lousianaHot from "../../Assest/Louisiana-Spicy-Hot-Crinkle-Chips-6-Oz.png";
const ProductMegaMenu = () => {
  return (
    <div className="w-[100%]">
      <div className="products grid grid-cols-8">
        <div className="first bg-[#F8931F] flex flex-col">
          <div className="image">
            <img className="w-full" src={cheddar} alt="" />
          </div>
          <div className="text text-lg text-white font-bold px-2">
            <h2>Cheddar Cheese Puffs</h2>
          </div>
        </div>
        {/* second */}
        <div className="first bg-[#83D8EE] flex flex-col">
          <div className="image">
            <img className="w-full" src={crinckle} alt="" />
          </div>
          <div className="text text-lg text-white font-bold px-2">
            <h2>Southern Crinckle</h2>
          </div>
        </div>
        {/* third */}
        <div className="first bg-[#383A6F] flex flex-col">
          <div className="image">
            <img className="w-full" src={honey} alt="" />
          </div>
          <div className="text text-lg text-white font-bold px-2">
            <h2>Honey Cheese Puffs</h2>
          </div>
        </div>
        {/* 4th */}
        <div className="first bg-[#336B3E] flex flex-col">
          <div className="image">
            <img className="w-full" src={lousiana} alt="" />
          </div>
          <div className="text text-lg text-white font-bold px-2">
            <h2>Lousiana Puffs</h2>
          </div>
        </div>
        {/* 5th */}
        <div className="first bg-[#A1CC3A] flex flex-col">
          <div className="image">
            <img className="w-full" src={lousianaHot} alt="" />
          </div>
          <div className="text text-lg text-white font-bold px-2">
            <h2>Lousiana Hot Puffs</h2>
          </div>
        </div>
        {/* 6th */}
        <div className="first bg-[#0094BC] flex flex-col">
          <div className="image">
            <img className="w-full" src={sour} alt="" />
          </div>
          <div className="text text-lg text-white font-bold px-2">
            <h2>Sour Cream</h2>
          </div>
        </div>
        {/* 7th */}
        <div className="first bg-[#00AA4F] flex flex-col">
          <div className="image">
            <img className="w-full" src={southern} alt="" />
          </div>
          <div className="text text-lg text-white font-bold px-2">
            <h2>Southern Puffs</h2>
          </div>
        </div>
        {/* 8th */}
        <div className="first bg-[#00308F] flex flex-col">
          <div className="image">
            <img className="w-full" src={spicy} alt="" />
          </div>
          <div className="text text-lg text-white font-bold px-2">
            <h2>Spicy Cheese Puffs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMegaMenu;
