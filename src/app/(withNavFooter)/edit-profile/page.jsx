"use client";
import { Button, Form, Input, Typography, Upload } from "antd";
import Image from "next/image";
import { useState } from "react";
// import { AllImages } from "../../public/assets/AllImages";
// import Container from "./ui/Container";
import Container from "@/components/ui/Container";
import { AllImages } from "../../../../public/assets/AllImages";
import {
  useEditProfileMutation,
  useMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const EditProfile = () => {
  const { data: myProfile, isFetching } = useMyProfileQuery();
  const { data: editProfile, isFetching:loading } = useEditProfileMutation();
  // const data = {
  //   FullName: "John Doe",
  //   Email: "johndoe@example.com",
  //   Phone: "123456789",
  //   Country: "USA",
  //   Address: "123 Main St",
  //   roll: "user",
  // };

  const [updateProfileData] = useUpdateProfileMutation();

  const router = useRouter();
  const [form] = Form.useForm();

  console.log("myProfile2", myProfile?.data?.attributes);

  const { Dragger } = Upload;
  const [isOnlyView, setIsOnlyView] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(AllImages.profile);

  // const users = {
  //   profilePhoto: AllImages.profile,
  //   firstName: "Alexder",

  //   email: "Rajin572@gmail.com",
  //   number: "01644258678",
  //   address: "Dhaka",
  // };

  const onFinish = async (values) => {
    console.log("userUpdate:", values);
    const toastId = toast.loading("Profile updating...");

    try {
      // let data = {
      //   fullName: values.fullName,
      //   password: values.password,
      //   email: values.email,
      // };

      const res = await updateProfileData(values).unwrap();

      console.log("res: ", res);

      // localStorage.setItem("ootms_createUserToken", res?.data?.signUpToken);

      toast.success(res?.message, {
        id: toastId,
        duration: 2000,
      });
      // form.reset();

      // router.push("/sign-up/verify");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "An error occurred during Signup", {
        id: toastId,
        duration: 2000,
      });
    }
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

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   console.log(`${name}: ${value}`);
  // };
  

  if (isFetching) {
  return <div>Loading....</div>
}
  return (
    <div>
      <div className=" my-16 md:mt-20">
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
                  src={myProfile?.data?.attributes?.image || uploadedImage}
                  alt={myProfile?.data?.attributes?.fullName || "Profile image"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] object-cover"
                />
              </div>
              <div className="flex items-start flex-col">
                <Form.Item name="profileImage" className="text-white ">
                  <Upload onChange={handleImageUpload}>
                    <Button className="bg-next-btn py-6 text-next-text font-semibold text-xl md:mt-16 rounded-xl px-8">
                      Change Picture
                    </Button>
                  </Upload>
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
                        initialValue={myProfile?.data?.attributes?.truckNumber}
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
                        initialValue={myProfile?.data?.attributes?.cdlNumber}
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
                        initialValue={myProfile?.data?.attributes?.trailerSize}
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
                        initialValue={myProfile?.data?.attributes?.palletSpace}
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
