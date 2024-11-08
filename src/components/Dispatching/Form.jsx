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
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};
const FormFile = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-color text-center my-12">
        Receiver Information
      </h1>
      <div className=" grid place-items-center">
        <Form
          className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2"
          onFinish={onFinish}
        >
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              First Name<span className="text-red-500 text-xl">*</span>
            </Typography>
            <Form.Item name="firstName" className="flex space-x-4">
              <Input placeholder="Enter full name" className="w-96" />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              Contact Number<span className="text-red-500 text-xl">*</span>
            </Typography>
            <Form.Item name="lastName" className="flex space-x-4">
              <Input placeholder="Enter contact number" className="w-96" />
            </Form.Item>
          </div>
        </Form>

        {/* email address */}
        <Form
          className="grid grid-cols-1 lg:grid-cols-1 md:gap-2"
          onFinish={onFinish}
        >
          <div className="w-full">
            <Typography className="text-contact-input font-semibold text-xl">
              Email Address
            </Typography>
            <Form.Item name="email">
              <Input placeholder="Enter emaill address" className="w-wid" />
            </Form.Item>
          </div>
        </Form>

        {/* recovery address */}
        <Form
          className="grid grid-cols-1 lg:grid-cols-1 md:gap-2"
          onFinish={onFinish}
        >
          <div className="w-full">
            <Typography className="text-contact-input font-semibold text-xl">
              Recever Address
            </Typography>
            <Form.Item name="email">
              <Input placeholder="Enter recever address" className="w-wid" />
            </Form.Item>
          </div>
        </Form>

        {/* city state */}
        <Form
          className="grid grid-cols-1 lg:grid-cols-3 md:gap-2 lg:gap-2"
          onFinish={onFinish}
        >
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              City
            </Typography>
            <Form.Item name="firstName">
              <Input c placeholder="Enter city" className="w-city" />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              State
            </Typography>
            <Form.Item name="lastName">
              <Input c placeholder="Enter state" className="w-city" />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              Zip
            </Typography>
            <Form.Item name="lastName">
              <Input c placeholder="Enter zip" className="w-city" />
            </Form.Item>
          </div>
        </Form>

        {/* PO# and bill of loading */}
        <Form
          className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2"
          onFinish={onFinish}
        >
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              PO#
            </Typography>
            <Form.Item name="firstName">
              <Input placeholder="Enter po#" className="md:w-96 w-96" />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl">
              Bill of Loading
            </Typography>
            <Form.Item name="lastName">
              <Input
                className="md:w-96 w-96"
                placeholder="Enter bill of loading"
              />
            </Form.Item>
          </div>
        </Form>

        {/* Delivery Instructions */}
        <Form
          className="grid grid-cols-1 lg:grid-cols-1 md:gap-2"
          onFinish={onFinish}
        >
          <div className="w-full">
            <Typography className="text-contact-input font-semibold text-xl">
              Delivery Instructions
            </Typography>
            <Form.Item name="email">
              <Input
                placeholder="Enter delivery instructions"
                className="w-wid"
              />
            </Form.Item>
          </div>
        </Form>

        {/* next button */}
        <button className="bg-next-btn w-next-btn-wid p-2 text-next-text font-bold text-xl mb-12 rounded-xl">
          Next
        </button>
      </div>
    </>
  );
};
export default FormFile;
