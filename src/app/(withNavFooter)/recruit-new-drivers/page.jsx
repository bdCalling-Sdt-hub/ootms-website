"use client";

import { Form, Input, Typography } from "antd";

const Recruit = () => {
  const onFormLayoutChange = () => {
    console.log("ok");
  };
  return (
    <div className="mb-24 container w-[90%] lg:w-[70%] mx-auto lg:px-20">
      <h1 className="text-recruter-heading text-center text-3xl font-semibold my-16">
        Recruit New Drivers
      </h1>
      <div className=" ">
        <Form initialValues={{}} onValuesChange={onFormLayoutChange}>
          <div>
            <Typography className="text-contact-input font-semibold text-xl mb-2 ">
              Driver’s Contact Number
            </Typography>
            <Form.Item
              name="contactNumber"
              rules={[
                { required: true, message: "Contact number is required" },
              ]}
            >
              <Input
                className="bg-recruter-input-bg"
                placeholder="Enter driver’s contact number"
              />
            </Form.Item>
          </div>
          <button className="bg-next-btn w-full text-next-text font-bold text-xl mb-12 rounded-xl py-2">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Recruit;
