import React from "react";

const login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-[radial-gradient(circle_at_28%_20%,#2F1F6C_0%,black_50%_50%)]">

      <div className="w-80 sm:w-100 rounded-xl bg-gray-900 p-8 text-gray-100">
        <h2 className="text-center text-3xl font-bold text-[#FF7EED]">Login</h2>

        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border border-gray-700 bg-gray-900 py-3 px-4 text-gray-100 outline-none focus:border-purple-400"
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm text-gray-400 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-md border border-gray-700 bg-gray-900 py-3 px-4 text-gray-100 outline-none focus:border-purple-400"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end mt-2 mb-4">
            <a
              href="#"
              className="text-xs text-gray-100 hover:underline decoration-purple-400"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-[#FF7EED] py-3 text-center font-bold text-gray-900"
          >
            Login
          </button>
        </form>

        <div className="flex items-center py-4">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-sm text-gray-400">or continue with</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-gray-100 hover:underline decoration-purple-400"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default login;
