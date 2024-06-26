import Stripe from "stripe";
import { sqlGetCartItems } from "../../../../../sql/sqlGetCartItems";
import CheckoutForm from "../_components/CheckoutForm";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function PurchasePage() {
  const courses = await sqlGetCartItems();
  const t = await getTranslations("Cart.checkout");

  const cartCheckoutTr = {
    price: t("price"),
    quantity: t("quantity"),
    purchase: t("purchase"),
    purchasing: t("purchasing"),
  };

  if (!courses || courses.length === 0) {
    return notFound();
  }
  //   const price = courses[0]?.quantity * courses[0]?.price * 100;
  const totalPrice = courses?.reduce(
    (acc, course) => acc + Number(course.price) * course.quantity,
    0
  );

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice * 100,
    currency: "USD",
    metadata: { productId: courses[0].id },
  });

  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create payment intent");
  }

  return (
    <CheckoutForm
      cartCheckoutTr={cartCheckoutTr}
      courses={courses}
      clientSecret={paymentIntent.client_secret}
    />
  );
}
