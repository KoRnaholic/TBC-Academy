"use client";

import { useEffect, useState } from "react";
import { sqlGetSingleCourse } from "../../../../app/sql/sqlRequests";
import { editCourse } from "../../../../app/actions/editCourse-action";
import EditCourseButton from "../../buttons/EditCourseButton";
import { CreatedCourse } from "../../../../types/types";
import SuccessModal from "./SuccessModal";

interface CourseEditModal {
  courseId: number;
  setModalIsOpen: (arg: boolean) => void;
}

export default function CourseEditModal({
  courseId,
  setModalIsOpen,
}: CourseEditModal) {
  const [course, setCourse] = useState<CreatedCourse>();
  const [successModal, setSuccessModal] = useState(false);

  console.log(successModal);

  const editCourseBind = editCourse.bind(null, courseId);

  useEffect(() => {
    async function getCourse() {
      const data = await sqlGetSingleCourse(courseId);

      setCourse(data[0]);
    }

    getCourse();
  }, []);

  return (
    <div
      onClick={() => setModalIsOpen(false)}
      className="min-w-screen h-screen fixed inset-0 px-5 flex justify-center items-center z-50 bg-black bg-opacity-80"
    >
      <form
        onClick={(e) => e.stopPropagation()}
        action={async (formData: FormData) => {
          setSuccessModal(true);
          await editCourseBind(formData);

          setModalIsOpen(false);
        }}
        className="mt-5 p-6 w-full  lg:w-1/2 bg-white flex flex-col gap-6 rounded shadow-md text-lg"
      >
        {successModal && <SuccessModal />}
        <h1 className="text-3xl text-red-400 font-bold mb-4 text-center">
          Edit Course
        </h1>

        <div className="mb-4 flex flex-col md:flex-row  gap-6">
          <div className="md:w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 text-start  font-bold mb-2"
              htmlFor="name"
            >
              Course Name
            </label>
            <input
              defaultValue={course?.name}
              name="name"
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 text-start  font-bold mb-2"
              htmlFor="lessons"
            >
              Lessons
            </label>
            <input
              defaultValue={course?.lessons}
              name="lessons"
              type="text"
              id="lessons"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col md:flex-row gap-6">
          <div className=" md:w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 text-start  font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              defaultValue={course?.price}
              name="price"
              type="price"
              id="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 text-start  font-bold mb-2"
              htmlFor="duration"
            >
              Duration (5 hours)
            </label>
            <input
              defaultValue={course?.duration}
              name="duration"
              type="duration"
              id="duration"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-start  font-bold mb-2"
            htmlFor="overview"
          >
            Overview
          </label>
          <textarea
            defaultValue={course?.overview}
            name="overview"
            id="overview"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </div>

        <EditCourseButton />
      </form>
    </div>
  );
}
