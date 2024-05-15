import { unstable_setRequestLocale } from "next-intl/server";
import SingleProduct from "../../../../../components/main-product/SingleProduct";
import { ProductsResponse } from "../../../../../types/types";
import { fetchProducts } from "../../../../../utils/helpers";

const URL = "https://dummyjson.com/products";

interface Params {
  id: string;
  locale: string;
}

export async function generateStaticParams() {
  const response = await fetch(URL);
  const products: ProductsResponse = await response.json();

  const paths = products.products.map((product) => ({
    locale: "en",
    id: product.id.toString(),
  }));
  const paths2 = products.products.map((product) => ({
    locale: "ka",
    id: product.id.toString(),
  }));

  return paths.concat(paths2);
}

export default async function Products({ params }: { params: Params }) {
  const data = await fetchProducts(URL, params.id);
  unstable_setRequestLocale(params.locale);

  return <SingleProduct data={data} />;
}
