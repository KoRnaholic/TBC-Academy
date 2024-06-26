"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import deleteB from "../../public/icons/admin/delete.svg";
import edit from "../../public/icons/admin/edit.svg";
import CourseEditModal from "./modals/admin-modals/CourseEditModal";
import DeleteCourseModal from "./modals/admin-modals/DeleteCourseModal";

export interface CourseTransl {
  duration: string;
  price: string;
  edit: string;
  delete: string;
  editcourse: string;
  name: string;
  lessons: string;
  overview: string;
  save: string;
  saving: string;
  sure: string;
  no: string;
  yes: string;
}
export default function EditDeltDropdown({
  courseId,
  courseTransl,
}: {
  courseId: number;
  courseTransl: CourseTransl;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function handleEdit() {
    setIsOpen(!isOpen);
    setModalIsOpen(true);
  }
  function handleDelete() {
    setIsOpen(!isOpen);
    setDeleteModal(true);
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
    <>
      <div ref={dropdownRef} className="relative ">
        <button
          onClick={toggleDropdown}
          // className="bg-blue-500 text-white px-1 py-2 rounded"
        >
          <svg
            className="inline-block h-6 w-6 fill-current "
            viewBox="0 0 24 24"
          >
            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute -left-8 sm:-left-5 top-8 dark:bg-gray-700 bg-white shadow-md rounded z-10 ">
            <button
              onClick={handleEdit}
              className="flex w-full items-center justify-start gap-1  px-2 py-2   hover:bg-gray-200 dark:hover:bg-gray-300 text-orange-400 rounded"
            >
              <Image
                src={edit}
                alt="edit"
                className="cursor-pointer w-[18px] "
              />
              {courseTransl.edit}
            </button>

            <button
              onClick={handleDelete}
              className="flex w-full items-center justify-start gap-2 px-2 py-2 text-red-600 dark:hover:bg-gray-300  hover:bg-gray-200 rounded"
            >
              <Image
                src={deleteB}
                alt="delete"
                className="cursor-pointer w-[13px] "
              />
              {courseTransl.delete}
            </button>
          </div>
        )}
      </div>

      {modalIsOpen && (
        <CourseEditModal
          courseTransl={courseTransl}
          setModalIsOpen={setModalIsOpen}
          courseId={courseId}
        />
      )}

      {deleteModal && (
        <DeleteCourseModal
          courseTransl={courseTransl}
          courseId={courseId}
          setDeleteModal={setDeleteModal}
        />
      )}
    </>
  );
}
