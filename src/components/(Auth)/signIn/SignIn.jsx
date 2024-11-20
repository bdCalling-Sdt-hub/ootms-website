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
import React from "react";
import { motion } from "framer-motion";
import { AllImages } from "../../../../public/assets/AllImages";
import { buttonVariants } from "@/lib/variants";

const SignIn = () => {
  const navigate = useRouter();
  const onFinish = (values) => {
    // console.log("user:", values);
    navigate.push("/");
  };
  return (
    <div className="text-base-color">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 min-h-screen py-10">
          <div className="hidden lg:block">
            <Image
              src={AllImages.signInImage}
              alt="largeLogo"
              width={0}
              height={0}
              className="h-[400px] w-[501px] mx-auto"
            />
          </div>
          <div className="flex flex-col">
            <div className="hidden lg:block">
              <Image
                src={AllImages.logo}
                alt="largeLogo"
                width={0}
                height={0}
                className="h-40 w-52 mx-auto"
              />
            </div>
            <div className="w-full md:w-[80%] lg:w-full mx-auto">
              {/* -------- Sign In Page Header ------------ */}
              <div className="flex flex-col justify-center items-center">
                <div className="text-center mt-5 mb-8">
                  <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
                    Login to Account!
                  </h1>
                  <p className="text-lg sm:text-xl mb-2 text-[#B4B4B4]">
                    Please enter your email and password to continue.
                  </p>
                </div>
              </div>
              {/* -------- Form Start ------------ */}

              <Form
                layout="vertical"
                className="bg-transparent w-full"
                onFinish={onFinish}
              >
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
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    className="py-2 px-3 text-xl bg-site-color border border-[#BDC4DE] text-base-color hover:bg-transparent hover:border-[#BDC4DE] focus:bg-transparent focus:border-[#BDC4DE] rounded-md"
                  />
                </Form.Item>
                <Typography.Title level={4} style={{ color: "#222222" }}>
                  Password
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Password is Required",
                    },
                  ]}
                  name="password"
                  className="text-base-color"
                >
                  <Input.Password
                    placeholder="Enter your password"
                    className="py-2 px-3 text-xl bg-site-color border border-[#BDC4DE] text-base-color hover:bg-transparent hover:border-[#BDC4DE] focus:bg-transparent focus:border-[#BDC4DE] rounded-md"
                  />
                </Form.Item>
                <div className="flex justify-between items-center mt-10">
                  <Checkbox className="">Remember me</Checkbox>
                  <Link
                    href="/forget-password"
                    className="text-[#223376] underline font-bold"
                  >
                    Forgot Password?
                  </Link>
                </div>

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
                      className="w-full py-3 border border-[#223376] hover:border-[#223376] text-xl text-primary-color bg-[#223376] font-semibold rounded-2xl mt-8"
                      htmltype="submit"
                    >
                      Sign In
                    </motion.button>
                  </ConfigProvider>
                </Form.Item>
              </Form>

              {/* -------- Redirect to Sign Up ------------ */}
              <p className="text-center text-ellipsis mt-4">
                Don’t have an account?
                <span>
                  <Link
                    href="/sign-up"
                    className="text-[#223376] font-semibold underline ml-2"
                  >
                    Sign Up
                  </Link>
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
