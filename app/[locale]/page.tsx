import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainProduct from "../../components/top-courses/MainProduct";
import { ProductsResponse } from "../../types/types";
import MainBanner from "../../components/banner/MainBanner";
import { getCartQuantity } from "../actions";
import FeaturedCourses from "../../components/main-info/FeaturedCourses";
import TopCategories from "../../components/top-courses/TopCategories";

const URL = "https://dummyjson.com/products?limit=10";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("Index");
  const response = await fetch(URL);
  const data: ProductsResponse = await response.json();
  const products = data.products;

  unstable_setRequestLocale(locale);
  const quantity = await getCartQuantity();

  return (
    <div className="flex flex-col  min-h-screen">
      <Header quantity={quantity} />
      <MainBanner />
      <TopCategories />
      <FeaturedCourses />
      {/* <MainProduct
        name={{ name: t("product.name"), text: t("product.text") }}
        data={products}
      /> */}
      <Footer />
    </div>
  );
}
