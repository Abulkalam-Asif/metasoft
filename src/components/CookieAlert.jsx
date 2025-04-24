import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.svg";


  export const CookieAlert = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className=" fixed bottom-4 left-4 right-4 mx-auto max-w-4xl bg-gray-900 rounded-xl border border-purple-900 shadow-lg p-4 flex items-center justify-between z-50">
      <div className="flex items-center">
        <img src={logo} alt="Site Logo" className="w-10 h-10 mr-3" />
        <p className="text-gray-300 text-sm">
          We use cookies and similar technologies to ensure you get the best
          experience on our website.
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleDismiss}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full px-6 py-2 mr-2 transition-colors"
        >
          GOT IT!
        </button>
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-200 p-1"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

