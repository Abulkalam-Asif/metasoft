import React, { useEffect } from "react";
import { navLinks } from "./Header";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images/logo.svg";
import ThemeToggle from "./themeToggle/ThemeToggle";

const LargeScreenNav = () => {
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");

    if (isHomePage) {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <div>
      <nav
        className={`fixed ${
          isDarkMode ? "text-white" : "text-black"
        } top-0 z-50 w-full font-roboto whitespace-nowrap animate-fade-in`}>
        <div className="max-w-[1550px] backdrop-blur-md hidden lg:flex gap-8 w-4/5 mx-auto border items-center justify-between text-[var(--text-primary)] border-[var(--text-primary)]/50 rounded-3xl px-6 py-4 my-5">
          <div className="w-max flex gap-x-6 items-center">
            <Link
              className={`${isDarkMode ? "brightness-100" : "brightness-10"}`}
              to={"/"}>
              <img src={logo} alt="logo" className="h-8 w-auto" />
            </Link>

            <div className="relative">
              <FaSearch
                className={`absolute top-1/2 -translate-y-1/2 left-4  ${
                  isDarkMode ? "text-[#666b75]" : "text-[#ffffff]"
                }  text-lg`}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
                className={`w-full ${
                  isDarkMode
                    ? "bg-[#21222d] placeholder:text-[#666b75]"
                    : "bg-[#848485] placeholder:text-[#ffffff]"
                } text-white py-1 pl-12 pr-4 rounded-xl `}
              />
            </div>
            <ul className="flex gap-4">
              {navLinks.map((link, index) => (
                <a
                  href={isHomePage ? link.href : "/" + link.href}
                  key={index}
                  onClick={(e) => handleNavClick(e, link.href)}>
                  <li
                    className={`hover:underline underline-offset-4 ${
                      isDarkMode
                        ? "text-white/50 hover:text-white"
                        : "text-black hover:text-gray-900"
                    } transition-colors duration-300 hover:cursor-pointer`}>
                    {link.text}
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <ul className="flex gap-4 font-medium text-sm">
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
          </ul>
        </div>
      </nav>
      <ThemeToggle />
    </div>
  );
};

export default LargeScreenNav;
