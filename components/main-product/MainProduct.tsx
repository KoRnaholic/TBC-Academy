"use client";
import React, { useRef, useState } from "react";
import ProductCard from "../products/ProductCard";
import { Search } from "../search/Search";
import { DataResponse } from "../../types/types";

export default function MainProduct({ data, name }: DataResponse) {
  const [product, setProduct] = useState(data);
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");
  const debounceTimeout = useRef<number | null>(null);
  // console.log(product);

  //Searching with debounce
  const handleSearch = (value: string) => {
    setSearch(value);
    console.log(value);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = window.setTimeout(() => {
      const currentProduct = data.filter((product) =>
        product.title.toLowerCase().includes(value.trim().toLowerCase())
      );
      setProduct(currentProduct);
    }, 500);
  };

  //Sorting
  const handleSort = (criteria: string) => {
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
    <div className="p-4 sm:p-8 flex-grow  dark:bg-slate-700">
      <div className="flex flex-col gap-2 justify-center items-center p-5 sm:p-10">
        <h1 className="text-4xl md:text-5xl">
          <span className="text-[#F28123]">{name.name}</span> {name.text}
        </h1>
        <hr className="w-16 h-1 bg-[#F28123] border-none" />
        <p className="mt-2 w-2/3 md:w-1/3 text-center text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>
      </div>

      <Search
        setSort={handleSort}
        sortBy={sortBy}
        search={search}
        setSearch={handleSearch}
      />
      <div className="flex overflow-y-auto mt-10  flex-wrap justify-center items-center py-10 px-4 sm:px-16  gap-10 max-h-[580px]">
        <ProductCard products={product} />
      </div>
    </div>
  );
}
