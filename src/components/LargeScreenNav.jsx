import React from "react";
import { navLinks } from "./Header";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import logo from "../assets/images/logo.svg";
import { FaSearch } from "react-icons/fa";

const LargeScreenNav = () => {
  return (
    <nav className="fixed top-0 z-50 w-full font-roboto whitespace-nowrap animate-fade-in">
      <div className="max-w-[1550px] backdrop-blur-md  hidden lg:flex gap-8 w-4/5 mx-auto border items-center justify-between text-white border-white/50 rounded-3xl px-6 py-4 my-5">
        <div className="w-max flex gap-x-6 items-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-8 w-auto" />
          </Link>
          <div className="relative">
            <FaSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-[#666b75] text-lg" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="w-full bg-[#21222d] text-white py-1 pl-12 pr-4 rounded-xl placeholder:text-[#666b75]"
            />
          </div>
          <ul className="flex gap-4">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index}>
                <li className="text-white/50 hover:text-white transition-colors duration-300 hover:cursor-pointer">
                  {link.text}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <ul className="flex gap-4 font-medium text-sm">
          <li>
            <Link
              to={"/"}
              className="flex items-center justify-center gap-3 cursor-pointer bg-[#3f3f46]  transition-colors duration-300  py-1.5 px-4 border-2 border-[#71717a] text-white text-sm rounded-full  hover:text-[#FF7EED] hover:bg-[#310F2D] hover:border-[#FF7EED]">
              <span className="text-base"><IoPerson /></span>
              <span>Log in</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LargeScreenNav;
