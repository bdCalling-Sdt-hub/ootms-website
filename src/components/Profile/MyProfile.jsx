"use client";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Select,
  Typography,
  Upload,
} from "antd";
import {
  CalendarOutlined,
  DownOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { CiLocationOn } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import Image from "next/image";
import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { AllImages, storiesImg } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/variants";
import { MdOutlineFileUpload } from "react-icons/md";

const MyProfile = () => {
  const { Dragger } = Upload;
  const [isOnlyView, setIsOnlyView] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(AllImages.profile);
  const users = {
    profilePhoto: AllImages.profile,
    firstName: "Din Islam",
    lastName: "Rajin",
    gender: "Male",
    dob: "2002-02-02",
    email: "rajin572@gmail.com",
    contactNumber: "01644258678",
    address: "Dhaka",
  };

  const onFinish = (values) => {
    // console.log("userUpdate:", values);
  };
  const handleImageUpload = (info) => {
    if (info.file.status === "removed") {
      setUploadedImage(AllImages.profile); // Reset to null or fallback image
    } else {
      const file = info.file.originFileObj;
      if (file) {
        setUploadedImage(URL.createObjectURL(file)); // Set new uploaded image
      }
    }
  };
  const toggleOnlyView = () => setIsOnlyView(!isOnlyView);
  return (
    <div>
      <div className=" my-16 md:mt-20">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center ">
            {isOnlyView ? (
              <div className="text-3xl md:text-3xl lg:text-4xl font-semibold mb-6"></div>
            ) : (
              <h1 className="text-secondary-color text-3xl md:text-3xl lg:text-4xl font-semibold mb-6 order-last sm:order-first">
                Add Profile Picture
              </h1>
            )}

            <div className="mb-10 sm:mb-0">
              {isOnlyView ? (
                <Button
                  onClick={toggleOnlyView}
                  type="primary"
                  className="px-12  py-6 text-lg md:text-xl font-semibold bg-secondary-color border border-secondary-color text-site-color rounded-3xl shadow-inner shadow-[#00000040]"
                >
                  Edit My Profile
                </Button>
              ) : (
                <Button
                  onClick={toggleOnlyView}
                  type="primary"
                  className="px-12 py-6 text-lg md:text-xl font-semibold bg-transparent border-secondary-color text-base-color rounded-3xl"
                >
                  Undo Changes
                </Button>
              )}
            </div>
          </div>

          <Form
            disabled={isOnlyView}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full"
          >
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="rounded-full border-2 border-secondary-color overflow-hidden">
                <Image
                  src={uploadedImage}
                  alt="profile_img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] object-cover"
                />
              </div>
              <div className="flex items-start flex-col">
                {isOnlyView ? (
                  <div></div>
                ) : (
                  <p className="text-xl text-base-color mb-7">
                    Maximum size 5mb. Format jpg, jpeg, png.
                  </p>
                )}

                {isOnlyView ? (
                  ""
                ) : (
                  <Form.Item name="profileImage" className="text-white ">
                    <Upload onChange={handleImageUpload}>
                      <Button className="px-12  py-6 text-lg md:text-xl font-semibold bg-[#E6E7E6] border border-[#4E4E4E] text-base-color rounded-3xl ">
                        Change Picture
                      </Button>
                    </Upload>
                  </Form.Item>
                )}
              </div>
            </div>
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center">
                {/*  First Name  */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    First Name
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.firstName}
                    name="firstName"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your first name"
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>
                {/*  Last Name  */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Last Name
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.firstName}
                    name="lastName"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your first name"
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/*  Gender  */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Gender
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.gender}
                    name="gender"
                    className="text-white "
                  >
                    <Select
                      placeholder="Select a shop type"
                      suffixIcon={
                        <DownOutlined className="text-[#222222] text-xl mt-1" />
                      }
                      className="h-12 !border-[#E6E7E6]  hover:border-base-color"
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
                    // initialValue={users.dob}
                    name="dob"
                    className="text-white "
                  >
                    <DatePicker
                      suffixIcon={
                        <CalendarOutlined className="text-[#222222] text-xl mt-1" />
                      }
                      placeholder="Enter your validity date"
                      className="w-full py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/*  Ethnicitys   */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Ethnicitys
                  </Typography.Title>
                  <Form.Item
                    initialValue={"American"}
                    name="ethnicitys"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your first name"
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/*  Height   */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Height
                  </Typography.Title>
                  <Form.Item
                    initialValue={"186cm"}
                    name="height"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your first name"
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/*  Height   */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Weight
                  </Typography.Title>
                  <Form.Item
                    initialValue={"80kg"}
                    name="weight"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your first name"
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/*  Presenting Concerns  */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Presenting Concerns
                  </Typography.Title>
                  <Form.Item
                    initialValue={"Breathing problem and chest pain"}
                    name="presentingConcerns"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your first name"
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/* Contact Input */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Contact Number
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.contactNumber}
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
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/*  Email  */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    E-Mail
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.email}
                    name="email"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your email"
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/* Location Input */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Location
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.address}
                    name="location"
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
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/* Country Input */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    State/Country
                  </Typography.Title>
                  <Form.Item
                    initialValue={"Bangladesh"}
                    name="country"
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
                      className="py-2 px-3 text-xl bg-site-color border border-[#E6E7E6] text-base-color hover:bg-transparent focus:bg-transparent "
                    />
                  </Form.Item>
                </div>

                {/*  Marital Status  */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Marital Status
                  </Typography.Title>
                  <Form.Item
                    initialValue={"Married"}
                    name="maritalStatus"
                    className="text-white "
                  >
                    <Select
                      placeholder="Select"
                      suffixIcon={
                        <DownOutlined className="text-[#222222] text-xl mt-1" />
                      }
                      className="h-12 !border-[#E6E7E6]  hover:border-base-color"
                    >
                      <Select.Option value="single">Single</Select.Option>
                      <Select.Option value="married">Married</Select.Option>
                    </Select>
                  </Form.Item>
                </div>

                {/*  Life style(smoke)  */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Life style(smoke)
                  </Typography.Title>
                  <Form.Item
                    initialValue={"Yes"}
                    name="smoke"
                    className="text-white "
                  >
                    <Select
                      placeholder="Select"
                      suffixIcon={
                        <DownOutlined className="text-[#222222] text-xl mt-1" />
                      }
                      className="h-12 !border-[#E6E7E6]  hover:border-base-color"
                    >
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                </div>

                {/* Health insurance  */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Health insurance
                  </Typography.Title>
                  <Form.Item
                    initialValue={"None"}
                    name="healthInsurance"
                    className="text-white "
                  >
                    <Select
                      placeholder="Select "
                      suffixIcon={
                        <DownOutlined className="text-[#222222] text-xl mt-1" />
                      }
                      className="h-12 !border-[#E6E7E6]  hover:border-base-color"
                    >
                      <Select.Option value="private">Private</Select.Option>
                      <Select.Option value="public">Public</Select.Option>
                      <Select.Option value="no">None</Select.Option>
                    </Select>
                  </Form.Item>
                </div>

                {/* Health insurance provider   */}
                <div>
                  <Typography.Title level={4} style={{ color: "#222222" }}>
                    Health insurance provider
                  </Typography.Title>
                  <Form.Item
                    initialValue={"None"}
                    name="healthInsuranceProvider"
                    className="text-white "
                  >
                    <Select
                      placeholder="Select a shop type"
                      suffixIcon={
                        <DownOutlined className="text-[#222222] text-xl mt-1" />
                      }
                      className="h-12 !border-[#E6E7E6]  hover:border-base-color"
                    >
                      <Select.Option value="Jhon">Jhon</Select.Option>
                      <Select.Option value="Merry">Merry</Select.Option>
                      <Select.Option value="no">None</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </div>
              <h2 className="mb-1 text-xl font-semibold">
                Attach Medical Documents
              </h2>
              <Form.Item
                name="medicalDocuments"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Medical Documents is Required",
                  },
                ]}
              >
                <Dragger className="p-6   border-red-300 rounded-md">
                  <div className="flex items-center justify-center !py-10">
                    <p className="">
                      <MdOutlineFileUpload className="size-16 text-secondary-color" />
                    </p>
                    <p className="text-secondary-color text-3xl">Upload file</p>
                  </div>
                </Dragger>
              </Form.Item>

              {isOnlyView ? (
                <div></div>
              ) : (
                <Form.Item>
                  <motion.button
                    variants={buttonVariants}
                    whileTap="tap"
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 7,
                    }}
                    className="px-20 py-3 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color font-semibold rounded-lg mt-8"
                    htmltype="submit"
                  >
                    Save Changes
                  </motion.button>
                </Form.Item>
              )}
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default MyProfile;
