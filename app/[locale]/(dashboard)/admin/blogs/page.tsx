import Image from "next/image";
import { BlogPostCollection } from "../../../../../types/types";
import { getBlogPostCollection } from "../../../../content/queries";
import { getTranslations } from "next-intl/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function AdminBlogsPage() {
  const data: BlogPostCollection | undefined = await getBlogPostCollection();
  const blogs = data?.blogPostCollection.items;

  const t = await getTranslations("Admin.blogs");
  const session = await getSession();
  const user = session?.user.role[0];

  // const role = session?.user.role[0];

  if (user !== "Admin") {
    redirect("/");
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
            {t("all")}
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-auto max-h-[550px] bg-white dark:bg-gray-800">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("blog")}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("tag")}
                  </th>
                  <th className="px-5 py-3 hidden md:table-cell border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("date")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs?.map((blog) => {
                  const date = new Date(blog.date);

                  const options: Intl.DateTimeFormatOptions = {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                  };
                  const formattedDate = date.toLocaleString("en-US", options);
                  return (
                    <tr key={blog.slug} className="bg-white dark:bg-gray-800">
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-30 h-20">
                            <Image
                              src={blog.blogImage.url}
                              className="w-full h-full"
                              width={100}
                              height={100}
                              alt="blog-avatar"
                            />
                          </div>
                          <div className="ml-3 hidden lg:flex">
                            <p className="text-[#002058] dark:text-gray-200 whitespace-no-wrap">
                              {blog.title}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 dark:text-green-200 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 opacity-50 bg-green-200 dark:bg-green-700 rounded-full"
                          ></span>
                          <span className="relative">{blog.tag}</span>
                        </span>
                      </td>
                      <td className="px-5 my-5 hidden md:table-cell border-b border-gray-200 dark:border-gray-700">
                        <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                          {formattedDate}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
