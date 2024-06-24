import Image from "next/image";
import pencil from "../../public/icons/courses-icons/pencil.svg";
import expert from "../../public/icons/courses-icons/expert.svg";
import medal from "../../public/icons/courses-icons/medal.svg";
import student from "../../public/icons/courses-icons/student.svg";
import { useTranslations } from "next-intl";

export default function MainInfo() {
  const t = useTranslations("Index.maininfo");
  return (
    <div className="md:-mt-14 mt-5 font-sans">
      <div className="flex flex-wrap justify-center gap-6">
        {[
          { src: pencil, value: "4K", label: t("courses") },
          { src: expert, value: "92+", label: t("tutors") },
          { src: medal, value: "1K+", label: t("certified") },
          { src: student, value: "26K+", label: t("students") },
        ].map((item, index) => (
          <div key={index} className="w-full max-w-full md:max-w-[305px] z-10">
            <div className="flex flex-col lg:flex-row justify-start items-center gap-5 py-5 px-5 shadow-md bg-white dark:bg-[#1E1E2E] rounded-2xl hover:-translate-y-3 transition-all duration-500">
              <Image src={item.src} alt="image" />
              <div>
                <p className="text-[#002058] dark:text-[#F8F8F2] text-2xl font-bold text-center xl:text-start">
                  {item.value}
                </p>
                <p className="text-[#685F78] dark:text-[#f17c88] font-semibold">
                  {item.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
