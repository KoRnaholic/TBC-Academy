import Link from "next/link";
import { sqlGetSingleBlog } from "../../../../sql/sql-blogs/sqlGetSingleBlog";
import SingleBlog from "../../../../../components/blog-list/SingleBlog";
import RecentBlogs from "../../../../../components/blog-list/RecentBlogs";
import BlogComments from "../../../../../components/blog-list/BlogComments";

// interface Params {
//   id: string;
// }
// export async function generateStaticParams() {
//   const response = await fetch(URL);
//   const blogs: BlogObject = await response.json();

//   const paths = blogs.recipes.map((blog) => ({
//     locale: "en",
//     id: blog.id.toString(),
//   }));
//   const paths2 = blogs.recipes.map((blog) => ({
//     locale: "ka",
//     id: blog.id.toString(),
//   }));

//   return paths.concat(paths2);
// }

export const revalidate = 0;

export default async function SingleBlogPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const { id } = params;
  const blog = await sqlGetSingleBlog(id);

  return (
    <>
      <div>
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 "
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col  gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058]">Blog</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                Home
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">Blog</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-14">
        {blog && (
          <div>
            <SingleBlog expand={true} blog={blog[0]} />
            <BlogComments blog={blog[0]} />
          </div>
        )}
        <div className="flex flex-col w-1/5 gap-8">
          <RecentBlogs />
        </div>
      </div>
    </>
  );
}
