import React from "react";
import { sqlAdddislike } from "../../../app/sql/sql-review/sqlAddDislike";
import { sqlGetDislikes } from "../../../app/sql/sql-review/sqlGetDislikes";
import { sqlexistsLikeOrDislike } from "../../../app/sql/sql-review/sqlExistsLikes";
import dislike from "../../../public/icons/dislike.svg";
import Image from "next/image";

export default async function DisslikeButton({
  reviewId,
}: {
  reviewId: number;
}) {
  const dislikes = await sqlGetDislikes(reviewId);
  const exists = await sqlexistsLikeOrDislike(reviewId);
  async function addLike() {
    "use server";

    await sqlAdddislike(reviewId);
  }
  return (
    <>
      <form action={addLike} className="flex items-center gap-1">
        <button disabled={exists[0].exists}>
          <Image
            src={dislike}
            alt="dislike"
            className={`hover:translate-y-1 transition-all duration-300 cursor-pointer`}
          />
        </button>
        {dislikes && (
          <span className="text-red-500"> - {dislikes[0].dislike_count}</span>
        )}
      </form>
    </>
  );
}
