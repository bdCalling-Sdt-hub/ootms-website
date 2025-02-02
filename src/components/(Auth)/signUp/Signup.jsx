"use client";

import Container from "../../ui/Container";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Typography,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { allIcons, AllImages } from "../../../../public/assets/AllImages";
import { buttonVariants } from "@/lib/variants";

import { toast } from "sonner";
import { useSignUpMutation } from "@/redux/api/authApi";
import { useSelector } from "react-redux";
import { SessionProvider } from "next-auth/react";
import GoogleLogin from "../signIn/GoogleLogin";
import FacebookLogin from "../signIn/FacebookLogin";

const SignUp = () => {
  const [signUp] = useSignUpMutation();
  const router = useRouter();
  const [form] = Form.useForm();

  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [router, token]);

  const onFinish = async (values) => {
    // navigate.push("/sign-in");
    const toastId = toast.loading("Signing Up...");

    try {
      let data = {
        fullName: values.fullName,
        password: values.password,
        email: values.email,
      };

      const res = await signUp(data).unwrap();

      localStorage.setItem("ootms_createUserToken", res?.data?.signUpToken);

      toast.success(res?.message, {
        id: toastId,
        duration: 2000,
      });
      // form.reset();

      router.push("/sign-up/verify");
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred during Signup", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="text-base-color">
      <Container>
        <div className="flex items-center justify-between min-h-screen ">
          <div className="hidden lg:block">
            <Image
              src={AllImages.logo}
              alt="largeLogo"
              width={0}
              height={0}
              className="h-52 w-80"
            />
          </div>
          <div className="w-full md:w-4/5 lg:w-1/2">
            <Form
              form={form}
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              <Typography.Title level={4} style={{ color: "#222222" }}>
                Full Name
              </Typography.Title>
              <Form.Item
                name="fullName"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Full Name is Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your full name"
                  className="py-2 px-3 text-xl bg-site-color !border border-[#2B4257] text-base-color hover:bg-transparent hover:border-[#2B4257] focus:bg-transparent focus:border-[#2B4257] focus:border-x rounded-md"
                />
              </Form.Item>

              <Typography.Title level={4} style={{ color: "#222222" }}>
                Email
              </Typography.Title>
              <Form.Item
                name="email"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Email is Required",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="py-2 px-3 text-xl bg-site-color !border border-[#2B4257] text-base-color hover:bg-transparent hover:border-[#2B4257] focus:bg-transparent focus:border-[#2B4257] focus:border-x rounded-md"
                />
              </Form.Item>

              <Typography.Title level={4} style={{ color: "#222222" }}>
                Password
              </Typography.Title>
              <Form.Item
                name="password"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Password is Required",
                  },
                ]}
              >
                <Input.Password
                  type="password"
                  placeholder="Enter your password"
                  className="py-2 px-3 text-xl bg-site-color !border border-[#2B4257] text-base-color hover:bg-transparent hover:border-[#2B4257] focus:bg-transparent focus:border-[#2B4257] focus:border-x rounded-md"
                />
              </Form.Item>

              <Typography.Title level={4} style={{ color: "#222222" }}>
                Confirm Password
              </Typography.Title>
              <Form.Item
                name="confirmPassword"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Confirm Your Password",
                  },
                  // Validator to check if confirm password matches password
                  {
                    validator: (_, value) => {
                      const password = form.getFieldValue("password"); // Get password value dynamically
                      if (!value) {
                        return Promise.reject("Please confirm your password");
                      }
                      if (value !== password) {
                        return Promise.reject("Passwords do not match");
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input.Password
                  placeholder="Confirm Your Password"
                  className="py-2 px-3 text-xl bg-site-color !border border-[#2B4257] text-base-color hover:bg-transparent hover:border-[#2B4257] focus:bg-transparent focus:border-[#2B4257] focus:border-x rounded-md"
                />
              </Form.Item>

              <Form.Item>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultHoverBg: "#013564",
                        defaultHoverColor: "#F3F3F3",
                      },
                    },
                  }}
                >
                  <motion.button
                    variants={buttonVariants}
                    whileTap="tap"
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 7,
                    }}
                    className="w-full py-3 !border border-[#2B4257] hover:border-[#2B4257] text-xl text-primary-color bg-[#2B4257] font-semibold rounded-2xl mt-4"
                    htmltype="submit"
                  >
                    Sign Up
                  </motion.button>
                </ConfigProvider>
              </Form.Item>
            </Form>
            {/* -------- Social Sign In Buttons ------------ */}
            <div className="flex flex-col gap-3 my-5">
              <div className="flex items-center justify-center mt-2">
                <span className="border-t border-gray-300 flex-grow"></span>
                <span className="px-4 text-gray-500">or</span>
                <span className="border-t border-gray-300 flex-grow"></span>
              </div>

              {/* <Button
                className="flex items-center justify-center gap-2 py-5 px-4 text-lg !border !border-contact-input text-base-color hover:bg-[#2B4257] hover:text-primary-color rounded-lg"
                icon={
                  <Image
                    src={allIcons.google}
                    alt="Google Icon"
                    width={20}
                    height={20}
                  />
                }
              >
                Sign in with Google
              </Button>
              <Button
                className="flex items-center justify-center gap-2 py-5 px-4 text-lg !border !border-contact-input text-base-color hover:bg-[#2B4257] hover:text-primary-color rounded-lg mt-2"
                icon={
                  <Image
                    src={allIcons.facebook}
                    alt="Apple Icon"
                    width={20}
                    height={20}
                  />
                }
              >
                Sign in with Facebook
              </Button> */}

              <SessionProvider>
                <GoogleLogin />
                {/* <FacebookLogin /> */}
              </SessionProvider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
