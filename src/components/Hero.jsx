import React from "react";
import HeroImg from "../image/Hero.png";
import Card1 from "../image/Card-1.png";
import Card2 from "../image/Card-2.png";
import Card3 from "../image/Card-3.png";

const Hero = () => {
  return (
    <>
      <section className=" bg-[#FEFCFB]">
        <div className="flex justify-center space-x-5 items-center h-screen px-44">
          <div className="flex flex-col space-y-10">
            <h1 className="text-7xl font-semibold  w-[75%]">
              Get started your exciting
              <span className="text-[#FA7436]"> journey</span> with us.
            </h1>
            <p className=" text-xl font-semibold w-[70%]">
              A Team of experienced tourism professionals will provide you with
              the best advice and tips for your desire place.
            </p>
            <div>
              <button className="text-[#FA7436] border-2 border-[#FA7436] px-6 py-2 rounded-lg">
                Discover Now
              </button>
            </div>
          </div>
          <div className="relative w-[55%]">
            <img src={HeroImg} alt="hero img" />
            <img src={Card1} alt="" className="absolute top-5 -left-32" />
            <img src={Card2} alt="" className="absolute bottom-16 -left-32" />
            <img src={Card3} alt="" className="absolute right-0 top-36" />
          </div>
        </div>
        <div className="flex justify-center px-80 ">
          <div className="flex items-center py-10 px-5 m-2 shadow-2xl shadow-gray-400 rounded-md justify-center space-x-10">
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
              <button className="bg-[#FA7436] text-[#E5E5E5] rounded-md px-6 py-2">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
