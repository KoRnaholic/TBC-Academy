import Image from "next/image";
import Stripe from "stripe";
import { notFound } from "next/navigation";
import Link from "next/link";
import { clearCart } from "../../../../actions";
import success from "../../../../../public/icons/success.svg";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function PurchaseSuccessPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );
  const isSuccess = paymentIntent.status === "succeeded";

  if (isSuccess) {
    await clearCart();
  }
  if (paymentIntent.metadata.productId == null) return notFound();

  return (
    <>
      <div className="border p-8 rounded-2xl max-w-5xl w-full xl:w-1/2 mx-auto space-y-8 mt-40 transition-all duration-300 shadow-lg bg-white dark:bg-gray-800">
        <h1 className="text-5xl text-green-500 text-center font-semibold">
          {isSuccess ? (
            <span className="flex justify-center items-center gap-3">
              Purchase Successful!
              <Image src={success} alt="success" width={40} height={40} />
            </span>
          ) : (
            <span className="text-red-500">Purchase Failed!</span>
          )}
        </h1>

        {isSuccess && (
          <div className="text-center text-gray-700 dark:text-white">
            Thank you for your purchase!
          </div>
        )}

        <div className="flex justify-center mt-6">
          {isSuccess ? (
            <Link
              href="/dashboard/my-courses"
              passHref
              className="bg-[#FF6575] py-3 px-6 text-white rounded-lg shadow-md hover:bg-[#ff5468] transition-colors duration-300"
            >
              Go To My Courses
            </Link>
          ) : (
            <Link
              href={``}
              passHref
              className="bg-[#FF6575] py-3 px-6 text-white rounded-lg shadow-md hover:bg-[#ff5468] transition-colors duration-300"
            >
              Try Again
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
