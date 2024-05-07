"use client";

import { useOptimistic, useState } from "react";
import { addUser, handleUserDelete } from "../../../app/actions";
import TestButton from "../TestButton";
import deleteB from "../../../public/icons/admin/delete.svg";
import add from "../../../public/icons/admin/add.svg";
import edit from "../../../public/icons/admin/edit.svg";
import Image from "next/image";
import UserModal from "./UserModal";
import EditUser from "./EditUser";

export default function AddUser({ users }: any) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const [optimisticUsers, addOptimisticUsers] = useOptimistic(
    users,
    (state, newUser) => {
      return [...state, newUser];
    }
  );

  function handleUserEdit(user) {
    setUser(user);
    setEditIsOpen(true);
  }

  return (
    <>
      {user && (
        <EditUser
          user={user}
          editIsOpen={editIsOpen}
          addUserOptimistic={addOptimisticUsers}
          setEditIsOpen={setEditIsOpen}
        />
      )}
      {optimisticUsers.map((user: any) => {
        return (
          <div
            key={user.id}
            className="bg-[#F28123] w-full text-white  px-3 py-2 flex justify-between gap-12 rounded-lg"
          >
            <div className=" gap-10 flex justify-center">
              <div className="flex flex-col ">
                <label>Name:</label>
                <span>{user.name}</span>
              </div>
              <div className="flex flex-col ">
                <label>Email:</label>
                <span>{user.email}</span>
              </div>
              <div className="flex flex-col">
                <label>Age:</label>
                <span>{user.age}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button>
                <Image
                  onClick={() => handleUserDelete(user.id)}
                  src={deleteB}
                  alt="delete"
                  className="cursor-pointer w-[13px] invert"
                />
              </button>
              <button onClick={() => handleUserEdit(user)}>
                <Image
                  src={edit}
                  alt="edit"
                  className="cursor-pointer w-[18px] invert"
                />
              </button>
            </div>

            {/* <TestButton handleUserDelete={handleUserDelete} id={user.id} /> */}
          </div>
        );
      })}
      <div
        onClick={() => setModalIsOpen(true)}
        className="flex justify-center text-center min-w-60 hover:bg-[#d2701f] hover:scale-105  transition-transform gap-2 py-4 rounded-xl text-white bg-[#F28123] cursor-pointer"
      >
        <Image src={add} alt="add" className="cursor-pointer w-[20px] invert" />
        <div className="text-xl ">Add User</div>
      </div>
      <UserModal
        modalIsOpen={modalIsOpen}
        addUserOptimistic={addOptimisticUsers}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}
