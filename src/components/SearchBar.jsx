import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import TypewriterEffect from "./TypewriterEffect";

const SearchBar = ({ isSmallScreen = false }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <FaSearch
        className={`absolute top-1/2 -translate-y-1/2 left-2 z-[1] dark:text-[#666b75] text-[#ffffff] text-lg xl:left-4`}
      />
      <div className="relative min-w-[160px]">
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full dark:bg-[#21222d] dark:placeholder:text-[#666b75] bg-[#848485] placeholder:text-[#ffffff] text-white ${
            isSmallScreen ? "py-2" : "py-1"
          } pl-8 xl:pl-12 pr-4 rounded-xl`}
        />
        {!isFocused && !searchValue && (
          <div
            className={`absolute inset-0 pointer-events-none flex items-center pl-8 xl:pl-12 `}>
            <span className={`text-sm dark:text-[#666b75] text-[#ffffff]`}>
              Search for <TypewriterEffect />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
