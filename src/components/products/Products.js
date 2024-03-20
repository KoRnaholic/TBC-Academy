import ProductCard from "./ProductCard";
import laptop from "../images/laptop.jpg";
import smartphone from "../images/smartphone1.jpg";
import MacBook from "../images/macbook.jpg";

const products = [
  {
    title: "Laptop",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: laptop,
  },
  {
    title: "Smartphone",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: smartphone,
  },
  {
    title: "MacBook",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: MacBook,
  },
  {
    title: "Laptop",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: laptop,
  },
  {
    title: "Laptop",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: laptop,
  },
  {
    title: "Laptop",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: laptop,
  },
];

export default function Products(props) {
  return (
    <div
      className="flex  overflow-y-auto flex-wrap justify-center items-center py-10 px-16 gap-5"
      style={{ maxHeight: "430px" }}
    >
      <ProductCard products={products} />
    </div>
  );
}
