"use client";
import { Button, ConfigProvider, Form, Input } from "antd";
import Container from "../../ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AllImages } from "../../../../public/assets/AllImages";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/variants";
import { useForgetPasswordMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ForgotPassword = () => {
  const [forgetPassword] = useForgetPasswordMutation();
  const navigate = useRouter();

  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (token) {
      navigate.push("/");
    }
  }, [navigate, token]);

  const onFinish = async (values) => {
    const toastId = toast.loading("Requesting...");

    try {
      const res = await forgetPassword(values).unwrap();

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      localStorage.setItem("ootms_forgetPasswordEmail", JSON.stringify(values));
      navigate.push("/sign-in/otp-verification");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred during Login", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="text-base-color">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center min-h-screen bg-site-color py-10">
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center">
            <Image
              src={AllImages.forgotPasswordImg}
              alt="forgot_Password_Img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[320px] w-[320px] md:h-[380px] md:w-[380px] lg:h-[520px] lg:w-[520px] shadow-xl"
            />
          </div>
          {/* <div className="h-[80vh] w-[2px] bg-[#F5382C] hidden lg:block"></div> */}
          <div className="w-full md:w-[80%] lg:w-[50%]">
            <div className="">
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                  Forget password
                </h1>
                <p className="md:text-lg lg:text-xl mb-2 ">
                  Enter your email address to ger a verification code for
                  resetting your password.
                </p>
              </div>

              <Form
                layout="vertical"
                className="bg-transparent w-full"
                onFinish={onFinish}
              >
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Email is Required",
                    },
                  ]}
                  name="email"
                  className="text-base-color"
                >
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className="py-2 px-3 text-xl bg-site-color border border-[#2A4094] text-base-color hover:bg-transparent hover:border-[#2A4094] focus:bg-transparent focus:border-secoundary-color"
                  />
                </Form.Item>

                <Form.Item>
                  <motion.button
                    variants={buttonVariants}
                    whileTap="tap"
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 7,
                    }}
                    className="w-full py-3 border border-[#2A4094] hover:border-[#2A4094] text-xl text-primary-color bg-[#2A4094] font-semibold rounded-2xl mt-8"
                    htmltype="submit"
                  >
                    Get OTP
                  </motion.button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ForgotPassword;
