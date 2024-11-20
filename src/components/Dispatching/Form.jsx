"use client";

import { DatePicker, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormFile = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [user, setUser] = useState(null); // Initialize state for user data

  // Use useEffect to handle client-side logic
  useEffect(() => {
    // Check if we are in the client-side (browser) environment
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("ootms-user");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // Set user if found in localStorage
      }
    }
  }, []);

  const onNext = () => {
    // Check if user is available and navigate accordingly
    user ? router.push("/shipper") : router.push("/sign-in");
  };

  return (
    <div className="my-12">
      <div className="container w-[90%] lg:w-[70%] mx-auto">
        <h1 className="sm:text-3xl font-bold text-gray-color text-center">
          Receiver Information
        </h1>

        <Form form={form} className="my-4">
          {/* First Name and Contact Number */}
          <div
            layout="vertical"
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-5"
          >
            <div>
              <p className="text-contact-input font-semibold sm:text-xl sm:mb-2">
                Receiver&apos;s Name
              </p>
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Receiver's name is required" },
                ]}
              >
                <Input
                  placeholder="Enter first name"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-contact-input font-semibold sm:text-xl sm:mb-2">
                Contact Number
              </p>
              <Form.Item
                name="contactNumber"
                rules={[
                  { required: true, message: "Contact number is required" },
                ]}
              >
                <Input
                  placeholder="Enter contact number"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <div>
              <Typography className="text-contact-input font-semibold sm:text-xl sm:mb-2">
                Email Address
              </Typography>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input
                  placeholder="Enter email address"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
            <div className="w-full">
              <Typography className="text-contact-input font-semibold sm:text-xl sm:mb-2">
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
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
          </div>

          {/* City, State, Zip */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-5 lg:gap-5">
            <div>
              <Typography className="text-contact-input font-semibold sm:text-xl sm:mb-2">
                City
              </Typography>
              <Form.Item
                name="city"
                rules={[{ required: true, message: "City is required" }]}
              >
                <Input
                  placeholder="Enter city"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold sm:text-xl sm:mb-2">
                State
              </Typography>
              <Form.Item
                name="state"
                rules={[{ required: true, message: "State is required" }]}
              >
                <Input
                  placeholder="Enter state"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold sm:text-xl sm:mb-2">
                Zip
              </Typography>
              <Form.Item
                name="zip"
                rules={[{ required: true, message: "Zip code is required" }]}
              >
                <Input
                  placeholder="Enter zip"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
          </div>

          {/* PO# and Bill of Loading */}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold sm:text-xl sm:mb-2">
                PO#
              </Typography>
              <Form.Item name="poNumber">
                <Input
                  placeholder="Enter PO#"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold sm:text-xl sm:mb-2">
                Bill of Loading
              </Typography>
              <Form.Item name="billOfLoading">
                <Input
                  placeholder="Enter bill of loading"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-12"
                />
              </Form.Item>
            </div>
          </div>

          {/* Delivery Instructions */}
          <div>
            <Typography className="text-contact-input font-semibold sm:text-xl sm:mb-2">
              Delivery Instructions
            </Typography>
            <Form.Item name="deliveryInstructions">
              <textarea
                placeholder="Enter delivery instructions"
                className="h-40 w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none resize-none bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="bg-next-btn w-full p-2 text-next-text font-bold sm:text-xl rounded-xl sm:h-12"
          >
            Next
          </button>
        </Form>
      </div>
    </div>
  );
};

export default FormFile;
