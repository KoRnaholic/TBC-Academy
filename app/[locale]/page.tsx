import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainProduct from "../../components/main-product/MainProduct";
import { ProductsResponse } from "../../types/types";

const URL = "https://dummyjson.com/products";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const response = await fetch(URL);
  const data: ProductsResponse = await response.json();
  const products = data.products;
  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <MainProduct data={products} />
      <Footer />
    </div>
  );
}
