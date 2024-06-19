import React from "react";
import { sqlAdddislike } from "../../../app/sql/sql-review/sqlAddDislike";
import { sqlGetDislikes } from "../../../app/sql/sql-review/sqlGetDislikes";
import { sqlexistsLikeOrDislike } from "../../../app/sql/sql-review/sqlExistsLikes";
import dislike from "../../../public/icons/dislike.svg";
import Image from "next/image";

export default async function DisslikeButton({
  reviewId,
  studentId,
}: {
  reviewId: number;
  studentId: string;
}) {
  const dislikes = await sqlGetDislikes(reviewId);
  const exists = await sqlexistsLikeOrDislike(reviewId, studentId);
  async function addLike() {
    "use server";

    await sqlAdddislike(reviewId, studentId);
  }
  return (
    <>
      <form action={addLike}>
        <button disabled={exists[0].exists}>
          <Image src={dislike} />
        </button>
        <span className="text-red-500"> -{dislikes[0].dislike_count}</span>
      </form>
    </>
  );
}
