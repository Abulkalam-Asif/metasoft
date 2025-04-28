import React from "react";
import { Link } from "react-router-dom";

const PageNotDone = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen w-full bg-white dark:bg-gray-900 p-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 dark:text-pink-100">
          Page is not done yet
        </h1>
        <div className="h-1 w-16 mx-auto my-4 bg-pink-400 dark:bg-pink-200"></div>
        <Link
          to={"/"}
          className="px-4 py-2 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-500 rounded-lg font-medium text-pink-700 dark:text-pink-100 transition duration-200">
          Return Home
        </Link>
      </div>
    </>
  );
};

export default PageNotDone;
