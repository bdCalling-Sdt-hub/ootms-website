"use client";
import Container from "@/components/ui/Container";
import { ConfigProvider, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const AssignDiver = () => {
  const navigate = useRouter();
  const onFinish = (values) => {
    console.log("assign diver:", values);

    navigate.push("/assign-load");
  };
  return (
    <div className="py-20">
      <Container>
        <div>
          <h2 className="text-4xl font-bold text-center mb-10">
            Assign A Diver
          </h2>
          <div className="w-full sm:w-[90%] lg:w-[70%] mx-auto">
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
                name="driverId"
                className="text-base-color"
                rules={[
                  {
                    required: true,
                    message: "Driver ID is Required",
                  },
                ]}
              >
                <Input
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
