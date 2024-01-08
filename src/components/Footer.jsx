import React from "react";
import Logo from "../image/Logo.png";
import social1 from "../image/Social1.png";
import social2 from "../image/Social2.png";
import social3 from "../image/Social3.png";

const Footer = () => {
  return (
    <>
      <div className=" relative bg-[#F7F8FC] flex flex-col justify-center md:p-10">
        <div className=" md:absolute md:right-72 md:-top-48 bg-[#FA7436] md:w-[1000px] md:h-96 w-full h-full  flex flex-col p-12 md:rounded-xl">
          <h1 className="md:text-[55px] text-center md:w-[75%] mx-auto text-[#FEFCFB] ">
            Subscribe and get exclusive deals & offer
          </h1>
          <div class="hero bg-gredient-dark h-400px flex flex-col px-2">
            <div class="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
              <form class="flex flex-row">
                <span class="flex items-center bg-[#FEFCFB] rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
                  📓
                </span>

                <input
                  class="h-16 bg-[#FEFCFB] text-grey-darker py-2 font-normal text-grey-darkest border border-[#FEFCFB]  w-full  px-2 outline-none text-lg text-gray-600"
                  type="text"
                  placeholder="What do you want to learn?"
                ></input>
                <span class="flex items-center bg-[#FEFCFB] rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
                  <button class="bg-gredient-dark bg-[#FA7436] hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded">
                    Search
                  </button>
                </span>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-20 md:justify-around mx-auto md:mt-64">
          <div className="space-y-5">
            <img src={Logo} alt="logo" />
            <p className="text-[20px] w-[60%] ">
              Book your trip in minute, get full Control for much longer.
            </p>
            <div className="flex">
              <img src={social1} className="cursor-pointer" alt="social" />
              <img src={social2} className="cursor-pointer" alt="social" />
              <img src={social3} className="cursor-pointer" alt="social" />
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="font-semibold">Company</h2>
            <ul className=" space-y-5 text-[#666666]">
              <li>About</li>
              <li>Careers</li>
              <li>Logistic</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="font-semibold">Contact</h2>
            <ul className="space-y-5 text-[#666666]">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h2 className="font-semibold">More</h2>
            <ul className="space-y-5 text-[#666666]">
              <li>Press Centre</li>
              <li>Our Blog</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 mx-24" />

        <div className="flex justify-around text-[#666666]">
          <p>Copyright, Trabook 2022. All rights reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
