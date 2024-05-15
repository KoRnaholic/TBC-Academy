"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import deleteB from "../../public/icons/admin/delete.svg";
import edit from "../../public/icons/admin/edit.svg";
import { DropdownProps } from "../../types/types";

function TestDropdown({
  handleUserDelete,
  handleUserEdit,
  user,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleEdit() {
    setIsOpen(!isOpen);
    handleUserEdit(user);
  }
  function handleDelete() {
    setIsOpen(!isOpen);
    handleUserDelete(user.id);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={toggleDropdown}
        // className="bg-blue-500 text-white px-1 py-2 rounded"
      >
        <svg className="inline-block h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute -left-8 sm:-left-5 top-8 bg-white shadow-md rounded w-20 z-10 ">
          <button
            onClick={handleEdit}
            className="flex w-full items-center justify-start gap-2  px-2 py-2  hover:bg-gray-200 text-orange-400 rounded"
          >
            <Image src={edit} alt="edit" className="cursor-pointer w-[18px] " />
            Edit
          </button>

          <button
            onClick={handleDelete}
            className="flex w-full items-center justify-start gap-1 px-2 py-2 text-red-600  hover:bg-gray-200 rounded"
          >
            <Image
              src={deleteB}
              alt="delete"
              className="cursor-pointer w-[13px] "
            />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default TestDropdown;
