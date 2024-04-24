import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainProduct from "../../components/main-product/MainProduct";

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

export default async function Home() {
  const response = await fetch(URL);
  const data: ProductsResponse = await response.json();
  const products = data.products;

  return (
    <div className="flex flex-col  min-h-screen">
      <Header />
      <MainProduct data={products} />
      <Footer />
    </div>
  );
}
