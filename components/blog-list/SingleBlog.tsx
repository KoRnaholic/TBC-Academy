import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentIcon from "@mui/icons-material/Comment";
import Link from "next/link";
import { BlogPost } from "../../types/types";

export default function SingleBlog({
  blog,
  expand,
}: {
  blog: BlogPost;
  expand: boolean;
}) {
  // const commentInfo = await sqlGetBlogComments(blog.id);
  const { title, overview, tag, blogImage, slug, date } = blog;
  const replacedOverview = overview.replace(/\n\s*\n/g, "<br>\n");
  console.log(blog.overview);

  const isoDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    isoDate
  );

  return (
    <>
      <div className=" border max-w-full  bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="md:flex flex-col">
          <div className="p-6">
            <div className=" hover:bg-white overflow-hidden">
              <Link href={`/blog/${slug}`}>
                <Image
                  className="w-full h-full md:h-[500px] cursor-pointer object-cover rounded-md  hover:scale-110 transition-all duration-700"
                  src={blogImage.url}
                  width={800}
                  height={400}
                  quality={100}
                  alt="A woman working on a laptop"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP89eubDwAJGAM4pZ3ZXgAAAABJRU5ErkJggg=="
                />
              </Link>
            </div>
          </div>

          <div className="pt-0 p-6 md:p-8 flex flex-col gap-3">
            <div className="flex items-center">
              <div className="ml-2 flex gap-3  text-gray-500">
                <span className="border-r-2 border-gray-500 pr-2 flex items-center gap-2">
                  <CalendarMonthIcon className="text-[#fe893e]" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2">
                  <CommentIcon className="text-[#ffa4af]" />
                  No Comments
                </span>
              </div>
            </div>
            <h2 className="block mt-2 text-2xl lg:text-4xl leading-tight font-medium text-[#002058]">
              {title}
            </h2>
            <p className="mt-2 text-gray-500">
              {expand
                ? replacedOverview
                : overview.split(" ").slice(0, 30).join(" ") + "..."}
            </p>
            <div className="mt-4">
              {expand ? (
                <div>
                  <h3 className="text-2xl text-[#002058]">Tag</h3>
                  <p className="mt-5 bg-[#FF657530] text-gray-600 px-3 py-2 inline-flex rounded-lg">
                    {tag}
                  </p>
                </div>
              ) : (
                <Link
                  href={`/blog/${slug}`}
                  className="px-6 py-2.5 bg-[#FF6575] text-white  font-medium rounded-md
                 hover:bg-red-600 transition-all duration-300"
                >
                  Read More
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
