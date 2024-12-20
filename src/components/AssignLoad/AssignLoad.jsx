"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Checkbox, Form, Modal, Space } from "antd";
import { PiArrowSquareDownLight, PiArrowSquareUpLight } from "react-icons/pi";
import Container from "../ui/Container";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FiPlusCircle } from "react-icons/fi";
import AssignDiver from "../AssignDriver/AssignDriver";
import { useState } from "react";

const AssignLoad = () => {
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
    console.log("Selected loads:", values);
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
              <Form.Item
                name="loads"
                valuePropName="checked"
                initialValue={["Load - 1", "Load - 3"]}
              >
                <Checkbox.Group className="flex flex-col items-start gap-y-5">
                  {/* Load 1 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 1"
                      className="text-3xl font-semibold"
                    >
                      Load - 1
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 2 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 2"
                      className="text-3xl font-semibold"
                    >
                      Load - 2
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 3 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 3"
                      className="text-3xl font-semibold"
                    >
                      Load - 3
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 4 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 4"
                      className="text-3xl font-semibold"
                    >
                      Load - 4
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 5 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 5"
                      className="text-3xl font-semibold"
                    >
                      Load - 5
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 6 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 6"
                      className="text-3xl font-semibold"
                    >
                      Load - 6
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 7 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 7"
                      className="text-3xl font-semibold"
                    >
                      Load - 7
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 8 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 8"
                      className="text-3xl font-semibold"
                    >
                      Load - 8
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 9 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 9"
                      className="text-3xl font-semibold"
                    >
                      Load - 9
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>

                  {/* Load 10 */}
                  <div className="flex items-center justify-between w-full">
                    <Checkbox
                      value="Load - 10"
                      className="text-3xl font-semibold"
                    >
                      Load - 10
                    </Checkbox>
                    <div className="ml-6 text-2xl">
                      <p className="flex items-center">
                        <PiArrowSquareUpLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Rupatoli, Barishal</span>
                      </p>
                      <p className="flex items-center">
                        <PiArrowSquareDownLight className="text-base-color text-3xl font-extrabold" />{" "}
                        <span>Banasree, Dhaka</span>
                      </p>
                    </div>
                  </div>
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
              onClick={() => navigate.push("/map-truck")}
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
        className="lg:min-w-[800px]"
      >
        <AssignDiver />
      </Modal>
    </div>
  );
};

export default AssignLoad;
