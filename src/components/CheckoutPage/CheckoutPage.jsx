"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

const CheckoutPage = ({ amount, id, setIsModalOpen }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const [createPayment] = useCreatePaymentMutation();

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000`,
      },
      handleActions: false,
    });

    const toastId = toast.loading("Payment processing...");
    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      toast.error(error.message, { id: toastId, duration: 2000 });
    } else if (paymentIntent) {
      // Payment succeeded! Extract the payment method ID
      const paymentMethodId = paymentIntent.payment_method;

      const data = {
        paymentId: paymentIntent.id,
        paymentType: "Card",
      };

      setIsModalOpen(false);
      try {
        const res = await createPayment({ data: data, id: id }).unwrap();
        toast.success("Payment successful!", { id: toastId, duration: 2000 });
      } catch (error) {
        toast.error(error?.data?.message || "Failed to create payment", {
          id: toastId,
          duration: 2000,
        });
      }
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && <PaymentElement />}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-[#2B4257] mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;
