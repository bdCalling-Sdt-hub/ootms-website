"use client";
import { Checkbox, Form, Modal } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { PiArrowSquareDownLight, PiArrowSquareUpLight } from "react-icons/pi";
import AssignLoadForMultipleDriver from "../AssignDriver/AssignLoadForMultipleDriver";
import Container from "../ui/Container";

const AssignLoad = () => {
  let loadDataFromLocal = JSON.parse(localStorage.getItem("myXlLoad"));

  console.log("loadDataFromLocal", loadDataFromLocal[0]);

  const [loadId, SetLoadId] = useState();
  const navigate = useRouter();
  const [openAddDriverIdModal, setOpenAddDriverIdModal] = useState(false);
  //* It's Use to Show Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showViewModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Add Driver
  const showoOpenAddDriverIdModal = () => {
    setOpenAddDriverIdModal(true);
  };
  const handleOpenAddDriverIdModalCancle = () => {
    setOpenAddDriverIdModal(false);
  };
  const onFinish = (values) => {
    SetLoadId(values.loads);
    showViewModal();
  };

  return (
    <div className=" py-20">
      <Container>
        <div className="w-full sm:w-[90%] lg:w-[70%] mx-auto">
          <div className="flex justify-between items-center ">
            <IoChevronBackOutline
              className="text-3xl cursor-pointer text-[#2B4257] font-semibold"
              onClick={() => window.location.replace("/dispatching")}
            />
            <p className="text-4xl text-[#2B4257] font-semibold">Assign Load</p>
            <div></div>
          </div>
          <Form className="mt-10" onFinish={onFinish}>
            {/* Load checkboxes section */}
            <div className="">
              <Form.Item name="loads" valuePropName="checked">
                <Checkbox.Group className="flex flex-col items-start gap-y-5">
                  {/* Load 1 */}

                  {loadDataFromLocal?.map((data, index) => (
                    <div
                      key={data?._id}
                      className="flex items-center justify-between w-full"
                    >
                      <Checkbox
                        value={`${data?._id}`}
                        className="text-3xl font-semibold"
                      >
                        Load - {index + 1}
                      </Checkbox>
                      <div className="text-2xl font-normal">
                        <p>shipper Name: {data?.shipperName}</p>
                        <p>Reciver Name: {data?.receiverName}</p>
                      </div>
                      <div className="ml-6 text-2xl">
                        <p className="flex items-center">
                          <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                          <span>{data?.shippingAddress}</span>
                        </p>
                        <p className="flex items-center">
                          <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                          <span>{data?.receivingAddress}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </Checkbox.Group>
              </Form.Item>
            </div>

            {/* Submit button */}
            <Form.Item>
              <button
                className="w-full py-3 border border-[#2B4257] hover:border-[#2B4257] text-xl text-primary-color bg-[#2B4257] font-semibold rounded-2xl mt-8"
                htmltype="submit"
              >
                Assign To Driver
              </button>
            </Form.Item>
          </Form>
        </div>
      </Container>
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{ textAlign: "center" }}
        className="lg:!w-[500px]"
      >
        <div className="px-10 pt-10">
          <p className="text-2xl text-center font-semibold">
            Do you have preferred Driver?
          </p>
          <div className="flex justify-between items-center gap-5 mt-5">
            <button
              className="bg-next-btn w-full p-2 text-next-text font-bold text-xl mb-4 rounded-xl"
              onClick={() => {
                localStorage.removeItem("myXlLoad"),
                  navigate.push("/dispatching");
              }}
            >
              No
            </button>{" "}
            <button
              className="bg-next-btn w-full p-2 text-next-text font-bold text-xl mb-4 rounded-xl"
              onClick={() => {
                showoOpenAddDriverIdModal();
                handleCancel();
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={openAddDriverIdModal}
        onCancel={handleOpenAddDriverIdModalCancle}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px] mt-20"
      >
        <AssignLoadForMultipleDriver loadId={loadId} />
      </Modal>
    </div>
  );
};

export default AssignLoad;
