"use client";
import React from "react";
import Container from "../ui/Container";
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

const ConnectWithMVR = () => {
  const onFinish = (values) => {
    // console.log("Connect With MVR Data:", values);
  };
  return (
    <div className="py-20">
      <Container>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-20 text-secondary-color">
          Complete the form for connect with an MVR.
        </h1>
        <div className="">
          <Form
            layout="vertical"
            className="bg-transparent w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3 items-center"
            onFinish={onFinish}
          >
            {/* Full Name Input */}
            <div>
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
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
            </div>
            {/* Email Input */}
            <div>
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
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
            </div>
            {/* Address Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#222222" }}>
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
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
            </div>
            {/* Contact Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#222222" }}>
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
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
            </div>
            {/*  Gender  */}
            <div>
              <Typography.Title level={4} style={{ color: "#222222" }}>
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
                    <DownOutlined className="text-[#222222] text-lg mt-1" />
                  }
                  className="h-12 text-xl bg-site-color  text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                >
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="others">Others</Select.Option>
                </Select>
              </Form.Item>
            </div>
            {/*  Date of Birth  */}
            <div>
              <Typography.Title level={4} style={{ color: "#222222" }}>
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
                    <CalendarOutlined className="text-[#222222] text-lg mt-1" />
                  }
                  placeholder="Date of Birth"
                  className="w-full py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
            </div>

            {/* Height Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#222222" }}>
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
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
            </div>

            {/* Weight Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#222222" }}>
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
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
            </div>

            {/* Attach Prescription Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#222222" }}>
                Attach Prescription
              </Typography.Title>
              <Form.Item
                name="prescription"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Prescription is Required",
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

            {/* Attach Medical Documents Input */}
            <div>
              <Typography.Title level={4} style={{ color: "#222222" }}>
                Attach Medical Documents
              </Typography.Title>
              <Form.Item
                name=" medicalDocuments"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: " Medical Documents is Required",
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
                Submit
              </motion.button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default ConnectWithMVR;
