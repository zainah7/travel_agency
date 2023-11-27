import React from "react";
import Logo from "../image/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#FEFCFB] flex justify-around p-8">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <ul className="flex justify-around gap-8">
          <li>Home</li>
          <li>About</li>
          <li>Destination</li>
          <li>Tour</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <button className="text-[#FA7436]">Login</button>
        <button className="bg-[#FA7436] p-2 h-10 text-[#E5E5E5]">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
