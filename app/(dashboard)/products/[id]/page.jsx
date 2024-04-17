import Loading from "@/app/loading";
import SingleProduct from "@/components/main-product/SingleProduct";
const URL = "https://dummyjson.com/products";

export default async function Products({ params }) {
  const response = await fetch(`${URL}/${params.id}`);
  const data = await response.json();

  return (
    <>
      <SingleProduct data={data} />
    </>
  );
}
