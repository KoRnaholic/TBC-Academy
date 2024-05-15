"use client";

import { useOptimistic, useState } from "react";
import { handleUserDelete } from "../../../app/actions";
import add from "../../../public/icons/admin/add.svg";
import Image from "next/image";

import UserModal from "./UserModal";
import EditUser from "./EditUser";
import { User } from "../../../types/types";
import TestDropdown from "../Edit-DelDropdown";

export default function AddUser({ users }: { users: User[] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const [optimisticUsers, addOptimisticUsers] = useOptimistic(
    users,
    (state, newUser: User) => {
      return [...state, newUser];
    }
  );

  function handleUserEdit(user: User) {
    setUser(user);
    setEditIsOpen(true);
  }

  return (
    <>
      {user && (
        <EditUser
          user={user}
          editIsOpen={editIsOpen}
          setEditIsOpen={setEditIsOpen}
        />
      )}
      <div className="flex justify-center px-3 pt-16 pb-10">
        <table className="w-full md:w-1/2 sm:w-2/3 lg:w-1/3">
          <thead className="bg-orange-500">
            <tr>
              <th className=" px-2 md:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className=" px-2 md:px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Email
              </th>
              <th className=" px-2 md:px-6 pr-0 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Age
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-orange-400 divide-gray-200">
            {optimisticUsers.map((user: User, idx) => {
              return (
                <tr key={idx}>
                  <td className=" px-2 md:px-6 py-4 whitespace-nowrap">
                    {user.name}
                  </td>
                  <td className=" px-2 md:px-6 py-4 whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className=" px-2 md:px-6 py-4 md:pr-2 whitespace-nowrap flex justify-between gap-4">
                    {user.age}
                    <TestDropdown
                      handleUserDelete={handleUserDelete}
                      handleUserEdit={handleUserEdit}
                      user={user}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center pb-10">
        <div
          onClick={() => setModalIsOpen(true)}
          className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg hover:-translate-y-1 transition-all text-white cursor-pointer"
        >
          <Image
            src={add}
            alt="add"
            className="cursor-pointer w-[20px] invert"
          />
          <div className="text-xl ">Add User</div>
        </div>
      </div>
      <UserModal
        modalIsOpen={modalIsOpen}
        addUserOptimistic={addOptimisticUsers}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}
