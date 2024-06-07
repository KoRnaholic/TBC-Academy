import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

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
  // const t = await getTranslations("Index");
  // console.log(t);
  const courses: Course[] | QueryResultRow[] = await getCourses();

  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <MainBanner />
      <TopCategories />
      <FeaturedCourses courses={courses} />
      {/* <MainProduct
        name={{ name: t("product.name"), text: t("product.text") }}
        data={products}
      /> */}
      <Footer />
    </div>
  );
}
