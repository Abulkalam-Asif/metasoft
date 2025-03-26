import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center before:absolute before:left-0 before:top-0 before:w-full before:h-1/2 before:z-[0] before:bg-[radial-gradient(circle_at_28%_31%,#2F1F6C_0%,black_70%_50%)] after:absolute after:right-0 after:bottom-0 after:w-full after:h-1/2 after:z-[0] after:bg-[radial-gradient(circle_at_58%_60%,#2F1F6C_0%,black_70%_50%)] animate-fade-in md:before:w-1/2 md:before:h-full md:after:w-1/2 md:after:h-full">
      <div className="relative max-w-[1550px] mx-auto w-full z-[1]">
        <div className="flex flex-col gap-12 sm:gap-20 items-center justify-center mx-auto w-4/5 sm:w-3/5">
          <div className="flex flex-wrap text-4xl gap-y-4 gap-x-2 sm:gap-y-8 font-roboto sm:text-5xl md:text-6xl text-white font-bold justify-center  items-center text-center">
            <h1>Your vision,</h1> {""}
            <h1 className="text-[#FF7EED]">Our Code,</h1>
            {""}
            <h1>The perfect road.</h1>
          </div>
          <div className="bg-gradient-to-r from-[#FF7EED]  to-[#d4a7ce]  rounded-full p-0.5">
            <Link
              to={"/"}
              className="group bg-[#19021D] cursor-pointer text-white font-bold flex items-center justify-center gap-4 md:gap-7 py-2 px-8 rounded-full transition-all duration-300 border border-[#FF7EED] text-base md:text-xl ">
              <span className="font-roboto">Check Out</span>
              <span className="group-hover:translate-x-0 -translate-x-3 group-hover:-rotate-45 transition-all duration-300">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
