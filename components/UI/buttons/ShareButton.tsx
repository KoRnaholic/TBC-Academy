"use client";
import { useState } from "react";
import SvgShare from "../../svg-components/SvgShare";
import ShareModal from "../modals/ShareModal";

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="py-2.5 flex justify-center items-center group gap-1 px-3.5 border  border-[#FF6575] text-[#FF6575]
             w-full rounded-full hover:bg-[#FF6575] hover:text-white transition-all duration-300"
      >
        <SvgShare className="group-hover:fill-white" /> Share
      </button>

      {isOpen && <ShareModal setIsOpen={setIsOpen} />}
    </>
  );
}
