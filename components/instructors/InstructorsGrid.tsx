import Image from "next/image";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GridViewIcon from "@mui/icons-material/GridView";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TextsmsIcon from "@mui/icons-material/Textsms";

import { getInstructors } from "../../app/actions";

export default async function InstructorsGrid() {
  const instructors = await getInstructors();

  console.log(instructors);
  return (
    <div className="md:p-16 flex w-full flex-col items-center">
      <div className=" flex items-center space-x-2">
        <button className="p-2 bg-[#FF6575] text-white rounded">
          <GridViewIcon />
        </button>
        <button className="p-2 border rounded">
          <FormatListBulletedIcon />
        </button>
        <p className="text-lg font-sans font-semibold">
          Showing {instructors.length} results
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center w-4/5 gap-8">
        {instructors.map((instructor) => {
          return (
            <div
              key={instructor.id}
              className="w-full md:w-1/3 2xl:w-1/4 py-3 bg-white border rounded-xl"
            >
              <div className="flex justify-center">
                <Image
                  className="rounded-full"
                  src={instructor.image}
                  width={200}
                  height={200}
                  alt="instructor"
                />
              </div>
              <div className="flex flex-col items-center gap-2 font-sans">
                <h3
                  className="text-xl font-semibold text-[#002058] cursor-pointer
                 hover:text-[#FF6575] transition-all duration-300"
                >
                  {instructor.name + " " + instructor.surname}
                </h3>
                <p>Instructor</p>
                <p className="flex items-center gap-2">
                  <AutoStoriesIcon className="text-[#FF6575]" /> 0 Course
                </p>
                <p className="flex items-center gap-2 hover:text-[#FF6575] transition-all duration-300 cursor-pointer">
                  <TextsmsIcon className="text-[#FF6575]" />{" "}
                  info@dreamstechnologies.com
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
