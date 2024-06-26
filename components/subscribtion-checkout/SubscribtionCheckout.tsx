"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import success from "../../public/icons/success.svg";
import { sqlSubExists } from "../../app/sql/sql-subscription/sqlSubExists";

interface PackageTransl {
  month: string;
  quarter: string;
  annual: string;
  free: string;
  purchased: string;
  buy: string;
}

const ProductDisplay = ({
  exists,
  packageTransl,
}: {
  exists: boolean | undefined;
  packageTransl: PackageTransl;
}) => (
  <>
    <div className="mt-40 flex flex-col md:flex-row justify-center gap-5 px-10">
      <div className="group gap-8 hover:bg-[#FF6575] transition-all duration-500 bg-white dark:bg-gray-800 flex flex-col justify-between border border-[#FF6575] p-6 rounded-xl md:w-1/4 text-center space-y-4">
        <h2 className="text-[#FF6575] text-lg font-bold group-hover:text-white dark:text-white ">
          {packageTransl.month}
        </h2>
        <div className="text-[#FF6575] text-4xl font-extrabold group-hover:text-white dark:text-white ">
          $9.49
        </div>
        <div className="text-[#FF6575] text-xl font-medium group-hover:text-white dark:text-white ">
          / 1 {packageTransl.free}
        </div>

        {exists ? (
          <span className="text-green-400 group-hover:text-white dark:text-green-400 ">
            {packageTransl.purchased}
          </span>
        ) : (
          <form action="/api/checkout-session/sub-starter" method="POST">
            <input type="hidden" name="lookup_key" value="Starter-e5d15c0" />
            <button
              className="bg-[#FF6575] hover:-translate-y-2 transition-all group-hover:bg-white group-hover:text-[#FF6575] dark:bg-gray-800 dark:group-hover:bg-white py-3 px-6 text-white rounded-lg shadow-md hover:bg-[#ff5468] duration-300"
              id="checkout-and-portal-button"
              type="submit"
            >
              {packageTransl.buy}
            </button>
          </form>
        )}
      </div>
      <div className="bg-white dark:bg-gray-800 flex group flex-col transition-all duration-500 hover:bg-[#FF6575] justify-between border border-[#FF6575] p-6 rounded-xl md:w-1/4 text-center space-y-4">
        <h2 className="text-[#FF6575] text-lg font-bold group-hover:text-white dark:text-white ">
          {packageTransl.quarter}
        </h2>
        <div className="text-[#FF6575] text-4xl font-extrabold group-hover:text-white dark:text-white ">
          $25.99
        </div>
        <div className="text-[#FF6575] text-xl font-medium group-hover:text-white dark:text-white ">
          / 3 {packageTransl.free}
        </div>

        {exists ? (
          <span className="text-green-400 group-hover:text-white dark:text-green-400 ">
            {packageTransl.purchased}
          </span>
        ) : (
          <form action="/api/checkout-session/sub-quarterly" method="POST">
            <input type="hidden" name="lookup_key" value="Quarterly-79c3a43" />
            <button
              className="bg-[#FF6575] py-3 px-6 hover:-translate-y-2 transition-all text-white rounded-lg group-hover:bg-white group-hover:text-[#FF6575] dark:bg-gray-800 dark:group-hover:bg-white shadow-md hover:bg-[#ff5468] duration-300"
              id="checkout-and-portal-button"
              type="submit"
            >
              {packageTransl.buy}
            </button>
          </form>
        )}
      </div>
      <div className="bg-white dark:bg-gray-800 border group flex transition-all duration-500 hover:bg-[#FF6575] flex-col justify-between border-[#FF6575] p-6 rounded-xl md:w-1/4 text-center space-y-4">
        <h2 className="text-[#FF6575] text-lg font-bold group-hover:text-white dark:text-white ">
          {packageTransl.annual}
        </h2>
        <div className="text-[#FF6575] text-4xl font-extrabold group-hover:text-white dark:text-white ">
          $34.99
        </div>
        <div className="text-[#FF6575] text-xl font-medium group-hover:text-white dark:text-white ">
          / 6 {packageTransl.free}
        </div>

        {exists ? (
          <span className="text-green-400 group-hover:text-white dark:text-green-400 ">
            {packageTransl.purchased}
          </span>
        ) : (
          <form action="/api/checkout-session/sub-semi-annual" method="POST">
            <input
              type="hidden"
              name="lookup_key"
              value="Semi-Annual-7d5ce48"
            />
            <button
              className="bg-[#FF6575] py-3 px-6 hover:-translate-y-2 transition-all text-white rounded-lg group-hover:bg-white group-hover:text-[#FF6575] dark:bg-gray-800 dark:group-hover:bg-white shadow-md hover:bg-[#ff5468] duration-300"
              id="checkout-and-portal-button"
              type="submit"
            >
              {packageTransl.buy}
            </button>
          </form>
        )}
      </div>
    </div>
  </>
);

const SuccessDisplay = () => {
  return (
    <div className="border p-8 rounded-2xl max-w-5xl w-full xl:w-1/2 mx-auto space-y-8 mt-40 transition-all duration-300 shadow-lg bg-white dark:bg-gray-800">
      <h1 className="text-5xl text-green-500 text-center font-semibold">
        <span className="flex justify-center items-center gap-3">
          Purchase Successful!
          <Image src={success} alt="success" width={40} height={40} />
        </span>
      </h1>

      <div className="text-center text-gray-700 dark:text-white">
        Thank you for your purchase!
      </div>
    </div>
  );
};

const Message = ({ message }: { message: string }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function SubscriptionCheckout({
  packageTransl,
}: {
  packageTransl: PackageTransl;
}) {
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(false);
  let [sessionId, setSessionId] = useState("");
  const [exists, setExists] = useState<boolean | undefined>();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    async function subExists() {
      const data = await sqlSubExists();

      setExists(data?.exists);
    }

    if (query.get("success")) {
      setSuccess(true);
      const sessionId = query.get("session_id");
      if (sessionId) {
        setSessionId(sessionId);
      }
    }

    if (query.get("canceled")) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
    subExists();
  }, [sessionId]);

  if (!success && message === "") {
    return <ProductDisplay packageTransl={packageTransl} exists={exists} />;
  } else if (success && sessionId !== "") {
    return <SuccessDisplay />;
  } else {
    return <Message message={message} />;
  }
}
