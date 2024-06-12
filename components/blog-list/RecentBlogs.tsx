import Image from "next/image";
import { BlogPost } from "../../types/types";
import Link from "next/link";

export default function RecentBlogs({ blogs }: { blogs: BlogPost[] | null }) {
  return (
    <>
      <div className="p-6 border rounded-lg">
        <h2>Recent Posts</h2>
        {blogs?.map((blog: BlogPost) => {
          const { title, created_at, image } = blog;
          const date = new Date(created_at);

          const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = new Intl.DateTimeFormat(
            "en-US",
            options
          ).format(date);
          return (
            <div key={blog.id} className="mt-6">
              <div className="flex gap-4 ">
                <div className="w-24 h-20">
                  <Link href={`/blog/${blog.id}`}>
                    <Image
                      className="rounded-md object-cover hover:scale-105 transition-all duration-500 w-full h-full"
                      src={image}
                      width={200}
                      height={200}
                      alt="blog"
                    />
                  </Link>
                </div>

                <div className="flex flex-col justify-around">
                  <h3 className="text-[#002058] hover:text-[#FF6575] transition-all duration-300 cursor-pointer">
                    <Link href={`/blog/${blog.id}`}>
                      {title.split(" ").slice(0, 3).join(" ") + "..."}
                    </Link>
                  </h3>
                  <p className="text-gray-500 text-sm">{formattedDate}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
