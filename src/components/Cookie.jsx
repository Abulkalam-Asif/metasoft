import React, { useState, useEffect } from "react";
import { FaCheck, FaX } from "react-icons/fa6";
import logoIconDark from "../assets/images/logoIconDark.svg";
import logoIconLight from "../assets/images/logoIconLight.svg";

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check on component mount if this is the first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem("cookieConsent");
    if (!hasVisited) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Save to localStorage that user has seen and accepted cookies
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleClose = () => {
    // Save to localStorage that user has seen the banner
    localStorage.setItem("cookieConsent", "dismissed");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className=" fixed bottom-6 left-6 right-6 mx-auto max-w-5xl rounded-2xl shadow-xl border border-[#FF7EED] dark:border-white/50 bg-white dark:bg-gray-900 p-4 flex  items-center justify-between gap-4 sm:p-6 sm:gap-8 z-50">
      <div className="flex items-center gap-5 flex-1">
        <div className="flex-shrink-0 ">
          <img
            src={logoIconDark}
            alt="Site Logo"
            className="w-8 h-8 hidden dark:block"
          />
          <img
            src={logoIconLight}
            alt="Site Logo"
            className="w-8 h-8 block dark:hidden"
          />
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-base leading-snug sm:pr-4">
          We use cookies to improve your experience. By using our site, you
          accept our cookie policy.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={handleAccept}
          className="hidden sm:block bg-[#FF7EED] hover:bg-white hover:text-[#FF7EED] dark:bg-white/20 text-white transition-colors duration-300 font-bold rounded-full cursor-pointer px-8 py-2 shadow-md hover:shadow-lg text-base">
          Accept All
        </button>
        <button
          onClick={handleAccept}
          className="block sm:hidden text-[#FF7EED] bg-green-400 hover:text-white hover:bg-[#FF7EED] border dark:border-0 dark:bg-green-700 dark:text-white dark:hover:text-[#FF7EED] dark:hover:bg-white p-2 rounded-full transition-colors cursor-pointer"
          aria-label="Close">
          <FaCheck className="text-base" />
        </button>
        <button
          onClick={handleClose}
          className="text-[#FF7EED] bg-white hover:text-white hover:bg-[#FF7EED] border dark:border-0 dark:bg-white/50 dark:text-white dark:hover:text-[#FF7EED] dark:hover:bg-white p-2 rounded-full transition-colors cursor-pointer"
          aria-label="Close">
          <FaX className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default Cookie;
