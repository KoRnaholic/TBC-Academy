"use client";
import Image from "next/image";
import contactImg from "../../public/images/contact-img.jpg";
import { submitContactForm } from "../../app/actions/contact-action";
import { useFormState } from "react-dom";
import { useRef } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

interface FormnObj {
  header: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  text: string;
  send: string;
}

const initialState = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  text: "",
  errors: {
    name: [""],
    lastName: [""],
    email: [""],
    phone: [""],
    text: [""],
  },
  success: false,
};
export default function ContactForm({ formObj }: { formObj: FormnObj }) {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const errors = state?.errors;
  if (state.success === true) {
    formRef.current?.reset();
  }

  return (
    <>
      <div className="container flex flex-col md:flex-row my-20 justify-center gap-16 p-5 bg-white dark:bg-gray-800">
        <div>
          <Image
            className="rounded-xl"
            src={contactImg}
            width={600}
            height={600}
            alt="contact-us"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-start mb-2 text-4xl text-[#002058] dark:text-[#FF6575]">
            {formObj.header}
          </h4>

          <form
            className="flex flex-col gap-4"
            action={formAction}
            ref={formRef}
          >
            <div className="mb-4 flex gap-6">
              <div className="w-1/2 flex flex-col gap-2">
                <label
                  className="block text-gray-700 font-bold dark:text-gray-400"
                  htmlFor="firstName"
                >
                  {formObj.name}
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300"
                />
                <div className="h-5">
                  {errors?.name && (
                    <label className="ml-1 font-sans text-red-500">
                      {errors?.name[0] ? errors?.name[0] : ""}
                    </label>
                  )}
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label
                  className="block text-gray-700 font-bold dark:text-gray-400"
                  htmlFor="lastName"
                >
                  {formObj.lastname}
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300"
                />
                <div className="h-5">
                  {errors?.lastName && (
                    <label className="ml-1 font-sans text-red-500">
                      {errors?.lastName[0] ? errors?.lastName[0] : ""}
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4 flex gap-6">
              <div className="w-1/2 flex flex-col gap-2">
                <label
                  className="block text-gray-700 font-bold dark:text-gray-400"
                  htmlFor="email"
                >
                  {formObj.email}
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300"
                />
                <div className="h-5">
                  {errors?.email && (
                    <label className="ml-1 font-sans text-red-500">
                      {errors?.email[0] ? errors?.email[0] : ""}
                    </label>
                  )}
                </div>
              </div>
              <div className="flex w-1/2 flex-col gap-2">
                <label
                  className="block text-gray-700 font-bold dark:text-gray-400"
                  htmlFor="phone"
                >
                  {formObj.phone}
                </label>
                <input
                  name="phone"
                  type="phone"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-300"
                />
                <div className="h-5">
                  {errors?.phone && (
                    <label className="ml-1 font-sans text-red-500">
                      {errors?.phone[0] ? errors?.phone[0] : ""}
                    </label>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold dark:text-gray-400"
                htmlFor="text"
              >
                {formObj.text}
              </label>
              <textarea
                name="text"
                id="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 dark:bg-gray-700 dark:text-gray-300"
              ></textarea>
              <div className="h-5">
                {errors?.text && (
                  <label className="ml-1 font-sans text-[#FF6575]">
                    {errors?.text[0] ? errors?.text[0] : ""}
                  </label>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#FF6575] w-full hover:bg-[#ee5262] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {formObj.send}
            </button>
          </form>
        </div>
      </div>

      {state.success && (
        <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <div className="text-center p-5 flex-auto justify-center">
              <CheckCircleIcon
                className="font-size-lg text-green-500"
                fontSize="large"
              />
              <h2 className="text-2xl text-green-500 py-4">
                Email Successfully Sent!
              </h2>
            </div>
            <div className="text-center space-x-4 md:block">
              <Link href="/">
                <button className="mb-2 md:mb-0 bg-[#FF6575] border border-[#FF6575] px-5 py-2 font-medium tracking-wider text-white rounded-full hover:bg-[#f55565]">
                  Go back
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
