import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

const YOUR_DOMAIN = "http://localhost:3000";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const prices = await stripe.prices.list({
      lookup_keys: [req.body.lookup_key],
      expand: ["data.product"],
    });
    const session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${YOUR_DOMAIN}/test/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    console.log(session);

    return new NextResponse(null, {
      status: 303,
      headers: { Location: session.url },
    });
  } catch (error) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }
}
