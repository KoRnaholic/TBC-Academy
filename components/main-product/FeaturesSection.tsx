import Image from "next/image";
import shipping from "../../public/icons/shipping.svg";
import phone from "../../public/icons/phone.svg";
import rotate from "../../public/icons/rotate.svg";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("Index.features");

  return (
    <div className="flex-col flex md:flex-row sm:flex-wrap gap-5 py-16 px-5 sm:px-20 justify-around bg-[#f5f5f5]">
      <div className="flex gap-3 items-center">
        <Image
          className="border-2 rounded-full py-4 px-3   border-orange-500 border-dotted"
          width={65}
          height={65}
          src={shipping}
          alt="shipping"
        />
        <div>
          <h3 className="text-xl">{t("shipping.name")}</h3>
          <p className="font-thin text-gray-400">{t("shipping.text")}</p>
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
          <h3 className="text-xl">{t("support.name")}</h3>
          <p className="font-thin text-gray-400">{t("support.text")}</p>
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
          <h3 className="text-xl">{t("refund.name")}</h3>
          <p className="font-thin text-gray-400">{t("refund.text")}</p>
        </div>
      </div>
    </div>
  );
}
