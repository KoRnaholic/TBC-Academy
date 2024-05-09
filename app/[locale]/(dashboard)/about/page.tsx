import Image from "next/image";
import shipping from "../../../../public/icons/shipping.svg";
import rotate from "../../../../public/icons/rotate.svg";
import briefcase from "../../../../public/icons/briefcase.svg";
import money from "../../../../public/icons/money.svg";
import techFruit from "../../../../public/images/tech-fruit.jpg";

export default function About() {
  return (
    <>
      <div className="bg-[#07212e] flex items-center justify-center h-[450px]">
        <div className="flex-col gap-8  flex ">
          <h1 className="text-[#F28123] tracking-widest text-xl">
            WE DELIVER TECH DREAMS
          </h1>
          <h1 className="text-center text-white text-4xl sm:text-5xl ">
            About Us
          </h1>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-10 flex justify-center items-center">
        <div className="flex flex-col gap-10 ">
          <h2 className="text-4xl pl-10 mb-5">
            Why Open<span className="text-orange-400">Market</span>
          </h2>
          <div className="flex flex-col  sm:flex-row gap-5">
            <div className="flex items-start gap-4 ">
              <Image
                className="border-2 rounded-full py-4 px-3   border-orange-500 border-dotted"
                src={shipping}
                width={65}
                height={65}
                alt="shipping"
              />
              <div>
                <h3 className="text-2xl">Home Delivery</h3>
                <p className="w-full sm:w-2/3 text-gray-400">
                  sit voluptatem accusantium dolore mque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Image
                className="border-2 rounded-full py-4 px-3   border-orange-500 border-dotted"
                width={65}
                height={65}
                src={money}
                alt="shipping"
              />
              <div>
                <h3 className="text-2xl">Best Price</h3>

                <p className="w-full sm:w-2/3 text-gray-400">
                  sit voluptatem accusantium dolore mque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col  sm:flex-row gap-5">
            <div className="flex items-start gap-4">
              <Image
                className="border-2 rounded-full py-4 px-4   border-orange-500 border-dotted"
                width={65}
                height={65}
                src={briefcase}
                alt="shipping"
              />
              <div>
                <h3 className="text-2xl">Custom Box</h3>
                <p className="w-full sm:w-2/3 text-gray-400">
                  sit voluptatem accusantium dolore mque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Image
                className="border-2 rounded-full py-4 px-4   border-orange-500 border-dotted"
                width={65}
                height={65}
                src={rotate}
                alt="shipping"
              />
              <div>
                <h3 className="text-2xl">Quick Refund</h3>
                <p className="w-full sm:w-2/3 text-gray-400">
                  sit voluptatem accusantium dolore mque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex">
          <Image
            className="w-full rounded-sm mt-8"
            src={techFruit}
            width={800}
            alt="tech"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
}
