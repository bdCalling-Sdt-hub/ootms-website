"use client";
import { Button, Form, Input, Typography } from "antd";
// import { AllImages } from "../../public/assets/AllImages";
// import Container from "./ui/Container";
import Container from "@/components/ui/Container";
import {
  useChangePasswordMutation,
  useMyProfileQuery,
} from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const ChangePassword = () => {
  const { data: myProfile, isFetching } = useMyProfileQuery();

  const [changePassword, { isLoading: loading }] = useChangePasswordMutation();

  const router = useRouter();

  const onFinish = async (values) => {
    if (values.oldPassword === values.newPassword) {
      return toast.error("New password can't be previous one");
    }
    const toastId = toast.loading("Profile updating...");

    const data = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
      userEmail: myProfile?.data?.attributes?.userDetails?.email,
    };

    console.log(data);
    try {
      const res = await changePassword(data).unwrap();

      console.log("res: ", res);

      toast.success(res?.message, {
        id: toastId,
        duration: 2000,
      });

      //   router.push("/profile");
    } catch (error) {
      console.log(error);

      toast.error(
        error?.data?.message || "An error occurred during Change Password",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <div>
      <div className=" my-16 md:mt-20">
        <Container>
          <Form
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full"
          >
            <div className="grid grid-cols-1  gap-5 items-center max-w-xl mx-auto">
              {/*  OldPassword  */}
              <div>
                <Typography.Title
                  level={4}
                  className="text-profile-text-color font-bold"
                >
                  Old Password
                </Typography.Title>
                <Form.Item
                  name="oldPassword"
                  className="text-white"
                  rules={[
                    {
                      required: true,
                      message: "Old Password is Required",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="Type old password"
                    className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color  "
                  />
                </Form.Item>
              </div>

              {/*  NewPassword  */}
              <div>
                <Typography.Title
                  level={4}
                  className="text-profile-text-color font-bold"
                >
                  New Password
                </Typography.Title>
                <Form.Item
                  name="newPassword"
                  className="text-white"
                  rules={[
                    {
                      required: true,
                      message: "New Password is Required",
                    },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="Type your New password"
                    className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color  "
                  />
                </Form.Item>
              </div>

              <div>
                <Typography.Title
                  level={4}
                  className="text-profile-text-color font-bold"
                >
                  Email
                </Typography.Title>
                <Form.Item
                  name="email"
                  value={myProfile?.data?.attributes?.userDetails?.email}
                  className="text-white"
                >
                  <Input className="py-2 px-3 text-xl bg-white border border-[#E6E7E6] text-base-color" />
                </Form.Item>
              </div>
            </div>

            <Button
              className="bg-next-btn py-6 text-next-text font-bold text-xl mb-12 rounded-xl mt-8"
              type="primary"
              block
              htmlType="submit"
            >
              Change Password
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default ChangePassword;
