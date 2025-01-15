"use client"
import { useCreateLoadRequestMutation } from "@/redux/api/loadRequestApi";
import { Button, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "sonner";

const ReAssign = (props) => {
  const router = useRouter();
  const { setIsOpen } = props;

  const [createLoadRequest, { isLoading }] = useCreateLoadRequestMutation();
  const navigate = useRouter();
  const onFinish = async (values) => {
    const toastId = toast.loading("Re-Assigning Diver...");

    const data ={}


    console.log("data", data);

    try {
      // const res = await createLoadRequest(data).unwrap();
      console.log(res);

      localStorage.removeItem("myXlLoad");

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      // navigate.push("/load-request?req=myRequest");
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
    <div className=" fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-1/2">
        <div className="px-10 pt-10 relative">

          <p className="text-2xl text-center font-semibold">
            Give your preferred Driver Id
          </p>
          <p onClick={()=>setIsOpen()} className="font-bold text-xl cursor-pointer absolute top-0 right-0">
            X
          </p>
          <Form
            layout="vertical"
            className="bg-transparent w-full mt-10"
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
    </div>
  );
};

export default ReAssign;
