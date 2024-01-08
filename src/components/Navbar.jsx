import React, { useState } from "react";
import Logo from "../image/Logo.png";
import { IoMdMenu } from "react-icons/io";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="bg-[#FEFCFB] flex justify-between relative md:p-8 p-4">
      <MobileNav mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <div>
        <img src={Logo} className="cursor-pointer" alt="logo" />
      </div>

      <ul className="md:flex hidden justify-around md:gap-8">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Destination</li>
        <li className="cursor-pointer">Tour</li>
        <li className="cursor-pointer">Blog</li>
      </ul>

      <div className="md:flex hidden md:gap-8">
        <button className="  text-[#FA7436]">Login</button>
        <button className="bg-[#FA7436] px-6 py-2 rounded-md text-[#E5E5E5]">
          Sign up
        </button>
      </div>
      <button className="md:hidden" onClick={() => setMobileNav(true)}>
        <IoMdMenu size={24} />
      </button>
    </header>
  );
};

export default Navbar;
