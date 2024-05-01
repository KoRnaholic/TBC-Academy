"use client";

import React from "react";

export default function ProductLoading() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center m-5 sm:m-20 h-3/4 sm:gap-12 sm:p-20">
      <div className="w-full lg:w-96 sm:h-96 shadow-2xl rounded-md bg-gray-200 animate-pulse"></div>
      <div className="h-full flex flex-col gap-5">
        <div className="h-full flex flex-col gap-3 py-4">
          <div className="font-bold mb-2 text-2xl bg-gray-300 h-8 animate-pulse"></div>
          <span className="font-bold text-gray-900 dark:text-white text-2xl bg-gray-300 h-8 animate-pulse"></span>
          <p className="text-gray-500 text-base w-full lg:w-96 bg-gray-300 h-20 animate-pulse"></p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-600 dark:text-white bg-gray-300 h-6 w-1/3 animate-pulse"></span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-600 dark:text-white mr-1"></span>
            <div className="Stars bg-gray-300 w-20 h-6 animate-pulse"></div>
            <span className="ml-1 bg-gray-300 w-6 h-6 animate-pulse"></span>
          </div>
          <div className="mt-4">
            <span className="text-sm text-gray-600 dark:text-white bg-gray-300 w-32 h-6 animate-pulse"></span>
          </div>
          <div className="flex gap-2">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 w-20 h-6 animate-pulse"></span>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 w-20 h-6 animate-pulse"></span>
          </div>
          <div className="mt-3">
            <button className="bg-gray-300 w-32 h-10 animate-pulse rounded-full"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
