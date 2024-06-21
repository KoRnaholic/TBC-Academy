import { sqlCreateCourseComment } from "../../app/sql/sql-courses/sqlCreateCourseComment";
import PostComment from "../UI/buttons/PostComment";
import SingleCourseComments from "./SingleCourseComments";

export default function CourseComment({ id }: { id: number }) {
  return (
    <>
      <SingleCourseComments courseId={id} />
      <div className="border p-6 mt-10 rounded-lg bg-white">
        <form
          action={async (formData) => {
            "use server";
            const commentInfo = {
              comment: formData.get("comment") as string,
              courseId: id,
            };

            await sqlCreateCourseComment(commentInfo);
          }}
        >
          <PostComment />
        </form>
      </div>
    </>
  );
}
