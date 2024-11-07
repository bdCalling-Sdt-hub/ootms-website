"use client";
import Container from "@/components/ui/Container";
import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AllImages } from "../../../../public/assets/AllImages";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/variants";

const UpdatePassword = () => {
  const navigate = useRouter();
  const onFinish = (values) => {
    // console.log("passwords:", values);
    navigate.push("/sign-in");
  };
  return (
    <div className="text-base-color">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center min-h-screen bg-site-color py-10">
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center">
            <Image
              src={AllImages.setPassImg}
              alt="Log_In_Img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[250px] w-[320px] md:h-[280px] md:w-[380px] lg:h-[390px] lg:w-[520px]"
            />
          </div>
          <div className="h-[80vh] w-[2px] bg-[#F5382C] hidden lg:block"></div>
          <div className="w-full md:w-[80%] lg:w-[50%]">
            {/* -------- update Password Page Header ------------ */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                Set new password
              </h1>
            </div>
            {/* -------- Form Start ------------ */}
            <Form
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              <Typography.Title level={4} style={{ color: "#222222" }}>
                Password
              </Typography.Title>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "New Password is Required",
                  },
                ]}
                name="password"
                className="text-base-color"
              >
                <Input.Password
                  placeholder="Enter new password"
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
              <Typography.Title level={4} style={{ color: "#222222" }}>
                Confirm Password
              </Typography.Title>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your new password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
                className="text-base-color"
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
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
                  className="w-full py-3 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color font-semibold rounded-2xl mt-8"
                  htmltype="submit"
                >
                  Change Password
                </motion.button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdatePassword;
