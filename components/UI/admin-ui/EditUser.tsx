"use client";

import { useEffect, useState } from "react";
import { addUser, editUser } from "../../../app/actions";

export default function EditUser({
  user,
  editIsOpen,
  setEditIsOpen,
  addUserOptimistic,
}) {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [email, setEmail] = useState(user.email);
  const [id, setId] = useState(user.id);
  const editUserWithId = editUser.bind(null, id);

  useEffect(() => {
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
    setId(user.id);
  }, [user]);

  function handleUserEdit(formData: FormData) {
    editUserWithId(formData);
    setEditIsOpen(false);
  }

  return (
    <>
      {editIsOpen && (
        <div className="fixed  top-0 left-0 z-50 w-full h-full bg-black bg-opacity-55  flex items-center justify-center">
          <div className=" mt-4 w-1/2 h-2/3 p-4 border border-gray-300 bg-white flex flex-col justify-center gap-10 rounded-md shadow-md">
            <div className="text-right mb-16 text-black">
              <button onClick={() => setEditIsOpen(false)}>X</button>
            </div>
            <h2 className="text-4xl font-semibold mb-4 text-center text-orange-500">
              Edit User Information
            </h2>

            <form
              action={handleUserEdit}
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 w-1/3 py-3  hover:bg-orange-600 text-white font-semibold  px-4 rounded-md"
                >
                  Edit User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
