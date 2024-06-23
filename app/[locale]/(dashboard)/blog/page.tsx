import Link from "next/link";

import BlogList from "../../../../components/blog-list/BlogList";
import { BlogPostCollection } from "../../../../types/types";
import { getBlogPostCollection } from "../../../content/queries";

export const revalidate = 0;

export const metadata = {
  title: "DreamLMS - Blog",
  description:
    "Stay updated with the latest news, tips, and insights on online learning and education from the DreamLMS blog.",
  keywords: "blog, DreamLMS, online learning, education, news, tips, insights",
};

export default async function Blog() {
  // const blogs: BlogPost[] | null = await sqlGetBlogs();
  const data: BlogPostCollection | undefined = await getBlogPostCollection();
  const blogs = data?.blogPostCollection.items;

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

      <div className="mt-20 flex justify-center flex-col xl:flex-row gap-6">
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}
