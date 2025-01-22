"use client";

import ReceiverFormGoogleMap from "@/helpers/GoogleMap/ReceiverFormGoogleMap";
import { useCreateLoadMutation } from "@/redux/api/loadApi";
import { DatePicker, Form, Input, Modal, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormFile = ({
  shipperData,
  handleOpenReciverFromCancel,

  showoOpenAddDriverIdModal,
}) => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [user, setUser] = useState(null); // Initialize state for user data

  const [createLoad] = useCreateLoadMutation();
  const [location, setLocation] = useState({ lat: "", lng: "" });

  const [locationDetails, setLocationDetails] = useState({
    city: "",
    state: "",
    zip: "",
    postalCode: "",
    fullAddress: "",
  });

  console.log("locationDetails", locationDetails);

  const handleLocationSelect = (coordinates) => {
    setLocation(coordinates);
  };

  useEffect(() => {
    form.setFieldsValue({
      receivingAddress: locationDetails.fullAddress || "",
      receiverCity: locationDetails.city || "",
      receiverState: locationDetails.state || "",
      receiverZip: locationDetails.zip || "",
      receiverpostalCode: locationDetails.zip || "",
    });
  }, [locationDetails, form]);

  //* It's Use to Show Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showViewModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    handleOpenReciverFromCancel();
  };

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

  const navigate = useRouter();
  const onFinish = async (values) => {
    const toastId = toast.loading("Load Data Added...");
    const revicer = {
      ...values,
      receiverLocation: {
        type: "Point",
        coordinates: [location?.lng, location?.lat],
      },
    };

    form.resetFields();

    try {
      const res = await createLoad([{ ...shipperData, ...revicer }]).unwrap();
      localStorage.setItem(
        "loadId",
        JSON.stringify(res.data.attributes[0]._id)
      );
      console.log(res);

      toast.success("Load Added Successfully", {
        id: toastId,
        duration: 2000,
      });

      handleOpenReciverFromCancel();
      showViewModal();
    } catch (error) {
      console.log("error", error);
      toast.error(
        error?.data?.message ||
          error.message ||
          "An error occurred during Add New Product",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <div className="mt-10">
      <div className="">
        <h1 className="sm:text-3xl font-bold text-gray-color text-center">
          Receiver Information
        </h1>

        <Form form={form} onFinish={onFinish} className="my-4">
          {/* First Name and Contact Number */}
          <div
            layout="vertical"
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-5"
          >
            <div>
              <p className="text-contact-input font-semibold text-start sm:mb-2">
                Receiver&apos;s Name
              </p>
              <Form.Item
                name="receiverName"
                rules={[
                  { required: true, message: "Receiver's name is required" },
                ]}
              >
                <Input
                  placeholder="Enter first name"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-contact-input font-semibold text-start sm:mb-2">
                Contact Number
              </p>
              <Form.Item
                name="receiverPhoneNumber"
                rules={[
                  { required: true, message: "Contact number is required" },
                ]}
              >
                <Input
                  placeholder="Enter contact number"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Email Address
              </Typography>
              <Form.Item
                name="receiverEmail"
                rules={[{ required: true, message: "Email is required" }]}
              >
                <Input
                  placeholder="Enter email address"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          <div style={{ margin: "20px 0" }}>
            <ReceiverFormGoogleMap
              onLocationSelect={handleLocationSelect}
              locationDetails={locationDetails}
              setLocationDetails={setLocationDetails}
            />
          </div>

          {/* Receiver Address */}
          <div className="flex flex-col">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Receiver Address
              </Typography>
              <Form.Item
                name="receivingAddress"
                rules={[
                  { required: true, message: "Receiver address is required" },
                ]}
              >
                <Input
                  placeholder="Enter receiver address"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          {/* City, State, Zip, Postal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-5 lg:gap-5">
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                City
              </Typography>
              <Form.Item
                name="receiverCity"
                rules={[{ required: true, message: "City is required" }]}
              >
                <Input
                  placeholder="Enter city"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                State
              </Typography>
              <Form.Item
                name="receiverState"
                rules={[{ required: true, message: "State is required" }]}
              >
                <Input
                  placeholder="Enter state"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Zip
              </Typography>
              <Form.Item
                name="receiverZip"
                rules={[{ required: true, message: "Zip code is required" }]}
              >
                <Input
                  placeholder="Enter zip"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Postal Code
              </Typography>
              <Form.Item
                name="receiverpostalCode"
                rules={[{ required: true, message: "Postal code is required" }]}
              >
                <Input
                  placeholder="Enter postal code"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          {/* PO# and Bill of Loading */}
          <div className="grid grid-cols-1  md:gap-2 lg:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Bill of Loading
              </Typography>
              <Form.Item name="billOfLading">
                <Input
                  placeholder="Enter bill of loading"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          {/* description */}
          <div>
            <Typography className="text-contact-input font-semibold text-start sm:mb-2">
              Description
            </Typography>
            <Form.Item name="description">
              <textarea
                placeholder="Enter description "
                className="h-40 w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none resize-none bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>

          {/* Next Button */}
          <button
            type="submit"
            className="bg-next-btn w-full p-2 text-next-text font-bold  rounded-xl sm:h-12"
          >
            Find a Driver
          </button>
        </Form>
      </div>
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{ textAlign: "center" }}
        className="lg:!w-[500px]"
      >
        <div className="px-10 pt-10">
          <p className="text-2xl text-center font-semibold">
            Do you have preferred Driver?
          </p>
          <div className="flex justify-between items-center gap-5 mt-5">
            <button
              className="bg-next-btn w-full p-2 text-next-text font-bold text-xl mb-4 rounded-xl"
              onClick={() => {
                localStorage.removeItem("loadId");
                handleCancel();
              }}
            >
              No
            </button>{" "}
            <button
              className="bg-next-btn w-full p-2 text-next-text font-bold text-xl mb-4 rounded-xl"
              onClick={() => {
                showoOpenAddDriverIdModal();
                handleCancel();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FormFile;
