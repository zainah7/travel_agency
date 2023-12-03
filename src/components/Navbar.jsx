import React from "react";
import Logo from "../image/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#FEFCFB] flex justify-around p-8">
      <div>
        <img src={Logo} className="cursor-pointer" alt="logo" />
      </div>
      <div>
        <ul className="flex justify-around gap-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Destination</li>
          <li className="cursor-pointer">Tour</li>
          <li className="cursor-pointer">Blog</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <button className="text-[#FA7436]">Login</button>
        <button className="bg-[#FA7436] px-6 py-2 rounded-md text-[#E5E5E5]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
