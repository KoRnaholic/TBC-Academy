import SingleProduct from "../../../../../components/main-product/SingleProduct";
import { fetchProducts } from "../../../../../utils/helpers";
const URL = "https://dummyjson.com/products";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsResponse {
  products: Product[];
}

interface Params {
  id: string;
}

export async function generateStaticParams() {
  const response = await fetch(URL);
  const products: ProductsResponse = await response.json();

  const paths = products.products.map((product) => ({
    params: { id: `/products/${product.id}` },
  }));

  return paths;
}

export default async function Products({ params }: { params: Params }) {
  const data = await fetchProducts(URL, params.id);

  return <SingleProduct data={data} />;
}
