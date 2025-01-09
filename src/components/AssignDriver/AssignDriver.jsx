"use client";
import Container from "@/components/ui/Container";
import { useCreateLoadRequestMutation } from "@/redux/api/loadRequestApi";
import { ConfigProvider, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const AssignDiver = () => {
  const [createLoadRequest, { isLoading }] = useCreateLoadRequestMutation();
  const navigate = useRouter();
  const onFinish = async (values) => {
    const toastId = toast.loading("Assigning Diver...");
    const load = JSON.parse(localStorage.getItem("loadId"));
    const data = [
      {
        load,
        driver: values.driver,
      },
    ];

    const jsonData = JSON.stringify(data);
    console.log(jsonData);
    try {
      const res = await createLoadRequest(data).unwrap();
      console.log(res);

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      navigate.push("/load-request?req=myRequest");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message ||
          error?.error ||
          "An error occurred during Login",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };
  return (
    <div className="py-20">
      <Container>
        <div>
          <h2 className="text-4xl font-bold text-center mb-10">
            Assign A Diver
          </h2>
          <div className="">
            <Form
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              <Typography.Title
                className="mb-3"
                level={4}
                style={{ color: "#222222" }}
              >
                Driver ID
              </Typography.Title>
              <Form.Item
                name="driver"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Driver ID is Required",
                  },
                ]}
              >
                <Input
                  type="text"
                  placeholder="Enter your Driver ID"
                  className="py-2 px-3 text-xl bg-site-color !border !border-[#BDC4DE] rounded text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
              <Form.Item>
                <button
                  className="w-full py-3 border border-[#2B4257] hover:border-[#2B4257] text-xl text-primary-color bg-[#2B4257] font-semibold rounded-2xl mt-8"
                  htmltype="submit"
                >
                  Continue
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AssignDiver;
