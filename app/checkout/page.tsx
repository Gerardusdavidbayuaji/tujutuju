"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");

  const fetchClientSecret = useCallback(async () => {
    if (!orderId || !cartId) {
      console.error("Missing orderId or cartId");
      return null;
    }

    try {
      const response = await axios.post("/api/payment", { orderId, cartId });
      return response.data.clientSecret;
    } catch (error) {
      console.error("Error fetching client secret:", error);
      return null;
    }
  }, [orderId, cartId]);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
