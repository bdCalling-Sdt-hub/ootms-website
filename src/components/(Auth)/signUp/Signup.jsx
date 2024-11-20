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

const SignUp = () => {
  const navigate = useRouter();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("user:", values);
    navigate.push("/sign-in");
  };

  return (
    <div className="text-base-color">
      <Container>
        <div className="flex items-center justify-between min-h-screen mx-40">
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
                name="name"
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
                  className="py-2 px-3 text-xl bg-site-color border border-[#223376] text-base-color hover:bg-transparent hover:border-2 hover:border-[#223376] focus:bg-transparent focus:border-[#223376] focus:border-x rounded-md"
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
                  className="py-2 px-3 text-xl bg-site-color border border-[#223376] text-base-color hover:bg-transparent hover:border-2 hover:border-[#223376] focus:bg-transparent focus:border-[#223376] focus:border-x rounded-md"
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
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="py-2 px-3 text-xl bg-site-color border border-[#223376] text-base-color hover:bg-transparent hover:border-2 hover:border-[#223376] focus:bg-transparent focus:border-[#223376] focus:border-x rounded-md"
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
                  className="py-2 px-3 text-xl bg-site-color border border-[#223376] text-base-color hover:bg-transparent hover:border-2 hover:border-[#223376] focus:bg-transparent focus:border-[#223376] focus:border-x rounded-md"
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
                    className="w-full py-3 border border-[#223376] hover:border-[#223376] text-xl text-primary-color bg-[#223376] font-semibold rounded-2xl mt-4"
                    htmltype="submit"
                  >
                    Sign Up
                  </motion.button>
                </ConfigProvider>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
