import Link from "next/link";
import SingleBlog from "../../../../../components/blog-list/SingleBlog";
import { getBlogPostCollection } from "../../../../content/queries";
import RecentBlogs from "../../../../../components/blog-list/RecentBlogs";
import { BlogPost } from "../../../../../types/types";
import { getTranslations } from "next-intl/server";

export const revalidate = 0;

export default async function SingleBlogPage({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const { id } = params;
  // const blogs = await sqlGetBlogs();
  const data = await getBlogPostCollection();
  const blogs = data?.blogPostCollection.items;
  const t = await getTranslations("Blog");

  const blog: BlogPost[] | undefined = blogs?.filter(
    (blog: BlogPost) => encodeURIComponent(blog.slug) === id
  );

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
            <h1 className="text-5xl text-[#002058]">{t("link")}</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                {t("home")}
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">{t("link")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col xl:flex-row gap-6 mt-14 mb-20">
        {blog && (
          <div>
            <SingleBlog expand={true} blog={blog[0]} />
            {/* <BlogComments blog={blog[0]} /> */}
          </div>
        )}
        <div className="flex flex-col w-full xl:w-1/5 gap-8">
          <RecentBlogs blogs={blogs} />
        </div>
      </div>
    </>
  );
}
