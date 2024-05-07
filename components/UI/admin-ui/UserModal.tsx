"use client";

import { useState } from "react";
import { addUser } from "../../../app/actions";

export default function UserModal({
  modalIsOpen,
  setModalIsOpen,
  addUserOptimistic,
}) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {modalIsOpen && (
        <div className="fixed  top-0 left-0 z-50 w-full h-full bg-black bg-opacity-55  flex items-center justify-center">
          <div className=" mt-4 w-1/2 h-2/3 p-4 border border-gray-300 bg-white flex flex-col justify-center gap-10 rounded-md shadow-md">
            <div className="text-right mb-16">
              <button onClick={() => setModalIsOpen(false)}>X</button>
            </div>
            <h2 className="text-4xl font-semibold mb-4 text-center text-orange-500">
              Create User Information
            </h2>

            <form
              action={async (formData: FormData) => {
                setIsLoading(true);
                const user = {
                  name: formData.get("name"),
                  email: formData.get("email"),
                  age: formData.get("age"),
                };
                addUserOptimistic(user);
                await addUser(formData);
                setIsLoading(false);
                setModalIsOpen(false);
              }}
              className="flex flex-col gap-3 text-orange-500"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block font-medium mb-1">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  // value={formData.age}
                  // onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                />
              </div>
              <div className="mb-4 flex flex-col gap-8  items-center">
                <div className="w-full">
                  <label htmlFor="email" className="block font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 w-1/3 py-3  hover:bg-orange-600 text-white font-semibold  px-4 rounded-md"
                >
                  {isLoading ? "Creating..." : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
