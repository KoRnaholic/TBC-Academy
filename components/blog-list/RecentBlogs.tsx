import Image from "next/image";
import img from "../../public/images/course-banner.png";

export default function RecentBlogs() {
  return (
    <>
      <div className="p-6 border rounded-lg">
        <h2>Recent Posts</h2>
        <div className="mt-6">
          <div className="flex gap-4 ">
            <Image
              className="rounded-md w-20 h-18 object-cover"
              src={img}
              width={200}
              height={100}
              alt="blog"
            />

            <div className="flex flex-col justify-between">
              <h3 className="text-[#002058] hover:text-[#FF6575] transition-all duration-300 cursor-pointer">
                Expand Your Career Opportunities…
              </h3>
              <p className="text-gray-500 text-sm">January 18, 2023</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex gap-4 ">
            <Image
              className="rounded-md w-20 h-18 object-cover"
              src={img}
              width={200}
              height={100}
              alt="blog"
            />

            <div className="flex flex-col justify-between">
              <h3>Expand Your Career Opportunities…</h3>
              <p className="text-gray-500 text-sm">January 18, 2023</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex gap-4 ">
            <Image
              className="rounded-md w-20 h-18 object-cover"
              src={img}
              width={200}
              height={100}
              alt="blog"
            />

            <div className="flex flex-col justify-between">
              <h3 className="text-[#002058]">
                Expand Your Career Opportunities…
              </h3>
              <p className="text-gray-500 text-sm">January 18, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
