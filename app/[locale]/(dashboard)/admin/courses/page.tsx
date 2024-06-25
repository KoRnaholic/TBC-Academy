import Image from "next/image";
import { sqlGetCourses } from "../../../../sql/sqlRequests";
import EditDeltDropdown from "../../../../../components/UI/Edit-DelDropdown";
// import { getSession } from "@auth0/nextjs-auth0";
// import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function AdminCoursesPage() {
  const courses = await sqlGetCourses();
  // const session = await getSession();
  // const user = session?.user["metadata/role"];

  // if (user === "Student") {
  //   redirect("/");
  // }

  return (
    <div className="container mx-auto lg:px-4 ">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">All Courses</h2>
        </div>
        <div className="-mx-4 sm:-mx-8   py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg  overflow-auto max-h-[550px]">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Course
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Instructor
                  </th>
                  <th className="px-5 py-3 hidden md:flex border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-5 py-3  border-b-2 border-gray-200 bg-red-200 text-left text-xs font-semibold text-[#002058] uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-200"></th>
                </tr>
              </thead>
              <tbody>
                {courses?.map((course) => {
                  return (
                    <tr key={course.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <div className="flex items-center ">
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
                            <p className="text-[#002058] whitespace-no-wrap">
                              {course.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b  border-gray-200 bg-white ">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {course.instructor_name}
                        </p>
                      </td>
                      <td className="px-5 py-5 hidden md:flex border-b border-gray-200 bg-white ">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {course.duration}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white ">
                        <span
                          className={`relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight`}
                        >
                          <span
                            aria-hidden
                            className={`${
                              course.price === "free"
                                ? "bg-green-200"
                                : "bg-orange-200"
                            } absolute inset-0  opacity-50 rounded-full`}
                          ></span>
                          <span className="relative">
                            {course.price === "free"
                              ? "Free"
                              : `$${course.price}`}
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <EditDeltDropdown courseId={course.id} />
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
