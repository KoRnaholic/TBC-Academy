import Image from "next/image";
import pencil from "../../public/icons/courses-icons/pencil.svg";
import expert from "../../public/icons/courses-icons/expert.svg";
import medal from "../../public/icons/courses-icons/medal.svg";
import student from "../../public/icons/courses-icons/student.svg";
import { useTranslations } from "next-intl";

export default function MainInfo() {
  const t = useTranslations("Index.maininfo");
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
              <p className="text-[#685F78] font-semibold">{t("courses")}</p>
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
              <p className="text-[#685F78] font-semibold">{t("tutors")}</p>
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
              <p className="text-[#685F78] font-semibold">{t("certified")}</p>
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
              <p className="text-[#685F78] font-semibold">{t("students")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
