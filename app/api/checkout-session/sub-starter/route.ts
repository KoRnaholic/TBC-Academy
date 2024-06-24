import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

const YOUR_DOMAIN = process.env.BASE_URL;

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [
        {
          price: "price_1PUxY909Mjca8p4zWdSIOH15",
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `https://tbc-academy-git-refactoring-2-kornaholics-projects.vercel.app//test/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://tbc-academy-git-refactoring-2-kornaholics-projects.vercel.app/?canceled=true`,
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
