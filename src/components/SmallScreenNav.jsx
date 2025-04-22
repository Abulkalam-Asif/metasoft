import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { smallScreenNavItems } from "./Header";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import ThemeToggle from "./themeToggle/ThemeToggle";
import SearchBar from "./SearchBar";

const SmallScreenNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNavState = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-50 w-full lg:hidden animate-fade-in">
      <div className="flex flex-col w-4/5 mx-auto border backdrop-blur-md border-white/50 rounded-3xl px-4 py-5 my-7">
        <div className="flex justify-between items-center">
          <Link className={`dark:brightness-100 brightness-10`} to={"/"}>
            <img src={logo} alt="logo" className="h-6 w-auto" />
          </Link>
          <div>
            <button
              className="hover:cursor-pointer text-black/50 dark:text-white/50 text-2xl"
              onClick={toggleNavState}>
              <IoMenu />
            </button>
          </div>
          <ThemeToggle screen="small" />
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
              className="py-2 relative group hover:text-white/80 transition-colors duration-300 hover:cursor-pointer">
              <Link to={"/"}>{item}</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          <li className="w-full mt-2">
            <SearchBar isSmallScreen={true} />
          </li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default SmallScreenNav;
