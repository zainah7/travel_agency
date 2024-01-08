import React from "react";
import Blog1 from "../image/blog1.png";
import Blog2 from "../image/blog2.png";
import Blog3 from "../image/blog3.png";
import Blog4 from "../image/blog4.png";

const LatestBlog = () => {
  return (
    <>
      <div className="bg-[#FEFCFB] h-screen flex flex-col mx-auto pt-20 mb-10">
        <h1 className="md:text-[64px] text-3xl font-semibold text-center pb-8">
          Get update with <span className="text-[#FA7436]"> latest blog </span>
        </h1>
        <div className="md:flex justify-center items-center mx-auto md:gap-7 ">
          <div className="md:w-[15%] w-full  space-y-3 ">
            <img src={Blog1} alt="" />
            <p className="font-semibold w-[50%] md:w-full">
              The Amazing Difference a Year of Travelling .
            </p>
            <p className="text-[#999999]">July 27, 2021</p>
          </div>
          <div className="md:w-[15%] w-full space-y-3 ">
            <img src={Blog2} alt="" />
            <p className="font-semibold w-[50%] md:w-full">
              Travel far enough, you meet yourself.
            </p>
            <p className="text-[#999999]">July 27, 2021</p>
          </div>
          <div className="md:w-[15%] w-full space-y-3 ">
            <img src={Blog3} alt="" />
            <p className="font-semibold w-[50%] md:w-full">
              How to Save Money While Visiting Africa .
            </p>
            <p className="text-[#999999]">July 27, 2021</p>
          </div>
          <div className="md:w-[15%] w-full space-y-3 ">
            <img src={Blog4} alt="" />
            <p className="font-semibold w-[50%] md:w-full">
              Reflections on 5 Months of Travel: Time to Hang
            </p>
            <p className="text-[#999999]">July 27, 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
