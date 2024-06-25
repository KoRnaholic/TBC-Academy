"use client";

import { useState } from "react";
import { deletePurchase } from "../../../app/actions/deletePurchase-action";
import DeletePurchase from "../buttons/DeletePurchase";

interface CourseTranslation {
  remove: string;
  sure: string;
  close: string;
  delete: string;
  deleting: string;
}

export default function RemovePurchaseModal({
  courseId,
  courseTranslation,
}: {
  courseId: number;
  courseTranslation: CourseTranslation;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const removePurchase = deletePurchase.bind(null, courseId);
  return (
    <>
      {/* <form action={removePurchase} className="w-full"> */}
      <button
        onClick={() => setIsOpen(true)}
        className="py-1.5 w-full px-3.5 border-2 border-red-400 text-center rounded-md
                 text-red-400 hover:bg-red-400 hover:text-white
                  transition-all duration-300 hover:border-red-400
                   group-hover:text-white "
      >
        {courseTranslation.remove}
      </button>
      {/* </form> */}

      {isOpen && (
        <div
          // onClick={() => setIsOpen(false)}
          className="min-w-screen h-screen fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
        >
          <div
            //   onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative mx-auto"
          >
            <h1 className="text-center text-2xl text-red-500 mb-6">
              {courseTranslation.sure}
            </h1>
            <div className="text-center p-4 flex justify-between items-center gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="py-2 w-1/2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                {courseTranslation.close}
              </button>
              <form action={removePurchase} className="w-full flex justify-end">
                <DeletePurchase
                  isDeleting={courseTranslation.deleting}
                  deleting={courseTranslation.delete}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
