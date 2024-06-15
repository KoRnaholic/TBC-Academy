import { sqlCreateCourseComment } from "../../app/sql/sql-courses/sqlCreateCourseComment";
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
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-[#002058]">Leave Comment</h3>
            <label>Your Comment</label>
            <input
              className="block focus:outline-none focus:border-gray-500 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  "
              type="text"
              placeholder="Leave your comment"
              name="comment"
            />
          </div>
          <button
            type="submit"
            className="mt-10 bg-[#FF6575] hover:bg-[#e14e5c] px-5 py-3 rounded-md text-white "
          >
            Post Coomment
          </button>
        </form>
      </div>
    </>
  );
}
