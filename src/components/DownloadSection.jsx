import React from "react";
import logo from "../assets/images/logo.svg";
import logoPink from "../assets/images/logoPink.svg";
import DownloadButton from "./DownloadButton";

const DownloadSection = () => {
  return (
    <div
      className={`relative min-h-screen flex items-center dark:before:bg-[radial-gradient(circle_at_28%_31%,#2F1F6C_0%,black_70%_50%)] dark:after:bg-[radial-gradient(circle_at_58%_60%,#2F1F6C_0%,black_70%_50%)] before:bg-[radial-gradient(circle_at_28%_31%,#ffe4f9_0%,white_70%_50%)] after:bg-[radial-gradient(circle_at_58%_60%,#ffe4f9_0%,white_70%_50%)] before:absolute before:left-0 before:top-0 before:w-full before:h-1/2 before:z-[0] after:absolute after:right-0 after:bottom-0 after:w-full after:h-1/2 after:z-[0] animate-fade-in md:before:w-1/2 md:before:h-full md:after:w-1/2 md:after:h-full`}>
      <div className="relative flex flex-col justify-center items-center max-w-[1550px] mx-auto w-full z-[1] px-4">
        <img
          src={logo}
          alt="MetaSoft Logo"
          className={`h-16 md:h-24 w-auto mb-8 dark:block hidden`}
        />
        <img
          src={logoPink}
          alt="MetaSoft Logo"
          className={`h-16 md:h-24 w-auto mb-8 block dark:hidden`}
        />

        <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 text-center">
          Ready to Experience{" "}
          <span className="text-[var(--accent-primary)]">MetaSoft</span>?
        </h2>

        <p className="text-[var(--text-secondary)] mb-12 text-lg md:text-xl text-center max-w-2xl">
          Download our app now and unlock a world of possibilities with
          cutting-edge features and seamless integration.
        </p>
        <DownloadButton></DownloadButton>
      </div>
    </div>
  );
};

export default DownloadSection;
