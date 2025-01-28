"use client";
import { buttonVariants } from "@/lib/variants";
import { Modal } from "antd";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "@/components/CheckoutPage/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { useCreatePaymentMutation } from "@/redux/api/paymentApi";
import { toast } from "sonner";
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const SubscriptionCard = ({
  plan,
  index,
  isInView,
  initialMotion,
  visibleMotion,
}) => {
  const [createPayment] = useCreatePaymentMutation();
  const handlePayment = async (plan) => {
    const data = {
      subcriptionId: plan?._id,
      amount: plan?.price,
      subcriptionName: plan?.name,
    };
    console.log("data", data);
    const toastId = toast.loading("Payment processing...");
    try {
      const res = await createPayment(data).unwrap();
      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      if (res.data && res.data.attributes) {
        window.location.href = res.data.attributes;
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "An error occurred during payment", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <motion.div
      initial={initialMotion}
      animate={isInView ? visibleMotion : {}}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        },
      }}
      key={index}
      className="w-full  flex flex-col justify-between bg-[#EAECF4] text-white py-10 px-5 rounded-3xl shadow-lg"
    >
      <div>
        <div className="flex flex-col ">
          {plan?.popular && (
            <h3 className="mx-auto text-sm text-center text-[#175C99] font-bold mb-2 bg-[#E9F5FF] w-28 rounded-lg">
              Most Popular
            </h3>
          )}

          <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-center text-black font-bold mb-2 ">
            {plan?.name}
          </p>
        </div>
        <p className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-10 text-black">
          {plan?.price}$
        </p>
        <p className="text-sm sm:text-lg lg:text-xl text-black text-center">
          {plan?.duration} days
        </p>
        <ul className="mb-10">
          {plan?.features?.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center gap-2">
              <div className="p-1 rounded-full bg-[#3598F126] -mt-4">
                <MdOutlineDone className="size-5 text-[#037EEE]" />
              </div>
              <p className="text-sm sm:text-lg lg:text-xl text-black mb-5">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {plan?.price != 0 ? (
        <div>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileTap="tap"
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 7,
            }}
            onClick={() => handlePayment(plan)}
            className="flex items-center justify-center gap-2 w-full py-3 sm:text-xl lg:text-2xl rounded-2xl text-white font-bold bg-[#2B4257]"
          >
            Subscribe
            <FaArrowRightLong />
          </motion.button>
        </div>
      ) : (
        <></>
      )}

      {/* <Modal
        title="Subscription Payment"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        width={1000}
      >
        <main className="max-w-6xl mx-auto p-10 text-black text-center border m-10 rounded-md ">
          <div className="mb-10">
            <h2 className="text-2xl">
              You request for payment
              <span className="font-bold"> ${plan?.price}</span>
            </h2>
          </div>

          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(plan?.price),
              currency: "usd",
            }}
          >
            <CheckoutPage
              amount={plan?.price}
              id={plan?._id}
              setIsModalOpen={setIsModalOpen}
            />
          </Elements>
        </main>
      </Modal> */}
    </motion.div>
  );
};

export default SubscriptionCard;
