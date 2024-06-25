import Image from "next/image";
import { sqlAddLike } from "../../../app/sql/sql-review/sqlAddLike";
import { sqlexistsLikeOrDislike } from "../../../app/sql/sql-review/sqlExistsLikes";
import { sqlGetLikes } from "../../../app/sql/sql-review/sqlGetLikes";
import like from "../../../public/icons/like.svg";

export default async function LikeButton({ reviewId }: { reviewId: number }) {
  const likes = await sqlGetLikes(reviewId);
  const exists = await sqlexistsLikeOrDislike(reviewId);

  async function addLike() {
    "use server";

    await sqlAddLike(reviewId);
  }
  return (
    <>
      <form action={addLike} className="flex items-center gap-1">
        <button disabled={exists[0].exists}>
          <Image
            src={like}
            alt="like"
            className={` hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
          />
        </button>
        {likes && (
          <span className="text-green-500"> + {likes[0].like_count}</span>
        )}
      </form>
    </>
  );
}
