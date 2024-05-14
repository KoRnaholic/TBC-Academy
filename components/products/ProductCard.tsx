"use client";
import Image from "next/image";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ProductsResponse } from "../../types/types";
import arrowRight from "../../public/icons/arrow-right.svg";
import { useCart } from "../contexts/CartContext";

export default function ProductCard({ products }: ProductsResponse) {
  const locale = useLocale();

  const { addToCart } = useCart();

  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/products/${id}`, { scroll: false });
  };

  return (
    <>
      {products.map((product, index) => {
        const { title, thumbnail, price, id, discountPercentage } = product;
        return (
          <div
            // onClick={() => handleClick(id)}
            key={index}
            className="max-w-[270px] relative w-[300px] pb-2 mx-auto bg-white dark:bg-slate-300 shadow-lg rounded-lg  transition ease-in-out delay-0
          hover:-translate-y-1 hover:scale-105 duration-300"
          >
            <span className="flag-discount">
              {discountPercentage.toFixed(0)}% Off
            </span>
            <Image
              className="w-full h-40  object-cover rounded-t-lg object-center"
              src={thumbnail}
              alt="product"
              width={200}
              height={200}
              quality={100}
              loading="lazy"
            />

            <div className="p-4 flex flex-col gap-3 items-center">
              <h2 className="text-gray-900 font-bold text-xl mb-2">
                {title.slice(0, 20)}
              </h2>
              <span className="text-gray-400 text-lg">price</span>
              <span className="text-gray-900 font-bold text-lg">{price}$</span>
              <div className="mt-3 flex items-center gap-2 justify-between">
                <Button onClick={handleClick} product={id}>
                  {locale === "en" ? (
                    <p className="flex items-center gap-1 ">
                      Show more
                      <Image src={arrowRight} width={15} alt="arrow" />
                    </p>
                  ) : (
                    "სრულად ნახვა"
                  )}
                </Button>
                <Button onClick={addToCart} product={product}>
                  add to cart
                </Button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="fixed z-10 top-2 right-40 text-orange-500">
        {/* {quantity} */}
      </div>
    </>
  );
}
