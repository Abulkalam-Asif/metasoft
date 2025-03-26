import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { smallScreenNavItems } from "./Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { FaSearch } from "react-icons/fa";

const SmallScreenNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavState = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-50 w-full lg:hidden animate-fade-in">
      <div className="flex flex-col w-4/5 mx-auto border backdrop-blur-md border-white/50 rounded-3xl px-4 py-5 my-7">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-6 w-auto" />
          </Link>
          <div>
            <button
              className="hover:cursor-pointer text-white/50 text-2xl"
              onClick={toggleNavState}>
              <IoMenu />
            </button>
          </div>
        </div>
        <motion.ul
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          initial={{ height: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-white/50 text-base  overflow-hidden flex flex-col items-start justify-center ${
            isMenuOpen ? "pt-4" : ""
          }`}>
          {smallScreenNavItems.map((item, index) => (
            <li
              key={index}
              className="py-2 hover:text-white/80 transition-colors duration-300 hover:cursor-pointer">
              <Link to={"/"}>{item}</Link>
            </li>
          ))}
          <li className="w-full mt-2">
            <div className="relative w-full">
              <FaSearch className="absolute top-1/2 -translate-y-1/2 left-4 text-[#666b75] text-lg" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className="w-full bg-[#21222d] text-white py-2 pl-12 pr-4 rounded-xl placeholder:text-[#666b75]"
              />
            </div>
          </li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default SmallScreenNav;
