import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
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
    <div className=" fixed bottom-6 left-6 right-6 mx-auto max-w-5xl rounded-2xl shadow-xl border border-[#FF7EED] dark:border-white/50 bg-white dark:bg-gray-900 p-6 flex  items-center justify-between gap-8 z-50 h-24">
      <div className="flex items-center gap-5 flex-1">
        <div className="flex-shrink-0 "> 
          <img
            src={logoIconDark}
            alt="Site Logo"
            className="w-14 h-14 hidden dark:block"
          />
          <img
            src={logoIconLight}
            alt="Site Logo"
            className="w-14 h-14 block dark:hidden"
          />
        </div>
        <p className="text-gray-700 dark:text-gray-200 text-base leading-snug pr-4">
          We use cookies to improve your experience. By using our site, you
          accept our cookie policy.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleAccept}
          className="bg-[#FF7EED] hover:bg-white hover:text-[#FF7EED] dark:bg-white/20 text-white transition-colors duration-300 font-bold rounded-full px-8 py-3 cursor-pointer shadow-md hover:shadow-lg text-base"
        >
          Accept All
        </button>
        <button
          onClick={handleClose}
          className="text-[#FF7EED] bg-white hover:text-white hover:bg-[#FF7EED] border dark:border-0 dark:bg-white/50 dark:text-white dark:hover:text-[#FF7EED] dark:hover:bg-white p-3 rounded-full transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default Cookie;
