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
          <p className="text-[20px]">
            Plan your perfect vacation with our travel agency. Choose among
            hundreds of all-inclusive offers!
          </p>
        </div>
        <div className="flex justify-center gap-5 p-8">
          <div>
            <img src={deals1} alt="" />
            <div className="flex justify-around">
              <h1>Madrid</h1>
              <div className="flex gap-2">
                <img src={star} alt="" />
                <p>4.8</p>
              </div>
            </div>
            <div className="flex gap-1 ">
              <div className="flex">
                <img src={location} alt="" />
              </div>
              <p>Spain</p>
              <div className="flex">
                <p>$950</p>
                <p>$850</p>
              </div>
            </div>
          </div>
          <div>
            <img src={deals2} alt="" />
            <div className="flex justify-around">
              <h1>Firenze</h1>
              <div className="flex gap-2">
                <img src={star} alt="" />
                <p>4.5</p>
              </div>
            </div>
            <div className="flex gap-1 ">
              <div className="flex">
                <img src={location} alt="" />
              </div>
              <p>Italy</p>
              <div className="flex">
                <p>$850</p>
                <p>$750</p>
              </div>
            </div>
          </div>
          <div>
            <img src={deals3} alt="" />
            <div className="flex justify-around">
              <h1>Paris</h1>
              <div className="flex gap-2">
                <img src={star} alt="" />
                <p>4.4</p>
              </div>
            </div>
            <div className="flex gap-1 ">
              <div className="flex">
                <img src={location} alt="" />
              </div>
              <p>France</p>
              <div className="flex">
                <p>$699</p>
                <p>$599</p>
              </div>
            </div>
          </div>
          <div>
            <img src={deals4} alt="" />
            <div className="flex justify-around">
              <h1>London</h1>
              <div className="flex gap-2">
                <img src={star} alt="" />
                <p>4.8</p>
              </div>
            </div>
            <div className="flex gap-1 ">
              <div className="flex">
                <img src={location} alt="" />
              </div>
              <p>UK</p>
              <div className="flex">
                <p>$850</p>
                <p>$850</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealsDiscounts;
