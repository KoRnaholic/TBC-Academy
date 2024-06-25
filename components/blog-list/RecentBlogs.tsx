import Image from "next/image";
import { BlogPost } from "../../types/types";
import Link from "next/link";

export default function RecentBlogs({
  blogs,
}: {
  blogs: BlogPost[] | undefined;
}) {
  return (
    <>
      <div className="p-6 border dark:border-gray-600 rounded-lg dark:bg-gray-800">
        <h2 className="">Recent Posts</h2>
        {blogs?.map((blog: BlogPost) => {
          const { title, blogImage, slug, date } = blog;
          const isoDate = new Date(date);

          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = new Intl.DateTimeFormat(
            "en-US",
            options
          ).format(isoDate);
          return (
            <div key={blog.slug} className="mt-6">
              <div className="flex gap-4 ">
                <div className="">
                  <Link href={`/blog/${slug}`}>
                    <Image
                      className="rounded-md object-cover w-24 h-20 hover:scale-105 transition-all duration-500 "
                      src={blogImage.url}
                      width={200}
                      height={200}
                      alt="blog"
                    />
                  </Link>
                </div>

                <div className="flex flex-col justify-around">
                  <h3 className="text-[#002058] dark:text-white hover:text-[#FF6575] transition-all duration-300 cursor-pointer">
                    <Link href={`/blog/${slug}`}>
                      {title.split(" ").slice(0, 2).join(" ") + "..."}
                    </Link>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {formattedDate}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
