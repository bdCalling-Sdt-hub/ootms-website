"use client";

import { Checkbox, ConfigProvider, Select } from "antd";

import { DatePicker, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ShipperForm = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const [options, setOptions] = useState([
    { label: "Dangerous", value: "Dangerous", checked: true },
    { label: "Flammable Gas 2", value: "Flammable Gas 2", checked: false },
    { label: "Poison 6", value: "Poison 6", checked: false },
    { label: "Corrosive", value: "Corrosive", checked: false },
    { label: "Oxygen 2", value: "Oxygen 2", checked: true },
    { label: "Danger", value: "Danger", checked: false },
    { label: "Flammable 3", value: "Flammable 3", checked: false },
    { label: "Radioactive 7", value: "Radioactive 7", checked: false },
    { label: "Non-Flammable Gas", value: "Non-Flammable Gas", checked: true },
    {
      label: "Organic Peroxide 5.2",
      value: "Organic Peroxide 5.2",
      checked: false,
    },
    { label: "Spontaneously", value: "Spontaneously", checked: false },
    { label: "Explosive 1.4", value: "Explosive 1.4", checked: false },
    { label: "Flammable Solid 4", value: "Flammable Solid 4", checked: true },
    {
      label: "Dangerous when wet",
      value: "Dangerous when wet",
      checked: false,
    },
    {
      label: "Blasting Agents 1.5d",
      value: "Blasting Agents 1.5d",
      checked: false,
    },
    { label: "Miscellaneous 9", value: "Miscellaneous 9", checked: false },
    { label: "PG III", value: "PG III", checked: true },
    { label: "Inhalation 6", value: "Inhalation 6", checked: false },
  ]);

  const handleCheckboxChange = (value) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.value === value
          ? { ...option, checked: !option.checked }
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
      {/* <div className="flex gap-8">
        <button className="mr-96">back</button> */}
      <h1 className="text-3xl font-bold text-gray-color text-center my-12">
        Shipper's Information
      </h1>
      {/* </div> */}

      <Form form={form} className="grid place-items-center" onFinish={onFinish}>
        {/* Shipper Name and Contact Number */}
        <div
          layout="vertical"
          className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2"
        >
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Shipper Name<span className="text-red-500 text-xl">*</span>
            </Typography>
            <Form.Item
              name="Shipper Name"
              rules={[{ required: true, message: "shipper name is required" }]}
            >
              <Input
                placeholder="Enter shipper name"
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
              name="shipperAddress"
              rules={[
                { required: true, message: "Shipper address is required" },
              ]}
            >
              <Input
                placeholder="Enter shipper address"
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
              rules={[{ required: true, message: "Load Type is required" }]}
            >
              <Input
                placeholder="load type address"
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
            <Form.Item
              name="Pickup"
              rules={[{ required: true, message: "Pickup is required" }]}
            >
              <Input
                placeholder="MM-DD-YYYY"
                className="w-96 md:w-96 bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2">
              Delivery
            </Typography>
            <Form.Item
              name="delivery"
              rules={[{ required: true, message: "Delivery is required" }]}
            >
              <Input
                placeholder="MM-DD-YYYY"
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
              style={{ overflowY: scroll }}
              className="custom-placeholder w-96 md:w-96 lg:w-[774px] mb-8 mt-4"
              labelRender={labelRender}
              placeholder="Trailer size"
              dropdownRender={() => (
                <div
                  style={{
                    marginTop: "40px",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {/* Set max height for scroll */}
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
              className=" bg-shipper-input-bg placeholder-gray-400 border border-gray-300 rounded-lg py-3 px-4 h-36 w-96 md:w-96 lg:w-[774px] resize-none font-semibold"
            />
          </Form.Item>
        </div>
        {/* Next Button */}
        <button className="bg-next-btn w-96 md:w-96 lg:w-[774px] p-2 text-next-text font-bold text-xl mb-4 rounded-xl">
          Next
        </button>
        <button
          className="flex items-center justify-center mb-8"
          onClick={() => router.back()}
        >
          <IoChevronBackOutline style={{ marginTop: "1px" }} />
          <span>Back</span>
        </button>
      </Form>
    </>
  );
};
export default ShipperForm;
