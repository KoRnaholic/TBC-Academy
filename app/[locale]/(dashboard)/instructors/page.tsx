import Link from "next/link";

import InstructorsGrid from "../../../../components/instructors/InstructorsGrid";
import { useTranslations } from "next-intl";

export const revalidate = 0;

export const metadata = {
  title: "DreamLMS - Instructors",
  description:
    "Meet our experienced instructors at DreamLMS and learn about their expertise and backgrounds.",
  keywords:
    "instructors, teachers, DreamLMS, online learning, education, expertise",
};

export default function InstructorsPage() {
  const t = useTranslations("Instructors");
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
            <h1 className="text-5xl text-[#002058]">{t("link")}</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                {t("home")}
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">{t("link")}</span>
            </div>
          </div>
        </div>
      </div>

      <InstructorsGrid />
    </>
  );
}
