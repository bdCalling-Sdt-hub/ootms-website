"use client";

import { Checkbox, ConfigProvider, Select } from "antd";

import { DatePicker, Form, Input, Typography } from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ShipperForm = () => {
  const [form] = Form.useForm();
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [options, setOptions] = useState([
    { label: "gold", value: "gold", checked: true },
    { label: "lime", value: "lime", checked: false },
    { label: "green", value: "green", checked: false },
    { label: "cyan", value: "cyan", checked: false },
  ]);

  const handleCheckboxChange = (value) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.value === value
          ? { ...option, checked: !option.checked } // Toggle the `checked` state
          : option
      )
    );
  };

  const labelRender = (value) => {
    const { label } = value;

    if (label) {
      return label;
    }

    return (
      <span className="w-96 md:w-96 lg:w-[774px]  text-shipper-text mb-12">
        Trailer size
      </span>
    );
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    form.resetFields();
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-color text-center my-12">
        Shipper's Information
      </h1>

      <Form form={form} className="grid place-items-center" onFinish={onFinish}>
        {/* First Name and Contact Number */}
        <div
          layout="vertical"
          className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2"
        >
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Shipper Name<span className="text-red-500 text-xl">*</span>
            </Typography>
            <Form.Item
              name="firstName"
              rules={[{ required: true, message: "First name is required" }]}
            >
              <Input
                placeholder="Enter first name"
                className="w-96 md:w-96 bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
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
                className="w-96 md:w-96 bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
        </div>
        {/* Email Address */}
        <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Email Address
            </Typography>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Email is required" }]}
            >
              <Input
                placeholder="Enter email address"
                className="w-96 md:w-96 lg:w-[774px] bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
        </div>
        {/* Shipper Address */}
        <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
          <div className="w-full">
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Shipper Address
            </Typography>
            <Form.Item
              name="receiverAddress"
              rules={[
                { required: true, message: "Receiver address is required" },
              ]}
            >
              <Input
                placeholder="Enter receiver address"
                className="w-96 md:w-96 lg:w-[774px] bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
        </div>
        {/* City, State, Zip */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-2 lg:gap-2">
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              City
            </Typography>
            <Form.Item
              name="city"
              rules={[{ required: true, message: "City is required" }]}
            >
              <Input
                placeholder="Enter city"
                className="w-96 lg:w-[250px] bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              State
            </Typography>
            <Form.Item
              name="state"
              rules={[{ required: true, message: "State is required" }]}
            >
              <Input
                placeholder="Enter state"
                className="w-96 lg:w-[250px] bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Zip
            </Typography>
            <Form.Item
              name="zip"
              rules={[{ required: true, message: "Zip code is required" }]}
            >
              <Input
                placeholder="Enter zip"
                className="w-96 lg:w-[250px] bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
        </div>
        {/* load type */}
        <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
          <div className="w-full">
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Load Type
            </Typography>
            <Form.Item
              name="receiverAddress"
              rules={[
                { required: true, message: "Receiver address is required" },
              ]}
            >
              <Input
                placeholder="Enter receiver address"
                className="w-96 md:w-96 lg:w-[774px] bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
        </div>
        {/* pick up and  delivery*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2">
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Pickup
            </Typography>
            <Form.Item name="poNumber">
              <Input
                placeholder="Enter PO#"
                className="w-96 md:w-96 bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Delivery
            </Typography>
            <Form.Item name="billOfLoading">
              <Input
                placeholder="Enter bill of loading"
                className="w-96 md:w-96 bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
        </div>

        {/* select item */}

        <div>
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  selectorBg: "#EAECEE",
                  colorBgElevated: "#EAECEE",
                },
              },
            }}
          >
            <Select
              className="custom-placeholder w-96 md:w-96 lg:w-[774px] mb-8 mt-4"
              labelRender={labelRender}
              placeholder="Trailer size"
              dropdownRender={() => (
                <div style={{ marginTop: "40px" }}>
                  <div>
                    {options.map((option) => (
                      <div key={option.value} className="flex justify-between">
                        <label>{option.label}</label>
                        <Checkbox
                          className="my-checkbox"
                          checked={option.checked}
                          onChange={() => handleCheckboxChange(option.value)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            />
          </ConfigProvider>
        </div>

        {/* delivey intructure */}
        <div>
          <Typography className="text-contact-input font-semibold text-xl mb-2 mb-2">
            Delivery Instructions
          </Typography>
          <Form.Item name="deliveryInstructions">
            <Input.TextArea
              placeholder="Enter description"
              className="bg-gray-100 bg-shipper-input-bg placeholder-gray-400 border border-gray-300 rounded-lg py-3 px-4 h-36 w-96 md:w-96 lg:w-[774px] resize-none font-semibold"
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
export default ShipperForm;
