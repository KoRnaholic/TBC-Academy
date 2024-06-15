import Image from "next/image";
import Stripe from "stripe";
import { notFound } from "next/navigation";
import Link from "next/link";
import { clearCart } from "../../../../actions";
import { sqlGetUserPurchases } from "../../../../sql/sql-purchases/sqlGetUserPurchases";
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

  const courses = await sqlGetUserPurchases();
  if (courses == null) return notFound();

  return (
    <>
      <div className="border p-6 rounded-xl max-w-5xl w-full xl:w-1/2 mx-auto space-y-7 mt-40 transition-all duration-300">
        <h1 className="text-5xl text-green-500 text-center">
          {isSuccess ? (
            <span className="flex">
              Success! <Image src={success} alt="success" />
            </span>
          ) : (
            "Error!"
          )}
        </h1>
        {courses?.map((course) => {
          return (
            <div key={course.id} className="flex  gap-4 items-center">
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    className="rounded-xl"
                    src={course.image}
                    width={200}
                    height={200}
                    alt="course"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-xl flex gap-4">
                    Price - ${Number(course.price) * course.quantity}{" "}
                    <span>Quantity : {course.quantity}</span>
                  </div>
                  <h1 className="text-xl">{course.name}</h1>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-center mt-5">
          {isSuccess ? (
            <Link
              className="bg-[#FF6575] py-3 px-4 text-white rounded-lg "
              href="/"
            >
              Go To Home Page
            </Link>
          ) : (
            <Link href={`/cart/checkout/${courses[0].name}`}>Try Again</Link>
          )}
        </div>
      </div>
    </>
  );
}
