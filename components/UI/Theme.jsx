import light from "@/public/icons/light.svg";
import dark from "@/public/icons/dark.svg";
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
      <button className=" bg-gray-200 text-gray-600 font-semibold py-2 px-3 rounded-full inline-flex items-center">
        <span className="mr-1">
          <Image
            className="cursor-pointer w-[25px] dark:invert animate-spin"
            src={light}
            alt="dark"
          />
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
