"use client";

import { Form, Input, Typography } from "antd";

const Recruit = () => {
  const onFormLayoutChange = () => {
    console.log("ok");
  };
  return (
    <div className="mb-24">
      <h1 className="text-recruter-heading text-center text-3xl font-semibold my-16">
        Recruit New Drivers
      </h1>
      <div className="flex justify-center items-center">
        <Form initialValues={{}} onValuesChange={onFormLayoutChange}>
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2 lg:-ml-12">
              Driver’s Contact Number
            </Typography>
            <Form.Item
              name="contactNumber"
              rules={[
                { required: true, message: "Contact number is required" },
              ]}
            >
              <Input
                className="bg-recruter-input-bg w-96 lg:w-[775px] p-4 lg:-ml-12"
                placeholder="Enter driver’s contact number"
              />
            </Form.Item>
          </div>
          <button className="bg-next-btn w-96 md:w-96 lg:w-[775px] p-2 text-next-text font-bold text-xl mb-12 rounded-xl lg:-ml-12">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Recruit;
