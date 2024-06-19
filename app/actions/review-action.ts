"use server";

import { sqlCreateReview } from "../sql/sql-review/sqlCreateReview";

export async function createReview(
  courseId: number,
  rating: number,
  formData: FormData
) {
  const reviewData = {
    courseId: courseId,
    rating: rating,
    comment: formData.get("comment") as string,
  };

  await sqlCreateReview(reviewData);

  // mutate data
  // revalidate cache
}
