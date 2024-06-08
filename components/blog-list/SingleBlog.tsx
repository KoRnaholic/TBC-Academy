import Image from "next/image";
import img from "../../public/images/course-banner.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CommentIcon from "@mui/icons-material/Comment";

export default function SingleBlog() {
  return (
    <>
      <div className=" border max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="md:flex flex-col">
          <div className="p-6">
            <div className=" hover:bg-white overflow-hidden">
              <Image
                className="w-full h-[500px] object-cover rounded-md  hover:scale-110 transition-all duration-700"
                src={img}
                alt="A woman working on a laptop"
              />
            </div>
          </div>

          <div className="pt-0 p-8 flex flex-col gap-3">
            <div className="flex items-center">
              <div className="ml-2 flex gap-3  text-gray-500">
                <span className="border-r-2 border-gray-500 pr-2 flex items-center gap-2">
                  <CalendarMonthIcon className="text-[#fe893e]" /> January 18,
                  2023
                </span>
                <span className="flex items-center gap-2">
                  <CommentIcon className="text-[#ffa4af]" />
                  No Comments
                </span>
              </div>
            </div>
            <h2 className="block mt-2  text-2xl leading-tight font-medium text-[#002058]">
              Expand Your Career Opportunities With Python
            </h2>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris ni
              [...]
            </p>
            <div className="mt-4">
              <button
                className="px-6 py-2.5 bg-[#FF6575] text-white  font-medium rounded-md
               hover:bg-red-600 transition-all duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
