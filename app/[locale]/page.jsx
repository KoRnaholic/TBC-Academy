import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import MainProduct from "@/components/main-product/MainProduct";
import { useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const URL = "https://dummyjson.com/products";

export default async function Home() {
  const response = await fetch(URL);
  const data = await response.json();

  const t = await getTranslations("Index");
  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      {t("title")}

      <MainProduct data={data.products} />
      <Footer />
    </div>
  );
}
