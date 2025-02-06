
// Enable client-side rendering in Next.js (client components).
"use client";

// Import the CheckoutPage component and a helper function to convert amounts to subcurrency.
import CheckoutPage from "@/components/CheckoutPage";


import convertToSubcurrency from "@/lib/convertToSubcurrency";

// Import Stripe-specific components and methods for creating and managing payments.
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { useState } from "react";

// Validate that the public Stripe key is defined in the environment variables.
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

// Initialize the Stripe instance using the provided public key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// Define the main component for the home page.
export default function Home() {
  // The amount requested for payment.
  const amount = 500.99;


  // Return the main content of the page.
  return (
    <main className="max-w-4xl mx-auto p-8 text-white text-center border  border-black rounded-lg shadow-xl mt-10 mb-24  ">      
      {/* A header section for displaying who requested payment and how much. */}
      <div className="mb-8">
        

<h1 className="text-3xl font-bold mb-3 text-black">Submit Your Payment Request</h1>
<h2 className="text-1xl text-gray-900">
Fill in the required details below to proceed <span className="font-bold text-green-600">${amount}</span>
</h2>

      </div>

      {/* Wrap the checkout page in Stripe's Elements component, which provides context 
          for Stripe Elements within this part of the application. */}
      <div className="bg-black p-6 rounded-lg shadow-md text-black w-full max-w-lg mx-auto">
        <Elements
          stripe={stripePromise}       // The promise that resolves to a Stripe instance.
          options={{
            mode: "payment",           // The payment mode for Stripe Elements.
            amount: convertToSubcurrency(amount),  // Convert amount to subcurrency (e.g., cents).
            currency: "usd",           // The currency to use for the payment.
          }}
        >
          {/* Render the CheckoutPage component, passing the amount as a prop. */}
          <CheckoutPage amount={amount} />
        </Elements>
       
       
        
      </div>
     
     <Link href={"order"}>
      <button className={`w-48 mt-20 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300 `}>
         Order form
      </button>
      </Link>
    </main>
  );
}












