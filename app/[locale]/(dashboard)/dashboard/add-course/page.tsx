"use client";
import { useFormState } from "react-dom";
import { uploadImage } from "../../../../actions";
import { useRef } from "react";
import AddCourseButton from "../../../../../components/UI/buttons/AddCourseButton";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const initialState = {
  name: "",
  lessons: "",
  price: "",
  duration: "",
  overview: "",
  errors: {
    name: [""],
    price: [""],
    duration: [""],
    lessons: [""],
    overview: [""],
  },
  success: false,
};

export default function AddCoursePage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(uploadImage, initialState);
  const errors = state.errors;
  if (state.success === true) {
    formRef.current?.reset();
  }
  console.log(state);
  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        className="mt-5 p-6 bg-white flex flex-col gap-6 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Upload Course Image
        </h1>
        {/* <div className="flex justify-between items-center ">
          <p>Choose Image</p>
          <div className="relative group">
            <input
              type="file"
              id="image"
              name="image"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              required
            />
            <button
              type="button"
              className="w-32  text-green-500  border font-thin border-green-500 cursor-pointer
               group-hover:text-white group-hover:bg-green-500  py-2 px-4 rounded transition-all duration-300"
            >
              Upload
            </button>
          </div>
        </div> */}
        <div className="mb-4 flex  gap-6">
          <div className="w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700  font-bold mb-2"
              htmlFor="name"
            >
              Course Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <label className="ml-1 font-sans text-red-500">
                {errors.name[0] ? errors.name[0] + " *" : ""}
              </label>
            )}
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700  font-bold mb-2"
              htmlFor="lessons"
            >
              Lessons
            </label>
            <input
              name="lessons"
              type="text"
              id="lessons"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.lessons && (
              <label className="ml-1 font-sans text-red-500">
                {errors.lessons[0] ? errors.lessons[0] + " *" : ""}
              </label>
            )}
          </div>
        </div>
        <div className="mb-4 flex  gap-6">
          <div className=" w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700  font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              name="price"
              type="price"
              id="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.price && (
              <label className="ml-1 font-sans text-red-500">
                {errors.price[0] ? errors.price[0] + " *" : ""}
              </label>
            )}
          </div>
          <div className="w-1/2 flex flex-col gap-2">
            <label
              className="block text-gray-700  font-bold mb-2"
              htmlFor="duration"
            >
              Duration (5 hours)
            </label>
            <input
              name="duration"
              type="duration"
              id="duration"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.duration && (
              <label className="ml-1 font-sans text-red-500">
                {errors.duration[0] ? errors.duration[0] + " *" : ""}
              </label>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700  font-bold mb-2"
            htmlFor="overview"
          >
            Overview
          </label>
          <textarea
            name="overview"
            id="overview"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          ></textarea>
          {errors.overview && (
            <label className="ml-1 font-sans text-[#FF6575]">
              {errors.overview[0] ? errors.overview[0] + " *" : ""}
            </label>
          )}
        </div>

        <AddCourseButton />
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
                Course Successfully Added!
              </h2>
            </div>
            <div className=" text-center space-x-4 md:block">
              <Link href="/courses">
                <button
                  className="mb-2 md:mb-0 bg-[#FF6575]  border border-[#FF6575] px-5 py-2
               font-medium tracking-wider text-white rounded-full hover:bg-[#f55565]"
                >
                  Go to Courses page
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
