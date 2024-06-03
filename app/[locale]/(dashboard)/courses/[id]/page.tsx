import Image from "next/image";
import banner from "../../../../../public/images/course-banner.png";
import SvgBook from "../../../../../components/svg-components/SvgBook";
import SvgTimer from "../../../../../components/svg-components/SvgTimer";
import Overview from "../../../../../components/courses/Overview";

export default function SingleCoursePage() {
  return (
    <>
      <div>
        <div>
          <Image className="mt-20 h-[350px]" alt="banner" src={banner} />
        </div>
        <div className="flex justify-center mr-52 ">
          <div className="flex flex-col gap-6 absolute top-32 justify-center items-start text-white">
            <div className="flex gap-2 items-center ">
              <Image
                className="w-9 h-9 rounded-full border-2 border-slate-300"
                src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2024/02/profile5-1.jpg"
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <span>Michael Morgan</span>
                <span>Instructor</span>
              </div>
            </div>
            <h1 className="text-5xl max-w-[850px]">
              Complete Python & PostgreSQL Developer Course
            </h1>

            <div className="flex gap-5">
              <span className="flex items-center">
                <SvgBook className="fill-[#FF6575] stroke-red group-hover:fill-white group-hover:stroke-white" />
                4 Lessons
              </span>
              <span className="flex items-center">
                <SvgTimer />
                40 hours 30 minutes
              </span>
              <span> 2 Enrolled</span>
              <span> stars</span>
            </div>
          </div>
        </div>
      </div>

      <Overview />
    </>
  );
}
