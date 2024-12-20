"use client";
import { Button, Form, Upload } from "antd";
import * as XLSX from "xlsx";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ExcelDataForm = ({ handleOpenExcelFromModalCancle }) => {
  const navigate = useRouter();
  const [form] = Form.useForm();
  const [excelData, setExcelData] = useState([]);
  console.log(excelData);

  const handleExcleUpload = async (info) => {
    if (info.file.status === "removed") {
      setExcelData([]);
    } else {
      const file = info.file.originFileObj || info.file;
      if (file) {
        try {
          const data = await file.arrayBuffer();
          const workbook = XLSX.read(data, { type: "array" });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setExcelData(jsonData);
        } catch (error) {
          console.error("Error reading Excel file:", error);
        }
      }
    }
  };

  const onFinish = (values) => {
    console.log("data:", values);
    navigate.push("/assign-load");
    handleOpenExcelFromModalCancle();
  };

  return (
    <div className="mt-10">
      <div className="">
        <h1 className="sm:text-3xl font-bold text-gray-color text-center">
          Receiver Information
        </h1>

        <div className="relative h-full">
          <Form form={form} onFinish={onFinish} className="my-4 w-full">
            {/* First Name and Contact Number */}
            <div className="grid lg:grid-cols-2 gap-10 mb-10 w-full">
              <Form.Item
                name="excelData"
                className="w-full"
                rules={[
                  { required: true, message: "Please upload the Excel sheet" },
                ]}
              >
                <Upload
                  beforeUpload={() => false} // Prevent automatic upload to server
                  onChange={handleExcleUpload}
                  maxCount={1}
                  accept=".xlsx, .xls"
                >
                  <Button className="bg-next-text border-dashed border-next-btn py-6 text-next-btn rounded font-semibold text-xl !w-full lg:!w-[350px]">
                    Upload the Excel Sheet
                  </Button>
                </Upload>
              </Form.Item>

              <Button className="bg-next-text border-dashed border-next-btn py-6 text-next-btn rounded font-semibold text-xl !w-full">
                Download the Excel Sheet
              </Button>
            </div>
            <button
              type="submit"
              className="bg-next-btn w-full p-2 text-next-text font-bold  rounded-xl sm:h-12"
            >
              Next
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ExcelDataForm;
