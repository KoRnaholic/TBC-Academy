import { unstable_setRequestLocale } from "next-intl/server";

import MainBanner from "../../components/banner/MainBanner";

import FeaturedCourses from "../../components/main-info/FeaturedCourses";
import TopCategories from "../../components/top-courses/TopCategories";
import { getCourses } from "../actions";
import { Course } from "../../types/types";
import { QueryResultRow } from "@vercel/postgres";

export const revalidate = 0;

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const courses: Course[] | QueryResultRow[] = await getCourses();

  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col  min-h-screen">
      <MainBanner />
      <TopCategories />
      <FeaturedCourses courses={courses} />
    </div>
  );
}
