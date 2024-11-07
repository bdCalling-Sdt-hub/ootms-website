"use client";

import React from "react";

import { Button, DatePicker, Form, Input, Select, Typography } from "antd";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/variants";
import {
  CalendarOutlined,
  DownOutlined,
  InboxOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import Container from "@/components/ui/Container";

//* Animation Variants

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Connect With MVR Data:", values);
  };
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-20 text-secondary-color">
          Fill out form and connect with an MVR
        </h1>
        <div className="">
          <Form
            layout="vertical"
            className="bg-transparent w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3 items-center"
            onFinish={onFinish}
          >
            {/* Full Name Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
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
                  className="py-2 px-3 text-xl bg-[#F7F8F8] border border-[#E6E7E6] text-base-color focus:bg-transparent "
                />
              </Form.Item>
            </div>
            {/* Email Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
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
                  className="py-2 px-3 text-xl bg-[#F7F8F8] border border-[#E6E7E6] text-base-color focus:bg-transparent "
                />
              </Form.Item>
            </div>
            {/* Address Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
                Address
              </Typography.Title>
              <Form.Item
                name="address"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Address is Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your Address"
                  className="py-2 px-3 text-xl bg-[#F7F8F8] border border-[#E6E7E6] text-base-color focus:bg-transparent "
                />
              </Form.Item>
            </div>
            {/* Contact Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
                Contact Number
              </Typography.Title>
              <Form.Item
                type="number"
                name="contactNumber"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Contact Number is Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your Contact Number"
                  className="py-2 px-3 text-xl bg-[#F7F8F8] border border-[#E6E7E6] text-base-color focus:bg-transparent "
                />
              </Form.Item>
            </div>
            {/*  Gender  */}
            <div>
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
                Gender
              </Typography.Title>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Gender is Required",
                  },
                ]}
                name="gender"
                className="text-white "
              >
                <Select
                  placeholder="Select Your Gender"
                  suffixIcon={
                    <DownOutlined className="text-[#4E4E4E] text-lg mt-1" />
                  }
                  className="h-12 text-xl bg-[#F7F8F8]  text-base-color "
                >
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="others">Others</Select.Option>
                </Select>
              </Form.Item>
            </div>
            {/*  Date of Birth  */}
            <div>
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
                Date of Birth
              </Typography.Title>
              <Form.Item
                name="DOB"
                rules={[
                  {
                    required: true,
                    message: "Date of Birth is Required",
                  },
                ]}
                className="text-white "
              >
                <DatePicker
                  suffixIcon={
                    <CalendarOutlined className="text-[#4E4E4E] text-lg mt-1" />
                  }
                  placeholder="Date of Birth"
                  className="w-full py-2 px-3 text-xl bg-[#F7F8F8] border !border-[#E6E7E6] text-base-color  focus:bg-transparent "
                />
              </Form.Item>
            </div>

            {/* Height Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
                Height
              </Typography.Title>
              <Form.Item
                name="height"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Height is Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your Height"
                  className="py-2 px-3 text-xl bg-[#F7F8F8] border border-[#E6E7E6] text-base-color focus:bg-transparent "
                />
              </Form.Item>
            </div>

            {/* Weight Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
                Weight
              </Typography.Title>
              <Form.Item
                name="weight"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Weight is Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your Weight"
                  className="py-2 px-3 text-xl bg-[#F7F8F8] border border-[#E6E7E6] text-base-color focus:bg-transparent "
                />
              </Form.Item>
            </div>

            {/* Medical Condition Input */}
            <div className="lg:col-span-2">
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
                Medical Condition
              </Typography.Title>
              <Form.Item
                name="medicalCondition"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Medical Condition is Required",
                  },
                ]}
              >
                <Input
                  placeholder="Enter your Medical Condition"
                  className="py-2 px-3 text-xl bg-[#F7F8F8] border border-[#E6E7E6] text-base-color focus:bg-transparent "
                />
              </Form.Item>
            </div>

            {/* Attach Medical Documents Input */}
            <div className="lg:col-span-2">
              <Typography.Title level={4} style={{ color: "#F5382C" }}>
                Attach Health Documents
              </Typography.Title>
              <Form.Item
                name=" medicalDocuments"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: " Health Documents is Required",
                  },
                ]}
              >
                <Dragger>
                  <div className=" flex items-center justify-center gap-x-3 py-8">
                    <UploadOutlined className="text-5xl" />
                    <p className="text-xl">Upload File</p>
                  </div>
                </Dragger>
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
                className="w-full py-3 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color font-semibold rounded-lg mt-8"
                htmltype="submit"
              >
                Continue
              </motion.button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
