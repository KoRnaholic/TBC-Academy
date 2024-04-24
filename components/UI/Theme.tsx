import light from "../../public/icons/light.svg";
import dark from "../../public/icons/dark.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Theme() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className=" bg-gray-200 dark:bg-gray-500  text-gray-600 font-semibold py-2 px-3 rounded-full inline-flex items-center">
        <span className="mr-1">
          <svg
            className="animate-spin   w-[25px] dark:text-white   text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </span>
      </button>
    );
  }

  return (
    <div>
      <div className="inline-block relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            resolvedTheme === "light" ? "bg-gray-200" : "bg-gray-500"
          }  text-gray-600 font-semibold py-2 px-3 rounded-full inline-flex items-center`}
        >
          <span className="mr-1">
            {resolvedTheme === "light" ? (
              <Image
                className="cursor-pointer w-[25px] dark:invert"
                src={light}
                alt="light"
              />
            ) : (
              <Image
                className="cursor-pointer w-[25px] dark:invert"
                src={dark}
                alt="dark"
              />
            )}
          </span>
        </button>
        {isOpen && (
          <ul className="absolute bg-white border rounded-md mt-1 z-10">
            <li>
              <button
                onClick={() => {
                  setTheme("light");
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none`}
              >
                Light
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTheme("system");
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none `}
              >
                System
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTheme("dark");
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none`}
              >
                Dark
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
