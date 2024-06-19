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

      <div className="mt-40 flex justify-center gap-5">
        <div className="bg-gray-900 flex flex-col border border-red-400 p-6 rounded-xl w-1/3 text-center space-y-4">
          <h2 className="text-white text-lg font-bold">RANGIFER</h2>
          <div className="text-red-400 text-4xl font-extrabold">$9.49</div>
          <div className="text-white text-xl font-medium">/ 1 month</div>
          <Link
            target="_blank"
            href="https://buy.stripe.com/test_dR617Gflmepy5JS6op?prefilled_email=kminchele@gmail.com"
            className="w-1/2 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
          >
            Buy
          </Link>
        </div>
        <div className="bg-gray-900 flex flex-col border border-red-400 p-6 rounded-xl w-1/3 text-center space-y-4">
          <h2 className="text-white text-lg font-bold">RANGIFER</h2>
          <div className="text-red-400 text-4xl font-extrabold">$17.99</div>
          <div className="text-white text-xl font-medium">/ 1 month</div>
          <Link
            target="_blank"
            href="https://buy.stripe.com/test_fZe8A8a124OYgow8wy?prefilled_email=kminchele@gmail.com"
            className="w-1/2 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
          >
            Buy
          </Link>
        </div>
        <div className="bg-gray-900 border flex flex-col border-red-400 p-6 rounded-xl w-1/3 text-center space-y-4">
          <h2 className="text-white text-lg font-bold">RANGIFER</h2>
          <div className="text-red-400 text-4xl font-extrabold">$33.99</div>
          <div className="text-white text-xl font-medium">/ 1 month</div>
          <Link
            target="_blank"
            href="https://buy.stripe.com/test_28o6s0ehi81a1tC3cf?prefilled_email=kminchele@gmail.com"
            className="w-1/2 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-300"
          >
            Buy
          </Link>
        </div>
      </div>
    </>
  );
}
