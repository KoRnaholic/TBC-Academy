import Image from "next/image";
import shipping from "../../public/icons/shipping.svg";
import phone from "../../public/icons/phone.svg";
import rotate from "../../public/icons/rotate.svg";

export default function FeaturesSection() {
  return (
    <div className="flex-col flex md:flex-row sm:flex-wrap gap-5 py-16 px-20 justify-around bg-[#f5f5f5]">
      <div className="flex gap-3 items-center">
        <Image
          className="border-2 rounded-full py-4 px-3   border-orange-500 border-dotted"
          width={65}
          height={65}
          src={shipping}
          alt="shipping"
        />
        <div>
          <h3 className="text-xl">Free Shipping</h3>
          <p className="font-thin text-gray-400">When order over $75</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          className="border-2 rounded-full py-4 px-4   border-orange-500 border-dotted"
          width={65}
          height={65}
          src={phone}
          alt="phone"
        />
        <div>
          <h3 className="text-xl">24/7 Support</h3>
          <p className="font-thin text-gray-400">Get support all day</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Image
          className="border-2 rounded-full py-4 px-4   border-orange-500 border-dotted"
          width={65}
          height={65}
          src={rotate}
          alt="rotate"
        />
        <div>
          <h3 className="text-xl">Refund</h3>
          <p className="font-thin text-gray-400">Get refund within 3 days!</p>
        </div>
      </div>
    </div>
  );
}
