import React from "react";
import HeroImg from "../image/Hero.png";
import Card1 from "../image/Card-1.png";
import Card2 from "../image/Card-2.png";
import Card3 from "../image/Card-3.png";

const Hero = () => {
  return (
    <div className="flex justify-between bg-[#FEFCFB] h-screen w-[]">
      <div className="flex flex-col">
        <h1 className="text-[64px]">
          Get started your exciting
          <span className="text-[#FA7436]"> journey</span> with us.
        </h1>
        <p className="text-[20px]">
          A Team of experienced tourism professionals will provide you with the
          best advice and tips for your desire place.
        </p>
        <div>
          <button className="text-[#FA7436] border-2 border-[#FA7436] p-3 rounded-lg">
            Discover Now
          </button>
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="hero img" />
        <img src={Card1} alt="" className="absolute" />
        <img src={Card2} alt="" className="absolute" />
        <img src={Card3} alt="" className="absolute" />
      </div>
      <div className="flex">
        <div>
          <h2>Location</h2>
          <p>Where are you going</p>
        </div>
        <div>
          <h2>Date</h2>
          <p>When you will go</p>
        </div>
        <div>
          <h2>Guest</h2>
          <p>Number of guest</p>
        </div>
        <div>
          <button className="bg-[#FA7436] p-3 text-[#E5E5E5]">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
