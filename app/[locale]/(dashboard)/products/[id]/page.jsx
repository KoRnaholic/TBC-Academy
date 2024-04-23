import SingleProduct from "../../../../../components/main-product/SingleProduct";
import { fetchProducts } from "../../../../../utils/helpers";
const URL = "https://dummyjson.com/products";

export async function generateStaticParams() {
  const response = await fetch(URL);
  const products = await response.json();

  const paths = products.products.map((product) => ({
    params: { id: `/products/${product.id}` },
  }));

  return paths;
}

export default async function Products({ params }) {
  const data = await fetchProducts(URL, params.id);

  return <SingleProduct data={data} />;
}
