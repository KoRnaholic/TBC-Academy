"use client";
import React, { useRef, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { Search } from "@/components/search/Search";

export default function MainProduct({ data }) {
  const [product, setProduct] = useState(data);
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");
  const debounceTimeout = useRef(null);

  //Searching with debounce
  const handleSearch = (value) => {
    setSearch(value);
    console.log(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const currentProduct = data.filter((product) =>
        product.title.toLowerCase().includes(value.trim().toLowerCase())
      );
      setProduct(currentProduct);
    }, 500);
  };

  //Sorting
  const handleSort = (criteria) => {
    if (criteria === "input") {
      const sortedById = [...product].sort((a, b) => a.id - b.id);
      setProduct(sortedById);
      setSearch("");
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
    <div className="p-8 flex-grow  dark:bg-slate-700">
      <Search
        setSort={handleSort}
        sortBy={sortBy}
        search={search}
        setSearch={handleSearch}
      />
      <div className="flex overflow-y-auto flex-wrap justify-center items-center py-10 px-4 sm:px-16  gap-5 max-h-[580px]">
        <ProductCard products={product} />
      </div>
    </div>
  );
}
