import { buttonVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";

const SubscriptionCard = ({
  plan,
  index,
  isInView,
  initialMotion,
  visibleMotion,
}) => {
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
          <h3 className="mx-auto text-sm text-center text-[#175C99] font-bold mb-2 bg-[#E9F5FF] w-28 rounded-lg">
            Most Popular
          </h3>
          <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-center text-black font-bold mb-2 ">
            Advance
          </p>
        </div>
        <p className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-10 text-black">
          {plan.price}
          <sub className="text-sm sm:text-lg lg:text-xl">per month</sub>
        </p>
        <ul className="mb-10">
          {plan.features.map((feature, featureIndex) => (
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
          className="flex items-center justify-center gap-2 w-full py-3 sm:text-xl lg:text-2xl rounded-2xl text-white font-bold bg-[#2B4257]"
        >
          {plan.buttonStatus}
          <FaArrowRightLong />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SubscriptionCard;
