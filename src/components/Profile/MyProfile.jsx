"use client";
import { getImageUrl } from "@/helpers/config/envConfig";
import { useMyProfileQuery, useMytruckQuery } from "@/redux/api/authApi";
import { Button, Flex, Form, Input, Spin, Typography, Upload } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";

const MyProfile = () => {
  const { data: myProfile, isFetching } = useMyProfileQuery();
  const { data: myTruck, isFetching: loading } = useMytruckQuery();

  // console.log("myProfile:", myProfile?.data?.attributes);
  console.log("myTruck:", myTruck?.data?.attributes?.truck);
  console.log("mytailer:", myTruck?.data?.attributes?.trailer);
  const url = getImageUrl();

  let userImage;

  if (myProfile?.data?.attributes?.userDetails?.isSocialLogin) {
    userImage = myProfile?.data?.attributes?.userDetails?.image;
  } else {
    userImage = `${url.replace(
      /\/+$/,
      ""
    )}/${myProfile?.data?.attributes?.userDetails?.image?.replace(/^\/+/, "")}`;
  }

  console.log("userName:", myProfile?.data?.attributes?.userDetails?.fullName);
  console.log("userName:", myProfile?.data?.attributes);

  const router = useRouter();
  const { Dragger } = Upload;
  const [isOnlyView, setIsOnlyView] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(AllImages.profile);

  const onFinish = (values) => {
    console.log("userUpdate:", values);
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

  // on click edit
  function onEdit() {
    router.push("/edit-profile");
  }
  function onPassChange() {
    router.push("/change-password");
  }

  // const isCompleted = false;
  // console.log(myProfile?.data?.attributes?.isComplete );
  // console.log("myProfile:", myProfile);

  // const toggleOnlyView = () => setIsOnlyView(!isOnlyView);

  if (isFetching || loading) {
    return (
      <div>
        <div className="my-10 flex justify-center items-center">
          <Spin size="large" />
        </div>
      </div>
    );
  }
  console.log(
    "myProfile?.data?.attributes?.userDetails?.isSocialLogin",
    myProfile?.data?.attributes?.userDetails?.isSocialLogin
  );

  return (
    <div>
      <div className="min-h-screen my-16 md:mt-20">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center ">
            {/* {isCompleted ? <></> : <></>} */}
            <>
              <h1 className="text-next-btn text-3xl md:text-3xl lg:text-4xl font-semibold mb-6 order-last sm:order-first">
                {myProfile?.data?.attributes?.userDetails?.isComplete ? (
                  <>Edit Your Profile</>
                ) : (
                  <> Please Complete Your Profile</>
                )}
              </h1>
            </>

            <div className="mb-10 sm:mb-0 flex flex-col gap-6">
              <Button
                onClick={onEdit}
                type="primary"
                className="px-8 py-6 text-lg md:text-xl font-semibold bg-next-btn border  text-site-color rounded-3xl shadow-inner shadow-[#00000040]"
              >
                <MdEdit className="bg-white text-black rounded-full text-3xl p-1" />{" "}
                {myProfile?.data?.attributes?.userDetails?.isComplete ? (
                  <>Edit Profile</>
                ) : (
                  <> Complete your Profile</>
                )}
              </Button>
              {myProfile?.data?.attributes?.userDetails?.isSocialLogin ===
                false && (
                <Button
                  onClick={onPassChange}
                  type="primary"
                  className="px-8 py-6 text-lg md:text-xl font-semibold bg-next-btn border  text-site-color rounded-3xl shadow-inner shadow-[#00000040]"
                >
                  <MdEdit className="bg-white text-black rounded-full text-3xl p-1" />
                  Change Your Password
                </Button>
              )}
            </div>
          </div>

          <Form
            // disabled={isOnlyView}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full"
          >
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="rounded-full border-2 border-add-profile-border overflow-hidden">
                <Image
                  src={userImage}
                  alt="profile_img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] object-cover"
                />
              </div>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-5 items-center">
                {/*  First Name  */}
                <div>
                  <Typography.Title
                    level={4}
                    className="text-profile-text-color font-bold"
                  >
                    Full Name
                  </Typography.Title>
                  <Form.Item
                    name="fullName"
                    initialValue={
                      myProfile?.data?.attributes?.userDetails?.fullName
                    }
                    className="text-white"
                  >
                    <Input
                      placeholder="Enter your fullName"
                      className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color"
                    />
                  </Form.Item>
                </div>

                {/* Email  */}

                <div>
                  <Typography.Title
                    level={4}
                    className="text-profile-text-color font-bold"
                  >
                    Email
                  </Typography.Title>
                  <Form.Item
                    name="email"
                    initialValue={
                      myProfile?.data?.attributes?.userDetails?.email
                    }
                    className="text-white"
                  >
                    <Input
                      placeholder="Enter your email"
                      className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color"
                    />
                  </Form.Item>
                </div>

                {/* Address  */}
                <div>
                  <Typography.Title
                    level={4}
                    className="text-profile-text-color font-bold"
                  >
                    Address
                  </Typography.Title>
                  <div className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color   ">
                    {myProfile?.data?.attributes?.userDetails?.address ||
                      "Please Complete your profile"}
                  </div>
                </div>
                {/* Phone  */}
                <div>
                  <Typography.Title
                    level={4}
                    className="text-profile-text-color font-bold"
                  >
                    Phone
                  </Typography.Title>
                  <div className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color   ">
                    {myProfile?.data?.attributes?.userDetails?.phoneNumber ||
                      "Please Complete your profile"}
                  </div>
                </div>

                {myProfile?.data?.attributes?.userDetails?.isComplete ? (
                  <>
                    {myProfile?.data?.attributes?.userDetails?.role ===
                      "user" && (
                      <>
                        {/* {data.roll === "user" && ( */}
                        {/*  Tax ID  */}
                        <div>
                          <Typography.Title
                            level={4}
                            className="text-profile-text-color font-bold"
                          >
                            Tax ID
                          </Typography.Title>
                          <Form.Item
                            name="taxid"
                            initialValue={
                              myProfile?.data?.attributes?.userDetails?.taxid
                            }
                            className="text-white"
                          >
                            <Input
                              placeholder="Enter your Tax ID"
                              className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color "
                            />
                          </Form.Item>
                        </div>
                      </>
                    )}

                    {myProfile?.data?.attributes?.userDetails?.role ===
                      "driver" && (
                      <>
                        {/* Truck Number */}
                        <div>
                          <Typography.Title
                            level={4}
                            className="text-profile-text-color font-bold"
                          >
                            Truck Number
                          </Typography.Title>
                          <Form.Item
                            name="truckNumber"
                            initialValue={
                              myTruck?.data?.attributes?.truck[0]?.truckNumber
                            }
                            className="text-white"
                          >
                            <Input
                              placeholder="Enter your Truck Number"
                              className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color"
                            />
                          </Form.Item>
                        </div>
                        {/* CDL Number */}
                        <div>
                          <Typography.Title
                            level={4}
                            className="text-profile-text-color font-bold"
                          >
                            CDL Number
                          </Typography.Title>
                          <Form.Item
                            name="cdlNumber"
                            initialValue={
                              myTruck?.data?.attributes?.truck[0]?.cdlNumber
                            }
                            className="text-white"
                          >
                            <Input
                              placeholder="Enter your CDL Number"
                              className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color"
                            />
                          </Form.Item>
                        </div>
                        {/* Trailer Size */}
                        <div>
                          <Typography.Title
                            level={4}
                            className="text-profile-text-color font-bold"
                          >
                            Trailer Size
                          </Typography.Title>
                          <Form.Item
                            name="trailerSize"
                            initialValue={
                              myTruck?.data?.attributes?.trailer[0]?.trailerSize
                            }
                            className="text-white"
                          >
                            <Input
                              placeholder="Enter your Trailer Size"
                              className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color"
                            />
                          </Form.Item>
                        </div>
                        {/* Pallet Space */}
                        <div>
                          <Typography.Title
                            level={4}
                            className="text-profile-text-color font-bold"
                          >
                            Pallet Space
                          </Typography.Title>
                          <Form.Item
                            name="palletSpace"
                            initialValue={
                              myTruck?.data?.attributes?.trailer[0]?.palletSpace
                            }
                            className="text-white"
                          >
                            <Input
                              placeholder="Enter your Pallet Space"
                              className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color"
                            />
                          </Form.Item>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>

              {/* <h2 className="mb-1 text-xl font-semibold">
                Attach Medical Documents
              </h2> */}
              {/* <Form.Item
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
              </Form.Item> */}

              {/* {isOnlyView ? (
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
              )} */}
            </div>

            {/* <Button
              className="bg-next-btn py-6 text-next-text font-bold text-xl mb-12 rounded-xl mt-8"
              type="primary"
              block
              htmlType="submit"
            >
              Save Profile
            </Button> */}
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default MyProfile;
