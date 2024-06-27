"use client";

import { useEffect, useState } from "react";
import { sqlGetSingleCourse } from "../../../../app/sql/sqlRequests";
import { editCourse } from "../../../../app/actions/editCourse-action";
import EditCourseButton from "../../buttons/EditCourseButton";
import { CreatedCourse } from "../../../../types/types";
import SuccessModal from "./SuccessModal";
import { CourseTransl } from "../../Edit-DelDropdown";

interface CourseEditModal {
  courseId: number;
  setModalIsOpen: (arg: boolean) => void;
  courseTransl: CourseTransl;
}

export default function CourseEditModal({
  courseTransl,
  courseId,
  setModalIsOpen,
}: CourseEditModal) {
  const [course, setCourse] = useState<CreatedCourse>();
  const [successModal, setSuccessModal] = useState(false);

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
        className="mt-5 p-6 w-full lg:w-1/2 bg-white dark:bg-gray-900 flex flex-col gap-6 rounded shadow-md text-lg"
      >
        {successModal && <SuccessModal />}
        <h1 className="text-3xl text-red-400 font-bold mb-4 text-center">
          {courseTransl.editcourse}
        </h1>

        <div className="mb-4 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 dark:text-gray-300 text-start font-bold mb-2"
              htmlFor="name"
            >
              {courseTransl.name}
            </label>
            <input
              defaultValue={course?.name}
              name="name"
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 dark:text-gray-300 text-start font-bold mb-2"
              htmlFor="lessons"
            >
              {courseTransl.lessons}
            </label>
            <input
              defaultValue={course?.lessons}
              name="lessons"
              type="text"
              id="lessons"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 dark:text-gray-300 text-start font-bold mb-2"
              htmlFor="price"
            >
              {courseTransl.price}
            </label>
            <input
              defaultValue={course?.price}
              name="price"
              type="price"
              id="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 dark:text-gray-300 text-start font-bold mb-2"
              htmlFor="duration"
            >
              {courseTransl.editcourse} (5 hours)
            </label>
            <input
              defaultValue={course?.duration}
              name="duration"
              type="duration"
              id="duration"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-300 text-start font-bold mb-2"
            htmlFor="overview"
          >
            {courseTransl.overview}
          </label>
          <textarea
            defaultValue={course?.overview}
            name="overview"
            id="overview"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
        </div>

        <EditCourseButton
          save={courseTransl.save}
          saving={courseTransl.saving}
        />
      </form>
    </div>
  );
}
