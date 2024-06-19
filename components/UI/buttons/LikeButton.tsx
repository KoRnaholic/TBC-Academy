import Image from "next/image";
import { sqlAddLike } from "../../../app/sql/sql-review/sqlAddLike";
import { sqlexistsLikeOrDislike } from "../../../app/sql/sql-review/sqlExistsLikes";
import { sqlGetLikes } from "../../../app/sql/sql-review/sqlGetLikes";
import like from "../../../public/icons/like.svg";

export default async function LikeButton({
  reviewId,
  studentId,
}: {
  reviewId: number;
  studentId: string;
}) {
  const likes = await sqlGetLikes(reviewId);
  const exists = await sqlexistsLikeOrDislike(reviewId, studentId);

  async function addLike() {
    "use server";

    await sqlAddLike(reviewId, studentId);
  }
  return (
    <>
      <form action={addLike}>
        <button
          className="hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          disabled={exists[0].exists}
        >
          <Image src={like} />
        </button>
        <span className="text-green-500"> +{likes[0].like_count}</span>
      </form>
    </>
  );
}
