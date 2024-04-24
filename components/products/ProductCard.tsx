"use client";
import Image from "next/image";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ProductsResponse } from "../../types/types";

export default function ProductCard({ products }: ProductsResponse) {
  const locale = useLocale();

  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  return (
    <>
      {products.map((product, index) => {
        const { title, description, thumbnail, price, id } = product;
        return (
          <div
            onClick={() => handleClick(id)}
            key={index}
            className="max-w-[270px] h-[350px] mx-auto bg-slate-50 dark:bg-slate-300 shadow-lg rounded-lg  transition ease-in-out delay-0
          hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <Image
              className="w-full h-40  object-cover rounded-t-lg object-center"
              src={thumbnail}
              alt="product"
              width={200}
              height={200}
              quality={100}
              priority
            />
            <div className="p-4 flex flex-col gap-1">
              <h2 className="text-gray-900 font-bold text-xl mb-2">
                {title.slice(0, 25)}
              </h2>
              <p className="text-gray-700 text-base">
                {description.slice(0, 40)}...
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-gray-900 font-bold">${price}</span>
                <Button>
                  {locale === "en" ? "Show more" : "სრულად ნახვა"}
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
