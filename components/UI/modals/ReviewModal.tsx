"use client";
import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { createReview } from "../../../app/actions/review-action";
import UpdateReviewButton from "../buttons/UpdateReviewButton";

interface LessonsTranslation {
  complete: string;
  completed: string;
  rate: string;
  rating: string;
}

export default function ReviewModal({
  courseId,
  isReviewed,
  lessonsTranslation,
}: {
  courseId: number;
  isReviewed: boolean;
  lessonsTranslation: LessonsTranslation;
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const removePurchase = createReview.bind(null, courseId, rating);

  return (
    <>
      <div className="w-full flex flex-col gap-3 border p-5 rounded-lg dark:border-gray-600 dark:bg-[#2E2E2E]">
        {isReviewed ? (
          <span className="text-green-500">{lessonsTranslation.completed}</span>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="py-3 px-4 border border-[#FF6575] text-[#FF6575] w-full rounded-md hover:bg-[#FF6575] hover:text-white transition-all duration-300 dark:border-[#FF6575] dark:text-[#FF6575] dark:hover:bg-[#FF6575] dark:hover:text-white"
          >
            {lessonsTranslation.complete}
          </button>
        )}
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="min-w-screen h-screen fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg p-8 bg-white dark:bg-[#1A1A1A] rounded-lg shadow-lg relative mx-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute text-2xl top-4 right-4 text-red-400 hover:text-red-500 dark:text-red-500 dark:hover:text-red-600"
            >
              &times;
            </button>
            <h1 className="text-center text-2xl text-gray-700 dark:text-gray-200 mb-4">
              {lessonsTranslation.rate}
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
              {lessonsTranslation.rating}
            </p>
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <label
                    key={index}
                    className="cursor-pointer text-red-400 dark:text-red-500"
                  >
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
                className="w-full p-4 mb-6 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-red-400 dark:focus:border-red-500 resize-none"
              ></textarea>

              <div className="flex justify-center mt-10">
                <UpdateReviewButton />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
