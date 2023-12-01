import React from "react";
import icon1 from "../image/icon1.png";
import icon2 from "../image/icon2.png";
import icon3 from "../image/icon3.png";

const NeedsTodo = () => {
  return (
    <>
      <div className="bg-[#F7F8FC] h-screen px-44 space-y-5 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-8">
          <h1 className=" flex  justify-center text-[64px] font-semibold ">
            Things you need <span className="text-[#FA7436]"> to do </span>
          </h1>
          <p className="w-[60%] mx-auto ">
            We ensure that you’ll embark on a perfectly planned, safe vacation
            at a price you can afford.
          </p>
        </div>
        <div className="flex justify-between bg-[#FEFCFB] gap-8">
          <div className="p-8 space-y-4">
            <img src={icon1} alt="icon1" />
            <h2 className="font-semibold text-[18px]">Sign Up</h2>
            <p>
              Completes all the work associated with planning and processing
            </p>
          </div>
          <div className="p-8 space-y-4">
            <img src={icon2} alt="icon2" />
            <h2 className="font-semibold text-[18px]">Worth of Money</h2>
            <p>
              After successful access then book from exclusive deals & pricing
            </p>
          </div>
          <div className="p-8 space-y-4">
            <img src={icon3} alt="" />
            <h2 className="font-semibold text-[18px]">Exciting Travel</h2>
            <p>Start and explore a wide range of exciting travel experience.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NeedsTodo;
