"use client";
import { Button, Form, Input, Typography, Upload } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { AllImages } from "../../public/assets/AllImages";
// import Container from "./ui/Container";
import Container from "@/components/ui/Container";
import {
  useEditProfileMutation,
  useMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getImageUrl } from "@/helpers/config/envConfig";

const EditProfile = () => {
  const { data: myProfile, isFetching } = useMyProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();
  const [editProfile] = useEditProfileMutation();

  const router = useRouter();
  const [form] = Form.useForm();

  console.log("myProfile2", myProfile?.data?.attributes?.image);

  const { Dragger } = Upload;
  const [isOnlyView, setIsOnlyView] = useState(true);
  const imageUrl = getImageUrl(); // Base URL for images
  const userImagePath = myProfile?.data?.attributes?.image?.replace(/^\/+/, ""); // Remove leading slashes
  const userImage = `${imageUrl.replace(/\/+$/, "")}/${userImagePath}`; // Remove trailing slashes from base URL

  const [uploadedImage, setUploadedImage] = useState(userImage);

  console.log("uploaded Image", userImage);

  // useEffect(() => {
  //   setUploadedImage(myProfile?.data?.attributes?.image);
  // }, [myProfile, editProfile]);

  // const users = {
  //   profilePhoto: AllImages.profile,
  //   firstName: "Alexder",

  //   email: "Rajin572@gmail.com",
  //   number: "01644258678",
  //   address: "Dhaka",
  // };

  const handleImageUpload = (info) => {
    if (info.file.status === "removed") {
      setUploadedImage(myProfile?.data?.attributes?.image);
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
      image:
        values?.image?.file?.originFileObj ||
        myProfile?.data?.attributes?.image,
    };

    console.log("data", data);

    // Append the file directly
    if (data.image instanceof File) {
      formData.append("profileImage", data.image);
    } else {
      console.warn("Profile image is not a file. Check your data:", data.image);
    }

    // Append other fields
    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("address", data.address);

  
    // console.log({ ...values, image: values.image });
    try {
      if (myProfile?.data?.attributes?.isComplete) {
        res = await editProfile(formData).unwrap();
      } else {
        if (myProfile?.data?.attributes?.role === "driver") {
          formData.append("truckNumber", values.truckNumber);
          formData.append("cdlNumber", values.cdlNumber);
          formData.append("trailerSize", values.trailerSize);
          formData.append("palletSpace", values.palletSpace);
        } else {
          formData.append("taxid", values.taxid);
        }
          // Log FormData content
    formData.forEach((value, key) => {
      console.log(key, value);
    });


        res = await updateProfile(formData).unwrap();
      }
      console.log("res: ", res);

      toast.success(res?.message, {
        id: toastId,
        duration: 2000,
      });
      form.resetFields();
    } catch (error) {
      console.log(error);

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
  //   console.log(`${name}: ${value}`);
  // };

  if (isFetching) {
    return <div>Loading....</div>;
  }

  // const imageToShow =
  //   uploadedImage !== AllImages.profile
  //     ? uploadedImage
  //     : myProfile?.data?.attributes?.image || AllImages.profile;

  // console.log("imageToShow", imageToShow);

  return (
    <div>
      <div className=" my-16 md:mt-20">
        {myProfile?.data?.attributes?.isComplete ? (
          <>Edit Profile</>
        ) : (
          <> Complete your Profile</>
        )}
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center ">
            <h1 className="text-next-btn text-3xl md:text-3xl lg:text-4xl font-semibold mb-6 order-last sm:order-first">
              Edit Profile Picture
            </h1>

            {/* <div className="mb-10 sm:mb-0">
              {isOnlyView ? (
                <Button
                  onClick={toggleOnlyView}
                  type="primary"
                  className="px-12  py-6 text-lg md:text-xl font-semibold bg-secondary-color border border-secondary-color text-site-color rounded-3xl shadow-inner shadow-[#00000040]"
                >
                  Edit Profile
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
            </div> */}
          </div>

          <Form
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full"
          >
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <div className="rounded-full border-2 border-next-btn overflow-hidden">
                <Image
                  width={0}
                  height={0}
                  src={uploadedImage}
                  alt={myProfile?.data?.attributes?.fullName || "Profile image"}
                  className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] object-cover"
                />
              </div>
              <div className="flex items-start flex-col">
                <Form.Item name="image" className="text-white">
                  {isFetching ? (
                    <p>Loading...</p>
                  ) : (
                    <Upload maxCount={1} onChange={handleImageUpload}>
                      <Button className="bg-next-btn py-6 text-next-text font-semibold text-xl md:mt-16 rounded-xl px-8">
                        Change Picture
                      </Button>
                    </Upload>
                  )}
                </Form.Item>
              </div>
            </div>
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 items-center">
                {/*   Full Name */}
                <div>
                  <Typography.Title
                    level={4}
                    className="text-profile-text-color font-bold"
                  >
                    Full Name
                  </Typography.Title>
                  <Form.Item
                    initialValue={myProfile?.data?.attributes?.fullName}
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
                    initialValue={myProfile?.data?.attributes?.phoneNumber}
                    className="text-white"
                  >
                    <Input
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
                    initialValue={myProfile?.data?.attributes?.address}
                    className="text-white"
                  >
                    <Input
                      placeholder="Enter your Address"
                      className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color  "
                    />
                  </Form.Item>
                </div>

                {myProfile?.data?.attributes?.isComplete === false ? (
                  <>
                    {myProfile?.data?.attributes?.role === "user" && (
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
                            initialValue={myProfile?.data?.attributes?.taxid}
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

                    {myProfile?.data?.attributes?.role === "driver" && (
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
