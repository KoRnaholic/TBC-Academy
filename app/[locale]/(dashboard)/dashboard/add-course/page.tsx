"use client";
import { useFormState } from "react-dom";
import { uploadImage } from "../../../../actions";

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
};

export default function AddCoursePage() {
  const [state, formAction] = useFormState(uploadImage, initialState);
  const errors = state.errors;
  console.log(state.errors);
  return (
    <>
      <form
        action={formAction}
        className="mt-5 p-6 bg-white flex flex-col gap-6 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          Upload Course Image
        </h1>
        <div className="flex justify-between">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" required />
        </div>
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
              duration
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

        <button
          type="submit"
          className=" bg-[#FF6575] w-full hover:bg-[#ee5262] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Course
        </button>
      </form>
    </>
  );
}
