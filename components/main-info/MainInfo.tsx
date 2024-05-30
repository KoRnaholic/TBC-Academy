import Image from "next/image";
import pencil from "../../public/icons/courses-icons/pencil.svg";
import expert from "../../public/icons/courses-icons/expert.svg";
import medal from "../../public/icons/courses-icons/medal.svg";
import student from "../../public/icons/courses-icons/student.svg";

export default function MainInfo() {
  return (
    <div className="-mt-14 font-sans">
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full max-w-full md:max-w-[305px] z-10">
          <div
            className="flex  flex-col lg:flex-row  justify-start items-center gap-5 py-5 px-5 shadow-md bg-[#fff]
           rounded-2xl hover:-translate-y-3 transition-all duration-500"
          >
            <Image src={pencil} alt="image" />
            <div>
              <p className="text-[#002058] text-2xl font-bold text-center xl:text-start">
                4K
              </p>
              <p className="text-[#685F78] font-semibold">Online Courses</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full md:max-w-[305px] z-10">
          <div
            className="flex flex-col lg:flex-row  justify-start items-center gap-5 py-5 px-5 shadow-md bg-[#fff]
            rounded-2xl hover:-translate-y-3 transition-all duration-500"
          >
            <Image src={expert} alt="image" />
            <div>
              <p className="text-[#002058] text-2xl font-bold text-center xl:text-start">
                92+
              </p>
              <p className="text-[#685F78] font-semibold">Expert Tutors</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full md:max-w-[305px] z-10">
          <div
            className="flex flex-col lg:flex-row  justify-start items-center gap-5 py-5 px-5 shadow-md bg-[#fff]
            rounded-2xl hover:-translate-y-3 transition-all duration-500"
          >
            <Image src={medal} alt="image" />
            <div>
              <p className="text-[#002058] text-2xl font-bold text-center xl:text-start">
                1K+
              </p>
              <p className="text-[#685F78] font-semibold">Certified Courses</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full md:max-w-[305px] z-10">
          <div
            className="flex flex-col lg:flex-row  justify-start items-center gap-5 py-5 px-5 shadow-md bg-[#fff]
            rounded-2xl hover:-translate-y-3 transition-all duration-500"
          >
            <Image src={student} alt="image" />
            <div>
              <p className="text-[#002058] text-2xl font-bold text-center xl:text-start">
                26K+
              </p>
              <p className="text-[#685F78] font-semibold">Online Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
