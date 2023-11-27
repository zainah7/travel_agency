import React from "react";
import Blog1 from "../image/blog1.png";
import Blog2 from "../image/blog2.png";
import Blog3 from "../image/blog3.png";
import Blog4 from "../image/blog4.png";

const LatestBlog = () => {
  return (
    <>
      <div className="bg-[#FEFCFB] h-screen flex flex-col pt-20">
        <h1 className="text-[64px] font-semibold text-center pb-8">
          Get update with <span className="text-[#FA7436]"> latest blog </span>
        </h1>
        <div className="flex justify-center gap-9">
          <div>
            <img src={Blog1} alt="" />
            <p>The Amazing Difference a Year of Travelling .</p>
            <p>July 27, 2021</p>
          </div>
          <div>
            <img src={Blog2} alt="" />
            <p>Travel far enough, you meet yourself.</p>
            <p>July 27, 2021</p>
          </div>
          <div>
            <img src={Blog3} alt="" />
            <p>How to Save Money While Visiting Africa .</p>
            <p>July 27, 2021</p>
          </div>
          <div>
            <img src={Blog4} alt="" />
            <p>Reflections on 5 Months of Travel: Time to Hang</p>
            <p>July 27, 2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
