import React from "react";
import btn1 from "../image/Btn-1.png";
import btn2 from "../image/Btn-2.png";
import icon from "../image/icon.png";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#F7F8FC] justify-start flex gap-20 p-32">
        <div className="space-y-5">
          <h1 className="text-[64px] font-semibold">
            What people say <span className="text-[#FA7436]">about Us.</span>
          </h1>
          <p className="text-[20px]">
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>
          <div className="flex gap-7">
            <img src={btn1} alt="" />
            <img src={btn2} alt="" />
          </div>
        </div>

        <div className=" relative">
          <img src={icon} alt="" />
          <div className=" bg-[#FEFCFB] shadow-2xl shadow-gray-300 w-[35rem] p-10">
            <p className="text-[20px] z-10">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h1 className="text-[23px] font-semibold pt-14">Mike taylor</h1>
            <p className="text-[20px]">Lahore, Pakistan</p>
          </div>
          <div className="absolute -right-10 -bottom-30  bg-[#F7F8FC] shadow-2xl shadow-gray-300 w-[35rem] h-1/2 p-10">
            <h1 className="text-[23px] font-semibold pt-14">Chris Thomas</h1>
            <p className="text-[20px]">CEO of Red Button</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
