"use client";
import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { createReview } from "../../../app/actions/review-action";

export default function ReviewModal({ courseId }: { courseId: number }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const removePurchase = createReview.bind(null, courseId, rating);

  return (
    <>
      <div className="w-full flex flex-col gap-3 border p-5 rounded-lg">
        <button
          onClick={() => setIsOpen(true)}
          className="py-3 px-4 border border-[#FF6575] text-[#FF6575]
             w-full rounded-md hover:bg-[#FF6575] hover:text-white transition-all duration-300"
        >
          Complete the Course
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="min-w-screen h-screen fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg relative mx-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-2xl top-4 right-4 text-red-400 hover:text-red-500"
            >
              &times;
            </button>
            <h1 className="text-center text-2xl text-gray-700 mb-4">
              How would you rate this course?
            </h1>
            <p className="text-center text-gray-500 mb-6">Select Rating</p>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label key={index} className="cursor-pointer text-red-400">
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      className="hidden"
                    />
                    {ratingValue <= (hover || rating) ? (
                      <StarIcon
                        className="w-12"
                        fontSize="large"
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    ) : (
                      <StarBorderIcon
                        className="w-12"
                        fontSize="large"
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    )}
                  </label>
                );
              })}
            </div>
            <form action={removePurchase}>
              <textarea
                name="comment"
                placeholder="Write your review here..."
                className="w-full p-4 mb-6 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400 resize-none"
              ></textarea>

              <div className="flex justify-center mt-10">
                <button className="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-300">
                  Update Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
