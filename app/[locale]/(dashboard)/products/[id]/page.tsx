import SingleProduct from "../../../../../components/main-product/SingleProduct";
import { ProductsResponse } from "../../../../../types/types";
import { fetchProducts } from "../../../../../utils/helpers";
const URL = "https://dummyjson.com/products";

interface Params {
  id: string;
}

export async function generateStaticParams() {
  const response = await fetch(URL);
  const products: ProductsResponse = await response.json();

  const paths = products.products.map((product) => ({
    id: product.id.toString(),
  }));

  return paths;
}

export default async function Products({ params }: { params: Params }) {
  const data = await fetchProducts(URL, params.id);

  return <SingleProduct data={data} />;
}
