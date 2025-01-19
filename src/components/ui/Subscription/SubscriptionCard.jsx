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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const amount = 49.99;
console.log("plan",plan?._id);

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
      className="w-full sm:min-h-[600px] max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[400px] flex flex-col justify-between bg-[#EAECF4] text-white p-10 rounded-3xl shadow-lg"
    >
      <div>
        <div className="flex flex-col ">
          {/* <h3 className="mx-auto text-sm text-center text-[#175C99] font-bold mb-2 bg-[#E9F5FF] w-28 rounded-lg">
            Most Popular
          </h3> */}
          <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-center text-black font-bold mb-2 ">
            {plan?.name}
          </p>
        </div>
        <p className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-10 text-black">
          {plan?.price}$
          <sub className="text-sm sm:text-lg lg:text-xl">{plan?.duration}</sub>
        </p>
        <ul className="mb-10">
          {plan?.features.map((feature, featureIndex) => (
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

      <Modal
        title="Subscription Payment"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        width={1000}
      >
        <main className="max-w-6xl mx-auto p-10 text-black text-center border m-10 rounded-md ">
          <div className="mb-10">
            <h1 className="text-4xl font-extrabold mb-2">Sonny</h1>
            <h2 className="text-2xl">
              has requested
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
            <CheckoutPage amount={plan?.price} id={plan?._id} />
          </Elements>
        </main>
      </Modal>

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
            onClick={showModal}
            className="flex items-center justify-center gap-2 w-full py-3 sm:text-xl lg:text-2xl rounded-2xl text-white font-bold bg-[#2B4257]"
          >
            {plan?.buttonStatus}
            <FaArrowRightLong />
          </motion.button>
        </div>
      ) : (
        <></>
      )}
    </motion.div>
  );
};

export default SubscriptionCard;
