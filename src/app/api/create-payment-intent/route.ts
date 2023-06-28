// This is your test secret API key.
// Partial of ./pages/api/checkout_sessions/index.ts
// ...

import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";


// This is your test secret API key.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});
// console.log("THIS IS STRIPE API BACKEND :::" + stripe)

 const calculateOrderAmount = (items:any) => {
  // console.log(items)
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};
async function readRequestBody(request: NextRequest) {
  const reader = request.body.getReader();
  let result = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += new TextDecoder().decode(value);
  }
  return JSON.parse(result);
}

export async function POST(req:NextRequest, res:NextResponse) {
  const parsedData = await readRequestBody(req);
  const { items } = parsedData; 
  // console.log("THIS IS THE ITEMS :::", items)

  const headers = req.headers;
  // console.log("THIS IS THE HEADERS :::", headers)

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });
  const responseBody = JSON.stringify({ clientSecret: paymentIntent.client_secret });

  return new NextResponse(responseBody, {
    headers: { 'Content-Type': 'application/json' },
  });

};

