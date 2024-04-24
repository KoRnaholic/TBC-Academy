"use client";

import React from "react";

export default function ProductLoading() {
  return (
    <div className="mt-20">
      <div className="max-w-4xl mx-auto h-3/4 rounded overflow-hidden shadow-lg">
        <div className="w-1/3 float-left">
          <div className="w-full h-64 bg-gray-200 animate-pulse"></div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-full h-16 bg-gray-300 rounded cursor-pointer animate-pulse"
              ></div>
            ))}
          </div>
        </div>
        <div className="w-2/3 float-left h-full px-6 py-4">
          <div className="font-bold text-xl mb-2 bg-gray-300 h-8 animate-pulse"></div>
          <div className="text-gray-700 text-base bg-gray-300 h-20 animate-pulse"></div>
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold text-gray-900 bg-gray-300 w-20 h-6 animate-pulse"></span>
            <span className="text-sm text-gray-600 bg-gray-300 w-20 h-6 animate-pulse"></span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-600 mr-1"></span>
            <div className="Stars bg-gray-300 w-20 h-6 animate-pulse"></div>
            <span className="ml-1 bg-gray-300 w-6 h-6 animate-pulse"></span>
          </div>
          <div className="mt-4">
            <span className="text-sm text-gray-600 bg-gray-300 w-32 h-6 animate-pulse"></span>
          </div>
          <div className="px-4 pt-4 pb-2">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 w-20 h-6 animate-pulse"></span>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 w-20 h-6 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
