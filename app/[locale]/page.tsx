import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainProduct from "../../components/main-product/MainProduct";
import { ProductsResponse } from "../../types/types";
import FeaturesSection from "../../components/main-product/FeaturesSection";
import MainBanner from "../../components/banner/MainBanner";

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

  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <MainBanner />
      <FeaturesSection />
      <MainProduct
        name={{ name: t("product.name"), text: t("product.text") }}
        data={products}
      />
      <Footer />
    </div>
  );
}
