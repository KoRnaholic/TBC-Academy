import SingleBlogComment from "./SingleBlogComment";
import { sqlCreateBlogComment } from "../../app/sql/sql-blogs/sqlCreateBlogComment";

export default function BlogComments({ blog }) {
  return (
    <>
      <SingleBlogComment blogId={blog.id} />

      <div className="border p-6 mt-10 rounded-lg">
        <form
          action={async (formData) => {
            "use server";
            const commentInfo = {
              comment: formData.get("comment"),
              blogId: blog.id,
            };

            await sqlCreateBlogComment(commentInfo);
          }}
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-[#002058]">Leave Comment</h3>
            <label>Your Comment</label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
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
