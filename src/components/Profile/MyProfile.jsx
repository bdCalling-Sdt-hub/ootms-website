"use client";
import { Button, Form, Input, Typography, Upload } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { useMyProfileQuery } from "@/redux/api/authApi";
import { getImageUrl } from "@/helpers/config/envConfig";
import { m } from "framer-motion";

const MyProfile = () => {
  const { data: myProfile, isFetching } = useMyProfileQuery();

  console.log("myProfile:", myProfile?.data?.attributes);
  const url = getImageUrl();
  const userImage = url + myProfile?.data?.attributes?.image;

  console.log("userImage:", userImage);
  console.log("userName:", myProfile?.data?.attributes?.fullName);

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
  // const toggleOnlyView = () => setIsOnlyView(!isOnlyView);
  return (
    <div>
      <div className="min-h-screen my-16 md:mt-20">
        <Container>
          {/* <div className="flex flex-col sm:flex-row justify-between items-center ">
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
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row justify-between items-center ">
            {myProfile?.data?.attributes?.phoneNumber &&
            myProfile?.data?.attributes?.address ? (
              ""
            ) : (
              <>
                <h1 className="text-next-btn text-3xl md:text-3xl lg:text-4xl font-semibold mb-6 order-last sm:order-first">
                  Please Update Your Profile
                </h1>
              </>
            )}

            <div className="mb-10 sm:mb-0">
              <Button
                onClick={onEdit}
                type="primary"
                className="px-8 py-6 text-lg md:text-xl font-semibold bg-next-btn border  text-site-color rounded-3xl shadow-inner shadow-[#00000040]"
              >
                <MdEdit className="bg-white text-black rounded-full text-3xl p-1" />{" "}
                Edit Profile
              </Button>
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
                  src={uploadedImage}
                  alt="profile_img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] object-cover"
                />
              </div>

              {/* <div className="flex items-start flex-col">
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
              </div> */}
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
                  <div className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color   ">
                    {myProfile?.data?.attributes?.fullName}
                  </div>
                </div>
                {/* Email  */}
                <div>
                  <Typography.Title
                    level={4}
                    className="text-profile-text-color font-bold"
                  >
                    Emaill
                  </Typography.Title>
                  <div className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color   ">
                    {myProfile?.data?.attributes?.email}
                  </div>
                </div>
                {myProfile?.data?.attributes?.phoneNumber && (
                  <>
                    <div>
                      <Typography.Title
                        level={4}
                        className="text-profile-text-color font-bold"
                      >
                        Phone
                      </Typography.Title>
                      <Form.Item name="Phone" className="text-white ">
                        <Input
                          placeholder="Enter your phone"
                          className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color   "
                        />
                      </Form.Item>
                    </div>
                  </>
                )}
                {myProfile?.data?.attributes?.address && (
                  <>
                    <div>
                      <Typography.Title
                        level={4}
                        className="text-profile-text-color font-bold"
                      >
                        Phone
                      </Typography.Title>
                      <Form.Item name="Phone" className="text-white ">
                        <Input
                          placeholder="Enter your phone"
                          className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color   "
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Typography.Title
                        level={4}
                        className="text-profile-text-color font-bold"
                      >
                        Address
                      </Typography.Title>
                      <Form.Item name="Address" className="text-white ">
                        <Input
                          placeholder="Enter your address"
                          className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color   "
                        />
                      </Form.Item>
                    </div>
                  </>
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
