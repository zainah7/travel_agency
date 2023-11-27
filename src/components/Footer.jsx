import React from "react";
import Logo from "../image/Logo.png";
import social1 from "../image/Social1.png";
import social2 from "../image/Social2.png";
import social3 from "../image/Social3.png";

const Footer = () => {
  return (
    <>
      <div className="h-screen bg-[#F7F8FC] flex flex-col justify-center p-10">
        <div className="bg-[#FA7436] w-[800px] h-96  flex flex-col  rounded-xl">
          <h1 className="text-[55px] text-center text-[#FEFCFB] p-12">
            Subscribe and get exclusive deals & offer
          </h1>
          <div class="hero bg-gredient-dark h-400px flex flex-col px-2">
            <div class="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
              <form class="flex flex-row">
                <span class="flex items-center bg-[#FEFCFB] rounded rounded-r-none border-0 px-3 font-bold text-grey-100">
                  📓
                </span>{" "}
                git init
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
        <div className="flex justify-around">
          <div className="">
            <img src={Logo} alt="logo" />
            <p className="text-[20px]">
              Book your trip in minute, get full Control for much longer.
            </p>
            <div className="flex">
              <img src={social1} alt="social" />
              <img src={social2} alt="social" />
              <img src={social3} alt="social" />
            </div>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Logistic</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>
          <div>
            <h2>More</h2>
            <ul>
              <li>Press Centre</li>
              <li>Our Blog</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
