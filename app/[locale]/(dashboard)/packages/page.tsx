import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <>
      <div>
        <div
          className="mt-20 w-full h-[190px] relative bg-center bg-no-repeat bg-cover pt-12 "
          style={{
            backgroundImage: "url('/images/bg-about.png')",
            backgroundColor: "rgba(250, 246, 246, .9)",
          }}
        >
          <div className="flex flex-col  gap-3 items-center justify-center">
            <h1 className="text-5xl text-[#002058]">Packages</h1>
            <div className="flex gap-2 text-lg">
              <Link href="/" className="text-[#002058]">
                Home
              </Link>
              <span className="text-red-500 text-xl">-</span>
              <span className="text-[#685f78]">Packages</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 flex justify-center gap-5 px-10 h-80">
        <div className="group hover:bg-[#FF6575] transition-all duration-500 bg-white flex flex-col justify-between border border-[#FF6575] p-6 rounded-xl w-1/4 text-center space-y-4">
          <h2 className="text-[#FF6575] text-lg font-bold group-hover:text-white">
            Monthly
          </h2>
          <div className="text-[#FF6575] text-4xl font-extrabold group-hover:text-white">
            $9.49
          </div>
          <div className="text-[#FF6575]  text-xl font-medium group-hover:text-white">
            / 1 month
          </div>
          <Link
            target="_blank"
            href="https://buy.stripe.com/test_dR617Gflmepy5JS6op?prefilled_email=kminchele@gmail.com"
            className="w-1/2 mx-auto py-2 bg-[#FF6575] group-hover:bg-white group-hover:text-[#FF6575] text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
          >
            Buy
          </Link>
        </div>
        <div className="bg-white flex flex-col justify-between border border-[#FF6575] p-6 rounded-xl w-1/4 text-center space-y-4">
          <h2 className="text-[#FF6575] text-lg font-bold">Quarterly</h2>
          <div className="text-[#FF6575] text-4xl font-extrabold">$17.99</div>
          <div className="text-[#FF6575] text-xl font-medium">/ 3 month</div>

          <Link
            target="_blank"
            href="https://buy.stripe.com/test_fZe8A8a124OYgow8wy?prefilled_email=kminchele@gmail.com"
            className="w-1/2 mx-auto py-2 bg-[#FF6575] text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
          >
            Buy
          </Link>
        </div>
        <div className="bg-white border flex flex-col justify-between border-[#FF6575] p-6 rounded-xl w-1/4 text-center space-y-4">
          <h2 className="text-[#FF6575] text-lg font-bold">Semi-Annual</h2>
          <div className="text-[#FF6575] text-4xl font-extrabold">$33.99</div>
          <div className="text-[#FF6575] text-xl font-medium">/ 6 month</div>
          <Link
            target="_blank"
            href="https://buy.stripe.com/test_28o6s0ehi81a1tC3cf?prefilled_email=kminchele@gmail.com"
            className="w-1/2 mx-auto py-2 bg-[#FF6575] text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
          >
            Buy
          </Link>
        </div>
      </div>
    </>
  );
}
