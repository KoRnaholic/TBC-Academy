import Link from "next/link";
import BlogSearch from "../../../../components/blog-list/BlogSearch";
import RecentBlogs from "../../../../components/blog-list/RecentBlogs";
import { sqlGetBlogs } from "../../../sql/sql-blogs/sqlGetBlogs";
import BlogList from "../../../../components/blog-list/BlogList";
import { getSession } from "@auth0/nextjs-auth0";

export const revalidate = 0;

export default async function Blog() {
  const blogs = await sqlGetBlogs();
  const data = await getSession();
  console.log(data.user["test/role"]);
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
            <h1 className="text-5xl text-[#002058]">Blog List</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                Home
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">Blog List</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex justify-center gap-6">
        <BlogList blogs={blogs} />
        <div className="flex flex-col w-1/5 gap-8">
          <BlogSearch />
          <RecentBlogs />
        </div>
      </div>
    </>
  );
}
