import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const DownloadButton = () => {
  return (
    <button className="group bg-gradient-to-r from-[var(--accent-primary)] to-[#d4a7ce] p-0.5 rounded-full hover:shadow-[var(--accent-primary)]/20 transition-all duration-300">
      <div
        className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg md:text-xl transition-colors duration-300 dark:bg-[var(--bg-secondary)] dark:text-[var(--text-primary)] dark:hover:bg-[#310F2D] dark:group-hover:text-pink-400 bg-white text-[var(--text-primary)]  group-hover:text-pink-400`}>
        <span>Download MetaSoft</span>
        <span className="group-hover:translate-y-1 transition-transform duration-300">
          <FaArrowDown />
        </span>
      </div>
    </button>
  );
};

export default DownloadButton;
