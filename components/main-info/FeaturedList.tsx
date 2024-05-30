import Image from "next/image";
import firstCourse from "../../public/images/course-1.jpg";
import SvgBook from "../svg-components/SvgBook";
import SvgHeart from "../svg-components/SvgHeart";
import SvgTimer from "../svg-components/SvgTimer";

export default function FeaturedList() {
  return (
    <div className="max-w-[395px]  bg-white rounded-lg shadow-md overflow-hidden p-5 group hover:bg-[#4B3869] transition-all duration-700">
      <div className="">
        <div className="relative">
          <div className="group overflow-hidden">
            <Image
              src={firstCourse}
              alt="course-1"
              className="w-full h-full rounded-lg object-cover cursor-pointer transform transition-all ease-in-out  duration-700 group-hover:scale-110"
            />
          </div>
          <span className="absolute bottom-2 text-2xl right-2 bg-white text-[#159f46]  font-bold px-2.5 py-0.5 rounded-lg">
            FREE
          </span>
        </div>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                className="w-9 h-9 rounded-full border-2 border-slate-300"
                src="https://dreamslms-wp.dreamstechnologies.com/wp-content/uploads/2024/02/profile5-1.jpg"
                alt="avatar"
                width={50}
                height={50}
              />
              <div className="flex flex-col ">
                <p className="text-[#002058] group-hover:text-white ">
                  David Powell
                </p>
                <p className="text-gray-600 text-sm group-hover:text-white ">
                  Instructor
                </p>
              </div>
            </div>
            <div>
              <SvgHeart className="fill-white stroke-red group-hover:fill-[#4B3869] group-hover:stroke-white" />
            </div>
          </div>
          <h3 className="cursor-pointer mt-2 w-4/5 text-[#002058] group-hover:text-white hover:text-red-500">
            Complete HTML, CSS and Javascript Course
          </h3>
          <div className="flex justify-between text-gray-600  mt-2 ">
            <span className="flex items-center group-hover:text-white">
              <span>
                <SvgBook className="fill-[#FF6575] stroke-red group-hover:fill-white group-hover:stroke-white" />
              </span>
              <span className="font-thin">0 lessons</span>
            </span>
            <span className="flex text-sm gap-1 items-center justify-center ml-4 group-hover:text-white">
              <span className="">
                <SvgTimer />
              </span>
              <span className="mt-1 font-thin">30 mins</span>
            </span>
          </div>
        </div>
        <div className="pt-4 flex justify-between items-center border-t">
          <p className="text-gray-900 font-semibold">Stars</p>
          <button
            className="py-1.5 px-3.5 border-2 border-[#B4A7F5] rounded-full
           text-[#B4A7F5] hover:bg-[#B4A7F5] hover:text-white
            transition-all duration-300 hover:border-[#B4A7F5]
             group-hover:text-white "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
