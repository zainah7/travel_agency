import React from "react";
import deals1 from "../image/deals1.png";
import deals2 from "../image/deals2.png";
import deals3 from "../image/deals3.png";
import deals4 from "../image/deals4.png";
import star from "../image/star .png";
import location from "../image/location.png";

const DealsDiscounts = () => {
  return (
    <>
      <div className=" bg-[#FEFCFB] h-screen flex flex-col text-center p-14">
        <div className="flex flex-col justify-center">
          <h1 className="text-[64px] font-semibold">
            Exclusive <span className="text-[#FA7436]"> deals & discounts</span>
          </h1>
          <p className="w-[40%] text-center mx-auto ">
            Plan your perfect vacation with our travel agency. Choose among
            hundreds of all-inclusive offers!
          </p>
        </div>
        <div className="flex justify-center gap-5 p-8">
          <div className="shadow-2xl shadow-gray-200">
            <img src={deals1} alt="" />
            <div className="flex justify-between  px-3 py-6">
              <h1 className="font-semibold text-lg">Madrid</h1>
              <div className="flex items-center gap-2">
                <img src={star} className="w-4 h-4" alt="" />
                <p>4.8</p>
              </div>
            </div>
            <div className="flex justify-between gap-1 px-2 pb-6">
              <div className="flex items-center gap-2">
                <img src={location} className="w-4 h-4" alt="" />
                <p>Spain</p>
              </div>
              <div className="flex gap-3">
                <p className="stroke-black">$950</p>
                <p className=" bg-orange-200 px-2 rounded-lg text-[#FA7436] font-bold">
                  $850
                </p>
              </div>
            </div>
          </div>
          <div className=" relative shadow-2xl shadow-gray-200">
            <button className=" bg-[#FA7436] px-4 py-2 absolute top-44 left-[4.3rem] bg-[#FA7436]rounded-lg text-white">
              Book Now
            </button>
            <img src={deals2} alt="" />
            <div className="flex justify-between px-3 py-6">
              <h1 className="font-semibold text-lg">Firenze</h1>
              <div className="flex items-center gap-2">
                <img src={star} className="w-4 h-4" alt="" />
                <p>4.5</p>
              </div>
            </div>
            <div className="flex justify-between gap-1 px-2 pb-6">
              <div className="flex items-center gap-2">
                <img src={location} className="w-4 h-4" alt="" />
                <p>Italy</p>
              </div>
              <div className="flex gap-3">
                <p>$850</p>
                <p className="  bg-orange-200 px-2 rounded-lg text-[#FA7436] font-bold">
                  $750
                </p>
              </div>
            </div>
          </div>
          <div className=" shadow-2xl shadow-gray-200">
            <img src={deals3} alt="" />
            <div className="flex justify-between px-3 py-6">
              <h1 className="font-semibold text-lg">Paris</h1>
              <div className="flex items-center gap-2">
                <img src={star} className="w-4 h-4" alt="" />
                <p>4.4</p>
              </div>
            </div>
            <div className="flex justify-between gap-1 px-2 pb-6">
              <div className="flex items-center gap-2">
                <img src={location} className="w-4 h-4" alt="" />
                <p>France</p>
              </div>
              <div className="flex gap-3">
                <p>$699</p>
                <p className=" bg-orange-200 px-2 rounded-lg text-[#FA7436] font-bold">
                  $599
                </p>
              </div>
            </div>
          </div>
          <div className="sha dow-2xl shadow-gray-200">
            <img src={deals4} alt="" />
            <div className="flex justify-between px-3 py-6">
              <h1 className="font-semibold text-lg">London</h1>
              <div className="flex items-center gap-2">
                <img src={star} className="w-4 h-4" alt="" />
                <p>4.8</p>
              </div>
            </div>
            <div className="flex justify-between gap-1 px-2 pb-6 ">
              <div className="flex items-center gap-2">
                <img src={location} className="w-4 h-4" alt="" />
                <p>UK</p>
              </div>
              <div className="flex gap-3">
                <p>$850</p>
                <p className="  bg-orange-200 px-2 rounded-lg text-[#FA7436] font-bold">
                  $850
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsDiscounts;
