import Image from "next/image";
import mentorImg from "../../public/images/mentor-img.png";
import instructor from "../../public/images/instructor.png";
import student from "../../public/images/student.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslations } from "next-intl";

export default function AboutMentor() {
  const t = useTranslations("Aboutus.mentor");
  return (
    <>
      <div className="mt-[500px] md:mt-10 p-8 flex flex-col lg:flex-row justify-center items-center">
        <div>
          <Image src={mentorImg} alt="mentor-image" width={640} height={480} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 dark:text-blue-300 mb-4 max-w-[600px]">
            {t("header")}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 font-thin mb-6 max-w-[600px] text-xl">
            {t("text")}
          </p>
          <div className="space-y-3 mb-6 text-xl">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="font-medium flex items-center gap-2">
                <CheckCircleIcon className="text-[#FF6575]" />
                {t("courses")}
              </span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <span className="font-medium flex items-center gap-2">
                <CheckCircleIcon className="text-[#FF6575]" />
                {t("instructors")}
              </span>
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

      <div className="mt-20 px-5 mb-10 flex flex-col lg:flex-row justify-center items-center gap-5 font-sans">
        <div className="flex pl-5 bg-[#FF657599] dark:bg-[#c64854e5] rounded-2xl max-w-[640px] h-[214px] ">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-lg lg:text-2xl text-[#002058] dark:text-blue-300 font-bold">
              {t("become")}
            </h2>
            <p className="max-w-[350px] text-base lg:text-xl text-slate-600 dark:text-slate-100">
              {t("top")}
            </p>
          </div>
          <div>
            <Image src={instructor} alt="instructor" />
          </div>
        </div>
        <div className="flex pl-5 bg-[#ffe88f] dark:bg-[#f4d455a5] rounded-2xl max-w-[640px] h-[214px]">
          <div className="flex flex-col justify-center gap-6">
            <h2 className="text-lg lg:text-2xl text-[#002058] dark:text-blue-300 font-bold">
              {t("education")}
            </h2>
            <p className="max-w-[350px] text-base lg:text-xl text-slate-600 dark:text-slate-100">
              {t("account")}
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
