// import { useTranslations } from "next-intl";
import Link from "next/link";
import errorBg from "../../public/images/error/error-404.png";
import Image from "next/image";

export default function NotFoundPage() {
  //   const t = useTranslations('NotFoundPage');
  return (
    <div
      className=" w-full  h-screen relative bg-center bg-no-repeat bg-cover pt-20 md:pt-52 md:pb-36 font-sans"
      style={{ backgroundImage: "url('/images/error/error-bg.png')" }}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <Image src={errorBg} alt="error" />

        <h2 className="text-[#fa5560] text-4xl font-bold">Oh No! Error 404</h2>
        <p>
          This page you requested counld not found. May the force be with you!
        </p>
        <Link
          className="px-5 py-2 bg-[#FF6575] hover:bg-[#de4e58] rounded-full text-white font-semibold"
          href="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
