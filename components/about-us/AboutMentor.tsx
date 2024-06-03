import Image from "next/image";
import mentorImg from "../../public/images/mentor-img.png";
import instructor from "../../public/images/instructor.png";
import student from "../../public/images/student.png";

export default function AboutMentor() {
  return (
    <>
      <div className="p-8 flex justify-center items-center">
        <div>
          <Image src={mentorImg} alt="mentor-image" width={640} height={480} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 max-w-[600px]">
            Want to share your knowledge? Join us a Mentor
          </h2>
          <p className="text-gray-500 font-thin mb-6 max-w-[600px] text-xl">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video.
          </p>
          <div className="space-y-2 mb-6 text-xl">
            <div className="flex items-center text-gray-700">
              <span className="font-medium">Best Courses</span>
            </div>
            <div className="flex items-center text-gray-700">
              <span className="font-medium">Top rated Instructors</span>
            </div>
          </div>
          <button
            className="py-2.5 max-w-[150px] px-5 border-4 border-[#B4A7F5] rounded-full
           text-[#B4A7F5] hover:bg-[#B4A7F5] hover:text-white
            transition-all duration-300 hover:border-[#B4A7F5]"
          >
            Read More
          </button>
        </div>
      </div>

      <div className="mt-20 p-10 flex justify-center items-center gap-5 font-sans">
        <div className="flex pl-5 bg-[#FF657599] rounded-2xl max-w-[640px] h-[214px] ">
          <div className="flex flex-col justify-center  gap-6">
            <h2 className="text-2xl  text-[#002058] font-bold">
              Become An Instructor
            </h2>
            <p className="max-w-[350px] text-xl  text-slate-600 ">
              Top instructors from around the world teach millions of students
              on Mentoring
            </p>
          </div>
          <div>
            <Image src={instructor} alt="instructor" />
          </div>
        </div>
        <div className="flex pl-5 bg-[#ffe88f] rounded-2xl max-w-[640px]">
          <div className="flex flex-col justify-center  gap-6">
            <h2 className="text-2xl text-[#002058] font-bold">
              Transform Access To Education
            </h2>
            <p className="max-w-[350px] text-xl  text-slate-600 ">
              Create an account to receive our newsletter, course
              recommendations and promotions.
            </p>
          </div>
          <div>
            <Image src={student} alt="student" height={214} />
          </div>
        </div>
      </div>
    </>
  );
}
