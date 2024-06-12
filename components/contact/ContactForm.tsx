"use client";
import Image from "next/image";
import contactImg from "../../public/images/contact-img.jpg";
import { submitContactForm } from "../../app/actions/contact-action";
import { useFormState } from "react-dom";

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
export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const errors = state?.errors;
  console.log(state);
  return (
    <>
      <div className="container flex flex-col md:flex-row  my-20 justify-center gap-16  bg-white">
        <div>
          <Image
            className="rounded-xl"
            src={contactImg}
            width={600}
            height={600}
            alt="contact-us"
          />
        </div>
        <div>
          <h4 className="text-start mb-2  text-4xl text-[#002058]">
            Get In Touch
          </h4>

          <form action={formAction}>
            <div className="mb-4 flex  gap-6">
              <div className="w-1/2 flex flex-col gap-2">
                <label
                  className="block text-gray-700  font-bold "
                  htmlFor="firstName"
                >
                  Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.name && (
                  <label className="ml-1 font-sans text-red-500">
                    {errors?.name[0] ? errors?.name[0] : ""}
                  </label>
                )}
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label
                  className="block text-gray-700  font-bold "
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.lastName && (
                  <label className="ml-1 font-sans text-red-500">
                    {errors?.lastName[0] ? errors?.lastName[0] : ""}
                  </label>
                )}
              </div>
            </div>
            <div className="mb-4  gap-6">
              <div className=" w-full flex flex-col gap-2">
                <label
                  className="block text-gray-700  font-bold "
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.email && (
                  <label className="ml-1 font-sans text-red-500">
                    {errors?.email[0] ? errors?.email[0] : ""}
                  </label>
                )}
              </div>
              <div className=" flex flex-col gap-2">
                <label
                  className="block text-gray-700  font-bold "
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  name="phone"
                  type="phone"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.phone && (
                  <label className="ml-1 font-sans text-red-500">
                    {errors?.phone[0] ? errors?.phone[0] : ""}
                  </label>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700  font-bold " htmlFor="text">
                Text
              </label>
              <textarea
                name="text"
                id="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              ></textarea>
              {errors?.text && (
                <label className="ml-1 font-sans text-[#FF6575]">
                  {errors?.text[0] ? errors?.text[0] : ""}
                </label>
              )}
            </div>

            <button
              type="submit"
              className=" bg-[#FF6575] w-full hover:bg-[#ee5262] text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
