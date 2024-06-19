"use client";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { Course } from "../../../../../../types/types";
import { sqlCreatePurchase } from "../../../../../sql/sql-purchases/sqlCreatePurchase";

const stripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
export default function CheckoutForm({
  courses,
  clientSecret,
}: {
  courses: Course[] | null;
  clientSecret: string;
}) {
  const totalPrice = courses?.reduce(
    (acc, course) => acc + parseFloat(course.price) * course.quantity,
    0
  );

  return (
    <>
      <div className="border p-6 rounded-xl max-w-5xl w-full xl:w-1/2 mx-auto space-y-7 mt-40 transition-all duration-300">
        {courses?.map((course: Course) => {
          return (
            <div key={course.id} className="flex  gap-4 items-center">
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
          );
        })}

        <Elements options={{ clientSecret }} stripe={stripe}>
          <Form price={totalPrice} courses={courses} />
        </Elements>
      </div>
    </>
  );
}

function Form({
  price,
  courses,
}: {
  price: number | undefined;
  courses: Course[] | null;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  // const [email, setEmail] = useState<string>();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await sqlCreatePurchase(courses);

    if (stripe == null || elements == null) return;

    setIsLoading(true);

    // const orderExists = await userOrderExists();

    // if (orderExists) {
    //   setErrorMessage("You have already purchased this course!");
    //   setIsLoading(false);
    //   return;
    // }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("An unknown error accurred");
        }
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
      <div className="mt-3">
        <PaymentElement />
      </div>
      <div className="mt-4">
        <LinkAuthenticationElement
        //  onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        disabled={stripe == null || elements == null || isLoading}
        className={`${
          isLoading && "bg-[#b12d3a]"
        }w-full text-lg mt-5 rounded-md py-3 px-3 bg-[#FF6575] text-white`}
      >
        {isLoading ? "Puchasing..." : `Purchase - $${price}`}
      </button>
    </form>
  );
}
