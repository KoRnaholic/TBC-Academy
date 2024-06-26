import Image from "next/image";
import SvgBook from "../../../../../components/svg-components/SvgBook";
import SvgTimer from "../../../../../components/svg-components/SvgTimer";
import Overview from "../../../../../components/courses/Overview";
import { getSingleCourse } from "../../../../actions";
import { SingleProductParam } from "../../../../../types/types";
import { revalidatePath } from "next/cache";
import StarsComponent from "../../../../../components/UI/StarsComponent";
import { sqlgetReviewRatings } from "../../../../sql/sql-review/sqlGetReviewRatings";
import { getTranslations } from "next-intl/server";
// import CourseComment from "../../../../../components/courses/AddCourseComment";

export const revalidate = 0;

export default async function SingleCoursePage({
  params,
}: {
  params: SingleProductParam;
}) {
  const courseArr = await getSingleCourse(Number(params.id));
  revalidatePath("/courses");
  const course = courseArr[0];
  const rating = await sqlgetReviewRatings(Number(params.id));

  const t = await getTranslations("Courses.course");

  return (
    <>
      <div>
        <div className="bg-black">
          <div className="bg-[url('/images/course-banner.png')] bg-black mt-20 h-[360px] opacity-30 bg-no-repeat bg-cover"></div>
        </div>
        <div className="flex bg-[#fafafa] justify-center lg:mr-52 2xl:justify-start 2xl:ml-[320px] ">
          <div className="flex flex-col gap-6 absolute top-32 px-4  justify-center items-start text-white">
            <div className="flex gap-2 items-center ">
              <Image
                className="w-12 h-12 rounded-full border-2 border-slate-300  "
                src={`${course.instructor_image}`}
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span>
                  {course.instructor_name + " " + course.instructor_surname}
                </span>
                <span>{t("instructor")}</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-3xl lg:text-5xl max-w-[850px] ">
              {course.name}
            </h1>

            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="flex gap-8">
                <span className="flex items-center">
                  <SvgBook className="fill-[#FF6575] stroke-red group-hover:fill-white group-hover:stroke-white" />
                  {course.lessons} {t("lessons")}
                </span>
                <span className="flex items-center">
                  <SvgTimer />
                  {course.duration} hours 30 minutes
                </span>
              </div>

              <div className="flex gap-8">
                <span> 2 Enrolled</span>
                {rating?.average_rating ? (
                  <div className="font-bold">
                    <StarsComponent rating={rating?.average_rating} />
                    {rating?.average_rating}
                  </div>
                ) : (
                  <span>No reviews Yet</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Overview course={course} />
    </>
  );
}
