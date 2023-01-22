import React from "react";

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 mt-2 rounded-full text-xs px-4 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};

export default ErrorFallback;
