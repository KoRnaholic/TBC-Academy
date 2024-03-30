import React, { useState } from "react";
import ProductCard from "../products/ProductCard";
import laptop from "../images/laptop.jpg";
import smartphone from "../images/smartphone1.jpg";
import MacBook from "../images/macbook.jpg";
import { Search } from "../UI/Search";

const products = [
  {
    title: "Laptop",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: laptop,
    price: 119.99,
  },
  {
    title: "Smartphone",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: smartphone,
    price: 149.99,
  },
  {
    title: "Smartphone",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: smartphone,
    price: 199.99,
  },
  {
    title: "Smartphone",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: smartphone,
    price: 179.99,
  },
  {
    title: "MacBook",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: MacBook,
    price: 289.99,
  },
  {
    title: "MacBook",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: MacBook,
    price: 489.99,
  },
  {
    title: "MacBook",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: MacBook,
    price: 589.99,
  },
  {
    title: "Laptop",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: laptop,
    price: 129.99,
  },
  {
    title: "Laptop",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: laptop,
    price: 159.99,
  },
  {
    title: "Laptop",
    description:
      "Product Description. Lorem ipsum dolor sit amet, consecteturadipisicing elit.",
    image: laptop,
    price: 219.99,
  },
];
export default function Home() {
  const [product, setProduct] = useState(products);
  const [sortBy, setSortBy] = useState("");

  const handleSort = (criteria) => {
    if (criteria === "input") {
      setProduct(products);
    }
    if (criteria === "price") {
      const sortedByPrice = [...product].sort((a, b) => a.price - b.price);
      setProduct(sortedByPrice);
    }
    if (criteria === "name") {
      const sortedByName = [...product].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setProduct(sortedByName);
    }
    setSortBy(criteria);
  };

  return (
    <div>
      <Search setSort={handleSort} sortBy={sortBy} />
      <div className="flex overflow-y-auto flex-wrap justify-center items-center py-10 px-16 gap-5 max-h-[430px]">
        <ProductCard products={product} />
      </div>
    </div>
  );
}
