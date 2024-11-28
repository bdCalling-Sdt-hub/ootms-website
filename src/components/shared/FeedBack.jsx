"use client";

import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { Button, Form, Modal } from "antd";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import "@smastrom/react-rating/style.css";

const FeedBack = () => {
  const [rating, setRating] = useState(0);
  const [openFeedback, setOpenFeedback] = useState(false);
  const showoOpenFeedbackModal = () => {
    setOpenFeedback(true);
  };
  const handleOpenFeedbackCancel = () => {
    setOpenFeedback(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    setOpenFeedback(false);
  };
  return (
    <div>
      <div className="fixed bottom-10 right-10 z-50">
        <div
          className="w-fit p-2 rounded-full bg-primary-color border border-[#223546] cursor-pointer"
          onClick={showoOpenFeedbackModal}
        >
          <Image
            alt="feedback"
            src={AllImages.feedback}
            sizes="100vw"
            className="w-10 h-10 -z-20"
          />
        </div>
      </div>
      <Modal
        open={openFeedback}
        onCancel={handleOpenFeedbackCancel}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px]"
      >
        <div className="mt-5">
          <h1 className="text-4xl font-bold mb-5 text-[#2B4257]">
            How are you feeling?
          </h1>
          <p className="text-xl text-[#2B4257] mb-5 text-center">
            Your input is valuable in helping us better understand your needs
            and tailor our service accordingly.
          </p>
          <div className="flex flex-col items-center mb-14">
            <Rating
              style={{ maxWidth: 180 }} // Adjust the icon size
              value={rating}
              onChange={setRating}
            />
          </div>
          <Form onFinish={onFinish}>
            <Form.Item
              name="feedback"
              rules={[
                { required: true, message: "Please enter your feedback!" },
              ]}
            >
              <textarea
                rows={5}
                className="bg-[#FBFBFB] border border-[#E4E4E4] px-3 py-4 rounded-lg w-full"
                placeholder="Enter your feedback"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="submit"
                className="!bg-[#2B4257] text-white py-6 px-4 rounded-lg w-full !border !border-[#2B4257] mt-3 text-xl"
              >
                Submit Now
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default FeedBack;
