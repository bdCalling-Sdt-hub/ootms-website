"use client";

import { useCreateLoadMutation } from "@/redux/api/loadApi";
import { ConfigProvider, Modal, Select } from "antd";

import { DatePicker, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { toast } from "sonner";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const ShipperForm = ({
  setShipperData,
  handleOpenShipperFromCancel,
  showoOpenAddDriverIdModal,
  showOpenReciverFromModal,
}) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [showOptions, setShowOptions] = useState(false);
  const [noOptions, setNoOptions] = useState(true);

  const [createLoad] = useCreateLoadMutation();

  const [selectedValue, setSelectedValue] = useState(null);

  const handleShowOptionsChange = () => {
    setShowOptions(true);
    setNoOptions(false);
  };

  const handleNoOptionsChange = () => {
    setNoOptions(true);
    setShowOptions(false);

    // Uncheck all trailer size options
    setOptions((prevOptions) =>
      prevOptions.map((option) => ({ ...option, checked: false }))
    );

    // Explicitly set `trailerSize` to an empty array
    form.setFieldsValue({
      Hazmat: [], // Clear trailerSize to an empty array
    });
  };

  const [options, setOptions] = useState([
    { label: "Hazmat", value: "Hazmat", checked: false },
    { label: "Dangerous", value: "Dangerous", checked: false },
    { label: "Flammable Gas 2", value: "Flammable Gas 2", checked: false },
    { label: "Poison 6", value: "Poson 6", checked: false },
    { label: "Corrosive", value: "Corrosive", checked: false },
    { label: "Oxygen 2", value: "Oxygen 2", checked: false }, // Corrected from Oxygen2 to Oxygen 2
    { label: "Flammable 3", value: "Flammable 3", checked: false }, // Corrected from Flamable 3 to Flammable 3
    { label: "Radioactive 7", value: "Radioactive 7", checked: false }, // Assuming you meant Radioactive 7 from Radioactive
    { label: "Non-Flammable Gas", value: "Non-Flammable Gas", checked: false }, // Listed as Non-Flammable in the modal
  ]);

  const handleCheckboxChange = (value) => {
    setOptions((prevOptions) => {
      const updatedOptions = prevOptions.map((option) =>
        option.value === value
          ? { ...option, checked: !option.checked } // Toggle the selected option
          : option
      );

      // Get all selected values as an array
      const selectedValues = updatedOptions
        .filter((option) => option.checked)
        .map((option) => option.value);

      // Update the form field with the selected values
      if (selectedValues.length > 0) {
        form.setFieldsValue({
          Hazmat: selectedValues,
        });
      } else {
        form.setFieldsValue({
          Hazmat: [],
        });
      }

      return updatedOptions;
    });
  };

  const labelRender = (value) => {
    const { label } = value;

    if (label) {
      return label;
    }

    return (
      <span className=" w-full  text-shipper-text mb-12">Trailer size</span>
    );
  };

  const onFinish = async (values) => {
    // const toastId = toast.loading("Load Data Added...");
    if (
      !Array.isArray(values.Hazmat) ||
      values.Hazmat.length <= 0 ||
      values.Hazmat === undefined ||
      values.Hazmat === null ||
      values.Hazmat === ""
    ) {
      // If Hazmat is not an array or has no selected values, reset it to an empty array
      values.Hazmat = [];
    } else {
      // Use the existing values
      values.Hazmat = values.Hazmat;
    }

    console.log(values);
    setShipperData(values);
    form.resetFields();
    handleOpenShipperFromCancel();
    showOpenReciverFromModal();
  };

  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-gray-color text-center my-12">
          Shipper&apos;s Information
        </h1>

        <Form form={form} className="" onFinish={onFinish}>
          {/* Shipper Name and Contact Number */}
          <div
            layout="vertical"
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-5 lg:gap-5"
          >
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper Name<span className="text-red-500 ">*</span>
              </Typography>
              <Form.Item
                name="shipperName"
                rules={[
                  { required: true, message: "shipper name is required" },
                ]}
              >
                <Input
                  placeholder="Enter shipper name"
                  className=" bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Contact Number<span className="text-red-500 ">*</span>
              </Typography>
              <Form.Item
                name="shipperPhoneNumber"
                rules={[
                  { required: true, message: "Contact number is required" },
                ]}
              >
                <Input
                  placeholder="Enter contact number"
                  className=" bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* Email Address */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Email Address
              </Typography>
              <Form.Item
                name="shipperEmail"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input
                  placeholder="Enter email address"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* Shipper Address */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper Address
              </Typography>
              <Form.Item
                name="shippingAddress"
                rules={[
                  { required: true, message: "Shipper address is required" },
                ]}
              >
                <Input
                  placeholder="Enter shipper address"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* City, State, Zip */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-2 lg:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                City
              </Typography>
              <Form.Item
                name="shippingCity"
                rules={[{ required: true, message: "City is required" }]}
              >
                <Input
                  placeholder="Enter city"
                  className="w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                State
              </Typography>
              <Form.Item
                name="shippingState"
                rules={[{ required: true, message: "State is required" }]}
              >
                <Input
                  placeholder="Enter state"
                  className="w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Zip
              </Typography>
              <Form.Item
                name="shippingZip"
                rules={[{ required: true, message: "Zip code is required" }]}
              >
                <Input
                  placeholder="Enter zip"
                  className="w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>

          {/* Pallate Space */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Pallet Space
              </Typography>
              <Form.Item
                name="palletSpace"
                rules={[
                  { required: true, message: "Pallet space is required" },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter pallet space"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* load type */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Load Type
              </Typography>
              <Form.Item
                name="loadType"
                rules={[{ required: true, message: "Load Type is required" }]}
              >
                <Input
                  placeholder="load type address"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* weight */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Weight
              </Typography>
              <Form.Item
                name="weight"
                rules={[{ required: true, message: "Weight is required" }]}
              >
                <Input
                  type="number"
                  placeholder="Weight"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* loadDetails */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Load Details
              </Typography>
              <Form.Item
                name="loadDetails"
                rules={[
                  { required: true, message: " Load Details is required" },
                ]}
              >
                <Input
                  placeholder="Load Details"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* productType */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Product Type
              </Typography>
              <Form.Item
                name="productType"
                rules={[
                  { required: true, message: "Product Type is required" },
                ]}
              >
                <Input
                  placeholder="Product Types"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>

          {/* pick up and  delivery*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Pickup
              </Typography>
              <Form.Item
                name="pickupDate"
                rules={[{ required: true, message: "Pickup is required" }]}
              >
                <DatePicker
                  format="MM-DD-YYYY" // Define the format
                  className="bg-shipper-input-bg  rounded-lg w-full"
                  placeholder="MM-DD-YYYY"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Delivery
              </Typography>
              <Form.Item
                name="deliveryDate"
                rules={[{ required: true, message: "Delivery is required" }]}
              >
                <DatePicker
                  format="MM-DD-YYYY" // Define the format
                  className="bg-shipper-input-bg  rounded-lg w-full"
                  placeholder="MM-DD-YYYY"
                />
              </Form.Item>
            </div>
          </div>

          {/* Trailer Size */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Trailer Size
              </Typography>
              <Form.Item
                name="trailerSize"
                rules={[
                  { required: true, message: "Trailer Size is required" },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter Trailer Size"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>

          {/* select item */}
          <Form.Item name="Hazmat">
            <div>
              {/* Hazmat Options */}
              <div className="flex justify-between mb-4">
                <div>
                  <h1>Hazmat</h1>
                </div>
                <div className="flex gap-4">
                  <label className="flex items-center justify-center gap-1">
                    <input
                      className="mt-1"
                      type="checkbox"
                      checked={showOptions}
                      onChange={handleShowOptionsChange}
                    />
                    Yes
                  </label>
                  <label className="flex items-center justify-center gap-1">
                    <input
                      className="mt-1"
                      type="checkbox"
                      value={[]}
                      checked={noOptions}
                      onChange={handleNoOptionsChange}
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Trailer Size Options */}
              {showOptions && (
                <div
                  style={{
                    marginTop: "20px",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="flex justify-between mb-2"
                    >
                      <label>{option.label}</label>
                      <input
                        type="checkbox"
                        value={option.value} // Explicitly set the value
                        checked={option.checked} // Controlled by state
                        onChange={() => handleCheckboxChange(option.value)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Form.Item>

          {/* delivey intructure */}
          <div>
            <Typography className="text-contact-input font-semibold  mb-2">
              Delivery Instructions
            </Typography>
            <Form.Item name="deliveryInstruction">
              <Input.TextArea
                placeholder="Enter description"
                className=" bg-shipper-input-bg placeholder-gray-400 border border-gray-300 rounded-lg py-3 px-4 h-36  w-full resize-none font-semibold"
              />
            </Form.Item>
          </div>
          {/* Next Button */}
          <button
            type="submit"
            // onClick={() => {
            //   showViewModal();
            //   handleOpenShipperFromCancel();
            // }}
            className="bg-next-btn w-full p-2 text-next-text font-bold text-xl mb-4 rounded-xl"
          >
            Next
          </button>
        </Form>
      </div>
    </>
  );
};
export default ShipperForm;
