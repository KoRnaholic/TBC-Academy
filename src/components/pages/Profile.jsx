import React from "react";
import Button from "../UI/Button";

export default function Profile(props) {
  return (
    <>
      <div className="bg-gradient-to-r lg:mt-8  flex flex-col items-center justify-center">
        <div className="bg-white px-4 md:px-8 rounded-lg shadow-lg w-full md:w-1/2">
          <div>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Contact Us
            </h1>
            <div className="mb-4 flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 md:mb-0">
                <h2 className="text-xl font-semibold">Name</h2>
                <p className="text-gray-700">John</p>
              </div>
              <div className="mb-2 md:mb-0">
                <h2 className="text-xl font-semibold">Last Name </h2>
                <p className="text-gray-700">Smith</p>
              </div>
              <div className="mb-2 md:mb-0">
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-700">JohnSmith@example.com</p>
              </div>
            </div>
          </div>

          <form className="mb-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                id="name"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="email"
                id="email"
                name="confirm-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
              />
            </div>

            <Button
              type="submit"
              styles="w-full bg-slate-700 text-white py-2 px-4 rounded-md hover:bg-slate-800 focus:outline-none"
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
