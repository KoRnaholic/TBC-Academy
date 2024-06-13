import Image from "next/image";
import girlImg from "../../public/images/about-img.png";

export default function AboutCompany() {
  return (
    <div className="pt-8 mt-14 flex justify-center">
      <div>
        <h2 className="text-[#FF6575] text-xl font-semibold mb-6">
          About Our Company
        </h2>
        <h1 className="text-5xl font-bold text-blue-900 mb-6">
          Master the skills to drive your career
        </h1>
        <div className="space-y-4 text-gray-500 font-regular">
          <p className="max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Eget aenean accumsan bibendum gravida maecenas
            augue elementum et neque. Suspendisse imperdiet.
          </p>
          <p className="max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Eget aenean accumsan bibendum gravida maecenas
            augue elementum et neque. Suspendisse imperdiet.
          </p>
          <p className="max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Eget aenean accumsan bibendum gravida maecenas
            augue elementum et neque. Suspendisse imperdiet.
          </p>
          <p className="max-w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
            accumsan bibendum gravida maecenas augue elementum et neque.
            Suspendisse imperdiet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Eget aenean accumsan bibendum gravida maecenas
            augue elementum et neque. Suspendisse imperdiet.
          </p>
        </div>
      </div>

      <div>
        <Image
          src={girlImg}
          alt="girl-image"
          width={530}
          loading="lazy"
          height={500}
          placeholder="blur"
        />
      </div>
    </div>
  );
}
