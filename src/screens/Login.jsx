import React from "react";

const login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[radial-gradient(circle_at_28%_20%,#ffe4f9_0%,white_70%_50%)] dark:bg-[radial-gradient(circle_at_28%_20%,#2F1F6C_0%,black_50%_50%)]">
      <div className="w-80 sm:w-100 rounded-xl p-8 bg-white text-gray-900 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-center text-3xl font-bold text-[#FF7EED]">Login</h2>

        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border bg-white border-gray-300 py-3 px-4 text-gray-900 outline-none focus:border-purple-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md border bg-white border-gray-300 py-3 px-4 text-gray-900 outline-none focus:border-purple-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end mt-2 mb-4">
            <a
              href="#"
              className="text-xs text-purple-700 hover:underline decoration-purple-400 dark:text-gray-100">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="relative w-full cursor-pointer py-3 text-center font-bold rounded-lg border-2 border-[#FF7EED] text-gray-900 before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:h-full before:w-full before:bg-[#FF7EED] before:rounded-md hover:before:w-0 before:transition-all before:duration-300 dark:hover:text-white">
            <span className="relative z-[1]">Login</span>
          </button>
        </form>

        <div className="flex items-center py-4">
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
          <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
            or continue with
          </span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-700 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-purple-700 hover:underline decoration-purple-400 dark:text-gray-100">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default login;
