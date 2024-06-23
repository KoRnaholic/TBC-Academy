import Link from "next/link";
import AboutCompany from "../../../../components/about-us/AboutCompany";

import AboutCourses from "../../../../components/about-us/AboutCourses";
import AboutMentor from "../../../../components/about-us/AboutMentor";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "DreamLMS - About Us",
  description:
    "Learn more about DreamLMS, our mission, vision, and the team dedicated to providing a comprehensive learning management system.",
  keywords:
    "about us, DreamLMS, mission, vision, team, learning management system",
};

export default function About() {
  const t = useTranslations("Aboutus.banner");
  return (
    <>
      <div>
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 "
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col  gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058]">{t("main")}</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                {t("home")}
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">{t("main")}</span>
            </div>
          </div>
        </div>
      </div>

      <AboutCompany />
      <AboutCourses />
      <AboutMentor />
    </>
  );
}
