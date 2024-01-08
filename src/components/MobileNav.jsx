import React from "react";
import { IoMdClose } from "react-icons/io";

const MobileNav = ({ mobileNav, setMobileNav }) => {
  return (
    <div
      className={`absolute ${
        !mobileNav && "hidden"
      } bg-white inset-0 w-full h-screen px-4 z-50`}
    >
      <div className="m-4 flex justify-end">
        <IoMdClose size={24} onClick={() => setMobileNav(false)} />
      </div>
      <ul className="flex flex-col items-center gap-4 m-8 ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Destination</li>
        <li className="cursor-pointer">Tour</li>
        <li className="cursor-pointer">Blog</li>
      </ul>
      <div className="flex flex-col gap-4">
        <button className="text-[#FA7436]">Login</button>
        <button className="bg-[#FA7436] px-6 py-2 rounded-md text-[#E5E5E5]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
