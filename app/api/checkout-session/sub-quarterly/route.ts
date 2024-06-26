import { getSession } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

const URL = process.env.BASE_URL;

export async function POST() {
  const data = await getSession();

  const email = data?.user.email;
  try {
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [
        {
          price: "price_1PV9NE09Mjca8p4zRvesAiJv",
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${URL}/test/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${URL}?canceled=true`,
      customer_email: email,
    });

    if (!session.url) {
      throw new Error("Failed to create Stripe session.");
    }

    return new NextResponse(null, {
      status: 303,
      headers: { Location: session.url },
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
