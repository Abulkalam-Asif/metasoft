
import React from 'react';
import { Link } from 'react-router-dom';

export const AppPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white dark:bg-gray-900 p-4">
      <div className="max-w-md w-full rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-200 to-pink-300 dark:from-pink-500 dark:to-purple-500 p-6 sm:p-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-700 dark:text-pink-100">
            Page is not done yet
          </h1>
          <div className="h-1 w-16 mx-auto my-4 bg-pink-400 dark:bg-pink-200"></div>
          <p className="text-pink-600 dark:text-pink-200 text-sm sm:text-base">
            We're working to complete this section.
          </p>
        </div>
        <div className="bg-pink-50 dark:bg-gray-800 p-4 sm:p-6 text-center">
        <Link
            to={"/"}
           className="px-4 py-2 bg-pink-200 hover:bg-pink-300 dark:bg-pink-600 dark:hover:bg-pink-500 rounded-lg font-medium text-pink-700 dark:text-pink-100 transition duration-200">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}