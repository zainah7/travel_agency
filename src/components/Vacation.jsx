import React from "react";
import plamTree from "../image/plamTree.png";
import vacation1 from "../image/vacation1.png";
import vacation2 from "../image/vacation2.png";
import vacation3 from "../image/vacation3.png";
import Navigation from "../image/Navigation.png";
import star from "../image/star .png";

const Vacation = () => {
  return (
    <div className="flex flex-col justify-center my-10 bg-[#FEFCFB]">
      <div className="text-center">
        <h1 className="md:text-[64px] text-5xl font-semibold mb-4">
          Best <span className="text-[#FA7436]"> vacation plan</span>
        </h1>
        <p className="md:w-[40%] mx-auto ">
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!
        </p>
        <div className="flex">
          <img src={plamTree} alt="plam tree" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 ">
        <div className="shadow-2xl shadow-gray-200  ">
          <img src={vacation1} alt="" />
          <div className="flex justify-between p-8">
            <h1>Rome, Italty</h1>
            <p className="text-[#FA7436]">$5,42k</p>
          </div>
          <div className="flex justify-between pb-5 px-8">
            <div className="flex gap-2 items-center">
              <img src={Navigation} className="w-4 h-4" alt="" />
              <p>10 Days Trip</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={star} alt="star" />
              <p>4.8</p>
            </div>
          </div>
        </div>
        <div className="shadow-2xl shadow-gray-200">
          <img src={vacation2} alt="" />
          <div className="flex justify-between p-8">
            <h1>London,UK</h1>
            <p className="text-[#FA7436]">$2,42k</p>
          </div>
          <div className="flex justify-between pb-5 px-8">
            <div className="flex gap-2 items-center">
              <img src={Navigation} className="w-4 h-4" alt="" />
              <p>07 Days Trip</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={star} className="w-4 h-4" alt="star" />
              <p>4.7</p>
            </div>
          </div>
        </div>
        <div className="shadow-2xl shadow-gray-200">
          <img src={vacation3} alt="" />
          <div className="flex justify-between p-8">
            <h1>Osaka,Japan</h1>
            <p className="text-[#FA7436]">$5,42k</p>
          </div>
          <div className="flex justify-between pb-5 px-8">
            <div className="flex gap-2 items-center">
              <img src={Navigation} className="w-4 h-4" alt="" />
              <p>10 Days Trip</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src={star} className="w-4 h-4" alt="star" />
              <p>4.8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacation;
