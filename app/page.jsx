import MainProduct from "@/components/main-product/MainProduct";

const URL = "https://dummyjson.com/products";

export default async function Home() {
  const response = await fetch(URL);
  const data = await response.json();

  return <MainProduct data={data.products} />;
}
