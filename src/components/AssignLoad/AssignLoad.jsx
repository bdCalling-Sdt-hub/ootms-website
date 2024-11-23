"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Checkbox, Form, Space } from "antd";
import { PiArrowSquareDownLight, PiArrowSquareUpLight } from "react-icons/pi";
import Container from "../ui/Container";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FiPlusCircle } from "react-icons/fi";

const AssignLoad = () => {
  const navigate = useRouter();
  const onFinish = (values) => {
    console.log("Selected loads:", values);
    navigate.push("/load-request?req=myRequest");
  };
  return (
    <div className=" py-20">
      <Container>
        <div className="w-full sm:w-[90%] lg:w-[70%] mx-auto">
          <div className="flex justify-between items-center ">
            <IoChevronBackOutline
              className="text-3xl cursor-pointer text-[#2B4257] font-semibold"
              onClick={() => window.history.back()}
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

          {/* Additional options for assigning another driver */}
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={() => navigate.push("/map-truck")}
              className="w-full py-3 flex items-center justify-center gap-x-2 border border-[#2B4257] hover:border-[#2B4257] text-xl text-[#2B4257] bg-primary-color font-semibold rounded-2xl mt-2"
            >
              <FiPlusCircle className="text-[#2B4257] text-2xl" /> Assign
              Another Driver
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AssignLoad;
