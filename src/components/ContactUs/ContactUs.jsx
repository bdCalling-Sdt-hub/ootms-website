"use client";
import { buttonVariants } from "@/lib/variants";
import { Form, Input, Typography } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { allIcons } from "../../../public/assets/AllImages";
import Container from "../ui/Container";

const ContactUs = () => {
  const TextArea = Input.TextArea;
  const onFinish = (values) => {
    // console.log("Connect With MVR Data:", values);
  };
  return (
    <div className="sm:py-20">
      <div>
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-[#2B4257] text-center mb-10 sm:mb-16">
          Contact the OOTMS team
        </h1>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3 items-center">
          <div className="w-full h-full flex lg:justify-center lg:items-center mb-4 lg:mb-0">
            <div className="flex flex-col items-center mx-auto">
              <h1 className="text-lg sm:text-3xl lg:text-4xl text-base-color sm:mb-10">
                How can i help you?
              </h1>
              <div className="flex items-center gap-3">
                <Image
                  src={allIcons.teliphone}
                  alt="phone"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-4 sm:size-8"
                />
                <p className="text-base-color text-sm sm:text-lg lg:text-xl mt-4">
                  +11-09874680014
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={allIcons.gmail}
                  alt="phone"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="size-4 sm:size-8"
                />
                <p className="text-base-color text-sm sm:text-lg lg:text-xl mt-2 sm:mt-4">
                  ootms@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Form layout="vertical" className="" onFinish={onFinish}>
              {/* Full Name Input */}
              <div>
                <Typography.Title level={5} style={{ color: "#222222" }}>
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
                    className="py-2 px-3 sm:text-xl bg-[#DFE2EF] border-2 border-[#E6E7E6] text-base-color "
                  />
                </Form.Item>
              </div>
              {/* Email Input */}
              <div>
                <Typography.Title level={5} style={{ color: "#222222" }}>
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
                    className="py-2 px-3 sm:text-xl bg-[#DFE2EF] border-2 border-[#E6E7E6] text-base-color "
                  />
                </Form.Item>
              </div>
              {/* Address Input */}
              {/* Contact Input */}
              <div>
                <Typography.Title level={5} style={{ color: "#222222" }}>
                  Message
                </Typography.Title>
                <Form.Item
                  name="message"
                  className="text-base-color"
                  rules={[
                    {
                      required: true,
                      message: "Message is Required",
                    },
                  ]}
                >
                  <TextArea
                    placeholder="Enter your Message"
                    rows={4}
                    className="py-2 px-3 sm:text-xl bg-[#DFE2EF] border-2 border-[#E6E7E6] text-base-color "
                  />
                </Form.Item>
              </div>

              <Form.Item className="lg:col-span-2">
                <motion.button
                  variants={buttonVariants}
                  whileTap="tap"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 7,
                  }}
                  className="w-full py-3 border border-[#2B4257] hover:border-[#2B4257] sm:text-xl text-primary-color bg-[#2B4257] font-semibold rounded-lg sm:mt-8"
                  htmltype="submit"
                >
                  Submit
                </motion.button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Container>

      {/* <MapComponent /> */}
    </div>
  );
};

export default ContactUs;
