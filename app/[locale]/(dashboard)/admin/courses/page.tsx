import Image from "next/image";
import { sqlGetCourses } from "../../../../sql/sqlRequests";
import EditDeltDropdown from "../../../../../components/UI/Edit-DelDropdown";
import { getTranslations } from "next-intl/server";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function AdminCoursesPage() {
  const session = await getSession();
  const courses = await sqlGetCourses();
  const user = session?.user.role[0];

  // const role = session?.user.role[0];

  if (user !== "Admin") {
    redirect("/");
  }

  const t = await getTranslations("Admin.courses");

  const courseTransl = {
    duration: t("duration"),
    price: t("price"),
    edit: t("edit"),
    delete: t("delete"),
    editcourse: t("editcourse"),
    name: t("name"),
    lessons: t("lessons"),
    overview: t("overview"),
    save: t("save"),
    saving: t("saving"),
    sure: t("sure"),
    no: t("no"),
    yes: t("yes"),
  };

  return (
    <div className="container mx-auto lg:px-4">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 dark:text-gray-100">
            {t("all")}
          </h2>
        </div>
        <div className="-mx-4 sm:-mx-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-auto max-h-[550px] bg-white dark:bg-gray-800">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("course")}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("instructor")}
                  </th>
                  <th className="px-5 py-3 hidden md:table-cell border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("duration")}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400 text-left text-xs font-semibold text-[#002058] dark:text-gray-200 uppercase tracking-wider">
                    {t("price")}
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 bg-red-200 dark:bg-red-400"></th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {courses?.map((course) => (
                  <tr key={course.id}>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <Image
                            src={course.image}
                            className="w-full h-full rounded-full"
                            width={50}
                            height={50}
                            alt="course-avatar"
                          />
                        </div>
                        <div className="ml-3 hidden lg:flex">
                          <p className="text-[#002058] dark:text-gray-200 whitespace-no-wrap">
                            {course.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                        {course.instructor_name}
                      </p>
                    </td>
                    <td className="px-5 py-5 hidden md:table-cell border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <p className="text-gray-900 dark:text-gray-200 whitespace-no-wrap">
                        {course.duration}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                      <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                        <span
                          aria-hidden
                          className={`absolute inset-0 opacity-50 rounded-full ${
                            course.price === "free"
                              ? "bg-green-200 dark:bg-green-700"
                              : "bg-orange-200 dark:bg-red-700"
                          }`}
                        ></span>
                        <span className="relative text-green-900 dark:text-green-200">
                          {course.price === "free"
                            ? "Free"
                            : `$${course.price}`}
                        </span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-right">
                      <EditDeltDropdown
                        courseTransl={courseTransl}
                        courseId={course.id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
