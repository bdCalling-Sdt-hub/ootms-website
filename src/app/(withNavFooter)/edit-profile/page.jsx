"use client";
import { Button, Form, Input, Spin, Typography, Upload } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { AllImages } from "../../public/assets/AllImages";
// import Container from "./ui/Container";
import Container from "@/components/ui/Container";
import {
  useCompleteProfileMutation,
  useEditProfileMutation,
  useMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getImageUrl } from "@/helpers/config/envConfig";

const EditProfile = () => {
  const { data: myProfile, isFetching } = useMyProfileQuery();
  const [completeProfile, { isLoading }] = useCompleteProfileMutation();
  const [editProfile, { isLoading: loading }] = useEditProfileMutation();

  const router = useRouter();
  const [form] = Form.useForm();

  const { Dragger } = Upload;
  const [isOnlyView, setIsOnlyView] = useState(true);
  const imageUrl = getImageUrl(); // Base URL for images
  const userImagePath =
    myProfile?.data?.attributes?.userDetails?.image?.replace(/^\/+/, ""); // Remove leading slashes

  const userImage = `${imageUrl.replace(/\/+$/, "")}/${userImagePath}`; // Remove trailing slashes from base URL

  const [uploadedImage, setUploadedImage] = useState(userImage);

  useEffect(() => {
    setUploadedImage(userImage);
  }, [myProfile, userImage]);

  const handleImageUpload = (info) => {
    if (info.file.status === "removed") {
      setUploadedImage(userImage);
    } else {
      const file = info.file.originFileObj;
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setUploadedImage(imageUrl);
      }
    }
  };

  const onFinish = async (values) => {
    const formData = new FormData();
    const toastId = toast.loading("Profile updating...");
    let res;
    const data = {
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      address: values.address,
      profileImage: values?.profileImage?.file?.originFileObj,
    };

    let newData;

    // Append other fields
    if (data.profileImage) {
      formData.append("profileImage", data.profileImage);
    }
    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("address", data.address);

    try {
      if (myProfile?.data?.attributes?.userDetails?.isComplete) {
        res = await editProfile(formData).unwrap();
      } else {
        if (myProfile?.data?.attributes?.userDetails?.role === "driver") {
          // formData.append("truckNumber", values.truckNumber);
          // formData.append("cdlNumber", values.cdlNumber);
          // formData.append("trailerSize", values.trailerSize);
          // formData.append("palletSpace", values.palletSpace);

          newData = {
            ...data,
            truckNumber: values.truckNumber,
            cdlNumber: values.cdlNumber,
            trailerSize: values.trailerSize,
            palletSpace: values.palletSpace,
          };
        } else {
          // formData.append("taxid", values.taxid);
          newData = {
            ...data,
            taxid: values.taxid,
          };
        }
        // Log FormData content

        res = await completeProfile(newData).unwrap();
      }

      toast.success(res?.message, {
        id: toastId,
        duration: 2000,
      });

      router.push("/profile");
    } catch (error) {
      toast.error(
        error?.data?.message || "An error occurred during Update Profile",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };
  // const handleImageUpload = (info) => {
  //   if (info.file.status === "removed") {
  //     setUploadedImage(AllImages.profile); // Reset to null or fallback image
  //   } else {
  //     const file = info.file.originFileObj;
  //     if (file) {
  //       setUploadedImage(URL.createObjectURL(file)); // Set new uploaded image
  //     }
  //   }
  // };

  const toggleOnlyView = () => setIsOnlyView(!isOnlyView);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));

  // };

  if (isFetching || isLoading || loading) {
    return (
      <div>
        <div className="my-10 flex justify-center items-center">
          <Spin size="large" />
        </div>
      </div>
    );
  }

  // const imageToShow =
  //   uploadedImage !== AllImages.profile
  //     ? uploadedImage
  //     : myProfile?.data?.attributes?.image || AllImages.profile;

  return (
    <div>
      <div className=" my-16 md:mt-20">
        {/* {myProfile?.data?.attributes?.isComplete ? (
          <>Edit Profile</>
        ) : (
          <> Complete your Profile</>
        )} */}
        <Container>
          {myProfile?.data?.attributes?.userDetails?.isComplete == true ? (
            <div className="flex flex-col sm:flex-row justify-between items-center ">
              <h1 className="text-next-btn text-3xl md:text-3xl lg:text-4xl font-semibold mb-6 order-last sm:order-first">
                Edit Profile Picture
              </h1>
            </div>
          ) : (
            <h1 className="text-next-btn text-3xl md:text-3xl lg:text-4xl font-semibold mb-6 order-last sm:order-first">
              Complete your Profile
            </h1>
          )}

          <Form
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full"
          >
            <div className="flex flex-col sm:flex-row items-center gap-10">
              {myProfile?.data?.attributes?.userDetails?.isComplete == true && (
                <>
                  <div className="rounded-full border-2 border-next-btn overflow-hidden">
                    <Image
                      width={0}
                      height={0}
                      src={uploadedImage}
                      alt={
                        myProfile?.data?.attributes?.userDetails?.fullName ||
                        "Profile image"
                      }
                      sizes="100vw"
                      className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] object-cover"
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <Form.Item name="profileImage" className="text-white">
                      {isFetching ? (
                        <p>Loading...</p>
                      ) : (
                        <Upload
                          customRequest={(options) => {
                            setTimeout(() => {
                              options.onSuccess("ok");
                            }, 1000);
                          }}
                          maxCount={1}
                          onChange={handleImageUpload}
                        >
                          <Button className="bg-next-btn py-6 text-next-text font-semibold text-xl md:mt-16 rounded-xl px-8">
                            Change Picture
                          </Button>
                        </Upload>
                      )}
                    </Form.Item>
                  </div>
                </>
              )}
            </div>
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 items-center">
                {/*   Full Name */}

                {myProfile?.data?.attributes?.userDetails?.isComplete ==
                  true && (
                  <div>
                    <Typography.Title
                      level={4}
                      className="text-profile-text-color font-bold"
                    >
                      Full Name
                    </Typography.Title>
                    <Form.Item
                      initialValue={
                        myProfile?.data?.attributes?.userDetails?.fullName
                      }
                      name="fullName"
                      className="text-white"
                    >
                      <Input
                        name="FullName" // Ensure the name matches the key in formData
                        className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color"
                        // onChange={handleInputChange}
                      />
                    </Form.Item>
                  </div>
                )}

                {/*  Phone Number  */}
                <div>
                  <Typography.Title
                    level={4}
                    className="text-profile-text-color font-bold"
                  >
                    Phone Number
                  </Typography.Title>
                  <Form.Item
                    name="phoneNumber"
                    initialValue={
                      myProfile?.data?.attributes?.userDetails?.phoneNumber
                    }
                    className="text-white"
                    rules={[{ required: true }]}
                  >
                    <Input
                      type="text"
                      placeholder="Enter your Phone Number"
                      className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color  "
                    />
                  </Form.Item>
                </div>
                {/*  Address  */}
                <div>
                  <Typography.Title
                    level={4}
                    className="text-profile-text-color font-bold"
                  >
                    Address
                  </Typography.Title>
                  <Form.Item
                    name="address"
                    initialValue={
                      myProfile?.data?.attributes?.userDetails?.address
                    }
                    className="text-white"
                    rules={[{ required: true }]}
                  >
                    <Input
                      placeholder="Enter your Address"
                      className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color  "
                    />
                  </Form.Item>
                </div>

                {myProfile?.data?.attributes?.userDetails?.isComplete ==
                false ? (
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
                            rules={[{ required: true }]}
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
                            rules={[{ required: true }]}
                            name="truckNumber"
                            initialValue={
                              myProfile?.data?.attributes?.truckNumber
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
                            rules={[{ required: true }]}
                            name="cdlNumber"
                            initialValue={
                              myProfile?.data?.attributes?.cdlNumber
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
                            rules={[{ required: true }]}
                            name="trailerSize"
                            initialValue={
                              myProfile?.data?.attributes?.trailerSize
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
                            rules={[{ required: true }]}
                            name="palletSpace"
                            initialValue={
                              myProfile?.data?.attributes?.palletSpace
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

              <Button
                className="bg-next-btn py-6 text-next-text font-bold text-xl mb-12 rounded-xl mt-8"
                type="primary"
                block
                htmlType="submit"
              >
                Save Profile
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default EditProfile;
