import { unstable_setRequestLocale } from "next-intl/server";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainProduct from "../../components/main-product/MainProduct";
import { ProductsResponse } from "../../types/types";
import Image from "next/image";
import FeaturesSection from "../../components/main-product/FeaturesSection";
import Link from "next/link";

const URL = "https://dummyjson.com/products?limit=10";

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

      <div
        className="w-full bg-cover bg-no-repeat h-screen items-center justify-center bg-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3219549/pexels-photo-3219549.jpeg?auto=compress&cs=tinysrgb&w=3260&h=2750&dpr=1)`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute flex-col gap-8 inset-0 flex items-center justify-center">
          <h1 className="text-[#F28123] font-semibold text-xl tracking-widest font-bolder ">
            SMART & SUSTAINABLE
          </h1>
          <h1 className="text-center text-white text-4xl sm:text-5xl ">
            Discover the Joy of Shopping
          </h1>

          <div className="flex flex-col w-full px-8 sm:flex-row sm:w-max  gap-5 text-[#fff]">
            <button className="bg-[#F28123] px-4 py-2 rounded-full hover:bg-[#051922] hover:text-[#F28123] transition duration-300">
              Product Collection
            </button>
            <button className="px-4 py-2 rounded-full border-2 border-[#F28123] hover:bg-[#F28123] transition duration-300">
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <MainProduct data={products} />
      <Footer />
    </div>
  );
}
