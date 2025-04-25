import React, { useEffect } from "react";
import { navLinks } from "./Header";
import { Link, useLocation } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import logo from "../assets/images/logo.svg";
import logoLight from "../assets/images/logoLight.svg";
import ThemeToggle from "./themeToggle/ThemeToggle";
import SearchBar from "./SearchBar";

const LargeScreenNav = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="hidden lg:block">
      <nav
        className={`fixed dark:text-white text-black top-0 z-50 w-full font-roboto whitespace-nowrap animate-fade-in`}>
        <div className="max-w-[1550px] backdrop-blur-md flex gap-8 w-4/5 mx-auto border items-center justify-between text-[var(--text-primary)] border-[var(--text-primary)]/50 rounded-3xl px-6 py-4 my-5 bg-[#FF7EED] dark:bg-transparent">
          <div className="w-max flex gap-x-6 items-center">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="h-8 w-auto hidden dark:block"
              />
              <img
                src={logoLight}
                alt="logo"
                className="h-8 w-auto block dark:hidden"
              />
            </Link>

            <div className="relative w-48">
              <SearchBar
                darkMode={location.pathname === "/" ? true : false}
                isSmallScreen={false}
              />
            </div>
            <ul className="flex gap-4">
              {navLinks.map((link, index) => (
                <Link to={link.to} key={index} className="group relative">
                  <li
                    className={`dark:text-white/50 dark:hover:text-white text-black hover:text-gray-900 transition-colors duration-300 hover:cursor-pointer`}>
                    {link.text}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <ul className="flex gap-4 font-medium items-center text-sm">
            <li>
              <Link
                to={"/login"}
                className="flex items-center justify-center gap-3 cursor-pointer bg-[#3f3f46]  transition-colors duration-300  py-1.5 px-4 border-2 border-[#71717a] text-white text-sm rounded-full  hover:text-[#FF7EED] hover:bg-[#310F2D] hover:border-[#FF7EED]">
                <span className="text-base">
                  <IoPerson />
                </span>
                <span>Log in</span>
              </Link>
            </li>
            <li>
              <ThemeToggle screen="large" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LargeScreenNav;
