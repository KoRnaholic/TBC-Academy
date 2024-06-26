import Link from "next/link";

import BlogList from "../../../../components/blog-list/BlogList";
import { BlogPostCollection } from "../../../../types/types";
import { getBlogPostCollection } from "../../../content/queries";
import { getTranslations } from "next-intl/server";

export const revalidate = 0;

export interface TranslateObj {
  read: string;
  search: string;
}

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

  const t = await getTranslations("Blog");

  const translateObj = {
    read: t("read"),
    search: t("search"),
  };

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

      <div className="mt-20 flex justify-center flex-col xl:flex-row gap-6 mb-20">
        <BlogList translateObj={translateObj} blogs={blogs} />
      </div>
    </>
  );
}
