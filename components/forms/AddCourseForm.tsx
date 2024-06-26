"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";

import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCourseButton from "../UI/buttons/AddCourseButton";
import { uploadCourse } from "../../app/actions";

// export const metadata = {
//   title: "DreamLMS - Add Course",
//   description:
//     "Instructors can add new courses to DreamLMS and share their expertise with students.",
//   keywords:
//     "add course, instructors, DreamLMS, online learning, course creation, education",
// };

const initialState = {
  name: "",
  lessons: "",
  price: "",
  duration: "",
  overview: "",
  course_link: "",
  requirements: "",
  audience: "",
  what_to_learn: "",
  errors: {
    name: [""],
    price: [""],
    duration: [""],
    lessons: [""],
    overview: [""],
    course_link: [""],
    requirements: [""],
    audience: [""],
    what_to_learn: [""],
  },
  success: false,
};
interface AddFormTransl {
  addFormTransl: {
    upload: string;
    choose: string;
    button: string;
    link: string;
    name: string;
    lessons: string;
    price: string;
    duration: string;
    audience: string;
    requirements: string;
    learn: string;
    overview: string;
    add: string;
    checking: string;
    success: string;
    goto: string;
  };
}
export default function AddCourseForm({ addFormTransl }: AddFormTransl) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(uploadCourse, initialState);
  const errors = state.errors;
  if (state.success === true) {
    formRef.current?.reset();
  }
  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        className="mt-5 p-6 bg-white dark:bg-gray-800 border dark:border-gray-500 flex flex-col gap-6 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-[#002058] dark:text-white">
          {addFormTransl.upload}
        </h1>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p className="text-gray-700 dark:text-gray-400">
              {" "}
              {addFormTransl.choose}
            </p>
            <div className="relative group">
              <input
                type="file"
                id="image"
                name="image"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <button
                type="button"
                className="w-32 text-green-500 border font-thin border-green-500 cursor-pointer group-hover:text-white group-hover:bg-green-500 py-2 px-4 rounded transition-all duration-300"
              >
                {addFormTransl.button}
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 mt-4">
            <label
              className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
              htmlFor="link"
            >
              {addFormTransl.link}
            </label>
            <input
              name="link"
              type="text"
              id="link"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600"
            />
            {errors.course_link && (
              <label className="ml-1 font-sans text-red-500">
                {errors.course_link[0] ? errors.course_link[0] + " *" : ""}
              </label>
            )}
          </div>
        </div>
        <div className="mb-4 flex gap-6">
          <div className="w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
              htmlFor="name"
            >
              {addFormTransl.name}
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600"
            />
            {errors.name && (
              <label className="ml-1 font-sans text-red-500">
                {errors.name[0] ? errors.name[0] + " *" : ""}
              </label>
            )}
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
              htmlFor="lessons"
            >
              {addFormTransl.lessons}
            </label>
            <input
              name="lessons"
              type="text"
              id="lessons"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600"
            />
            {errors.lessons && (
              <label className="ml-1 font-sans text-red-500">
                {errors.lessons[0] ? errors.lessons[0] + " *" : ""}
              </label>
            )}
          </div>
        </div>
        <div className="mb-4 flex gap-6">
          <div className="w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
              htmlFor="price"
            >
              {addFormTransl.price}
            </label>
            <input
              name="price"
              type="price"
              id="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600"
            />
            {errors.price && (
              <label className="ml-1 font-sans text-red-500">
                {errors.price[0] ? errors.price[0] + " *" : ""}
              </label>
            )}
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
              htmlFor="duration"
            >
              {addFormTransl.duration}
            </label>
            <input
              name="duration"
              type="duration"
              id="duration"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600"
            />
            {errors.duration && (
              <label className="ml-1 font-sans text-red-500">
                {errors.duration[0] ? errors.duration[0] + " *" : ""}
              </label>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
            htmlFor="audience"
          >
            {addFormTransl.audience}
          </label>
          <input
            name="audience"
            type="audience"
            id="audience"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600"
          />
          {errors.audience && (
            <label className="ml-1 font-sans text-red-500">
              {errors.audience[0] ? errors.audience[0] + " *" : ""}
            </label>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
            htmlFor="requirements"
          >
            {addFormTransl.requirements}
          </label>
          <input
            name="requirements"
            type="requirements"
            id="requirements"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600"
          />
          {errors.requirements && (
            <label className="ml-1 font-sans text-red-500">
              {errors.requirements[0] ? errors.requirements[0] + " *" : ""}
            </label>
          )}
        </div>
        <div className="w-full flex flex-col gap-2">
          <label
            className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
            htmlFor="learn"
          >
            {addFormTransl.learn}
          </label>
          <input
            name="learn"
            type="learn"
            id="learn"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600"
          />
          {errors.what_to_learn && (
            <label className="ml-1 font-sans text-red-500">
              {errors.what_to_learn[0] ? errors.what_to_learn[0] + " *" : ""}
            </label>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-400 font-bold mb-2"
            htmlFor="overview"
          >
            {addFormTransl.overview}
          </label>
          <textarea
            name="overview"
            id="overview"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 leading-tight focus:outline-none focus:border-gray-700 dark:focus:border-gray-600 h-32"
          ></textarea>
          {errors.overview && (
            <label className="ml-1 font-sans text-red-500">
              {errors.overview[0] ? errors.overview[0] + " *" : ""}
            </label>
          )}
        </div>

        <AddCourseButton
          add={addFormTransl.add}
          checking={addFormTransl.checking}
        />
      </form>

      {state.success && (
        <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
            <div className="text-center p-5 flex-auto justify-center">
              <CheckCircleIcon
                className=" font-size-lg text-green-500"
                fontSize="large"
              />
              <h2 className="text-2xl text-green-500   py-4">
                {addFormTransl.success}
              </h2>
            </div>
            <div className=" text-center space-x-4 md:block">
              <Link href="/courses">
                <button
                  className="mb-2 md:mb-0 bg-[#FF6575]  border border-[#FF6575] px-5 py-2
           font-medium tracking-wider text-white rounded-full hover:bg-[#f55565]"
                >
                  {addFormTransl.goto}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
