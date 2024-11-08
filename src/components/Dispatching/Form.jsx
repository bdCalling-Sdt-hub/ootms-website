"use client";

import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Typography,
  Upload,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormFile = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-color text-center my-12">
        Receiver Information
      </h1>

      <Form form={form} className="grid place-items-center" onFinish={onFinish}>
        {/* First Name and Contact Number */}
        <div
          layout="vertical"
          className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2"
        >
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              First Name<span className="text-red-500 text-xl">*</span>
            </Typography>
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input placeholder="Enter first name" className="w-96 md:w-96" />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              Contact Number<span className="text-red-500 text-xl">*</span>
            </Typography>
            <Form.Item
              name="contactNumber"
              rules={[
                { required: true, message: "Contact number is required" },
              ]}
            >
              <Input
                placeholder="Enter contact number"
                className="w-96 md:w-96"
              />
            </Form.Item>
          </div>
        </div>

        {/* Email Address */}
        <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              Email Address
            </Typography>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input
                placeholder="Enter email address"
                className="w-96 md:w-96 lg:w-[774px]"
              />
            </Form.Item>
          </div>
        </div>

        {/* Receiver Address */}
        <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
          <div className="w-full">
            <Typography className="text-contact-input font-semibold text-xl">
              Receiver Address
            </Typography>
            <Form.Item
              name="receiverAddress"
              rules={[
                { required: true, message: "Receiver address is required" },
              ]}
            >
              <Input
                placeholder="Enter receiver address"
                className="w-96 md:w-96 lg:w-[774px]"
              />
            </Form.Item>
          </div>
        </div>

        {/* City, State, Zip */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-2 lg:gap-2">
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              City
            </Typography>
            <Form.Item
              name="city"
              rules={[{ required: true, message: "City is required" }]}
            >
              <Input placeholder="Enter city" className="w-96 lg:w-[250px]" />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              State
            </Typography>
            <Form.Item
              name="state"
              rules={[{ required: true, message: "State is required" }]}
            >
              <Input placeholder="Enter state" className="w-96 lg:w-[250px]" />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              Zip
            </Typography>
            <Form.Item
              name="zip"
              rules={[{ required: true, message: "Zip code is required" }]}
            >
              <Input placeholder="Enter zip" className="w-96 lg:w-[250px]" />
            </Form.Item>
          </div>
        </div>

        {/* PO# and Bill of Loading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2">
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              PO#
            </Typography>
            <Form.Item name="poNumber">
              <Input placeholder="Enter PO#" className="w-96 md:w-96" />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              Bill of Loading
            </Typography>
            <Form.Item name="billOfLoading">
              <Input
                placeholder="Enter bill of loading"
                className="w-96 md:w-96"
              />
            </Form.Item>
          </div>
        </div>

        {/* Delivery Instructions */}
        <div>
          <Typography className="text-contact-input font-semibold text-xl">
            Delivery Instructions
          </Typography>
          <Form.Item name="deliveryInstructions">
            <textarea
              placeholder="Enter delivery instructions"
              className="w-96 md:w-96 lg:w-[774px] p-4 border-2 border-gray-300 rounded-xl focus:outline-none resize-none"
            />
          </Form.Item>
        </div>

        {/* Next Button */}
        <button className="bg-next-btn w-96 md:w-96 lg:w-[774px] p-2 text-next-text font-bold text-xl mb-12 rounded-xl">
          Next
        </button>
      </Form>
    </>
  );
};
export default FormFile;
