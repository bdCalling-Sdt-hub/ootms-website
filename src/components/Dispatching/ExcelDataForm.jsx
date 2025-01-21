"use client";
import { Button, Form, Upload } from "antd";
import * as XLSX from "xlsx";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCreateLoadMutation } from "@/redux/api/loadApi";

const ExcelDataForm = ({ handleOpenExcelFromModalCancle }) => {
  const [createLoad] = useCreateLoadMutation();
  const validateExcelData = (data) => {
    const requiredFields = [
      "receiverName",
      "receiverPhoneNumber",
      "receiverEmail",
      "receivingAddress",
      "receiverCity",
      "receiverState",
      "receiverZip",
      "shipperName",
      "shipperPhoneNumber",
      "shipperEmail",
      "shippingAddress",
      "shippingCity",
      "shippingState",
      "shippingZip",
      "palletSpace",
      "loadType",
      "weight",
      "loadDetails",
      "productType",
      "pickupDate",
      "deliveryDate",
      "trailerSize",
      "billOfLading",
      "Hazmat",
      "deliveryInstruction",
    ];

    const errors = data
      .map((row, index) => {
        const missingFields = requiredFields.filter(
          (field) => !row[field] || row[field].toString().trim() === ""
        );
        return {
          row: index + 1,
          missingFields,
        };
      })
      .filter((rowError) => rowError.missingFields.length > 0); // Only include rows with missing fields

    return errors;
  };

  const navigate = useRouter();
  const [form] = Form.useForm();
  const [excelData, setExcelData] = useState([]);
  console.log(excelData);

  const downloadExcel = () => {
    // Example static data representing form responses
    const data = [
      {
        receiverName: "John Doe",
        receiverPhoneNumber: "123-456-7890",
        receiverEmail: "johndoe@example.com",
        receivingAddress: "1234 Main St",
        receiverCity: "Anytown",
        receiverState: "Anystate",
        receiverZip: "12345",
        receiverpostalCode: "12345",
        shipperName: "Jane Smith",
        shipperPhoneNumber: "987-654-3210",
        shipperEmail: "janesmith@example.com",
        shippingAddress: "4321 Second St",
        shippingCity: "Othertown",
        shippingState: "Otherstate",
        shippingZip: "54321",
        palletSpace: "5",
        loadType: "Full",
        weight: "2000",
        loadDetails: "Fragile items, handle with care",
        productType: "Electronics",
        pickupDate: "01-15-2025",
        deliveryDate: "01-20-2025",
        billOfLading: "123456789",
        trailerSize: "15",
        "Hazmat (remove any item if you don't need to mention)":
          "Hazmat, Dangerous, Flammable Gas 2, Poson 6, Corrosive, Oxygen2, Flamable 3, Radioactive, Non-Flammable",
        deliveryInstruction: "Leave at dock 10",
        description: "Description of the load",
        latitude: "23.810331",
        longitude: "90.412521",
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Receiver Info");

    // Writing the file
    XLSX.writeFile(workbook, "ReceiverInformation.xlsx");
  };

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

          // Transform column names and convert "Hazmat" string to array
          const transformedData = jsonData.map((row) => {
            const updatedRow = {};
            Object.keys(row).forEach((key) => {
              if (
                key.includes(
                  "Hazmat (remove any item if you don't need to mention)"
                )
              ) {
                // Rename column to "Hazmat" and split the string into an array
                updatedRow["Hazmat"] = row[key]
                  ? row[key].split(",").map((item) => item.trim())
                  : [];
              } else if (key === "latitude" && row[key] && row["longitude"]) {
                // Add location field using Latitude and Longitude
                updatedRow["location"] = {
                  type: "Point",
                  coordinates: [
                    parseFloat(row["longitude"]), // Longitude first
                    parseFloat(row["latitude"]), // Latitude second
                  ],
                };
              } else {
                updatedRow[key] = row[key]; // Keep other columns as-is
              }
            });
            return updatedRow;
          });

          // Validate data
          const validationErrors = validateExcelData(transformedData);
          if (validationErrors.length > 0) {
            console.error("Validation Errors:", validationErrors);
            toast.error(
              `Missing fields in rows:\n${validationErrors
                .map(
                  (error) =>
                    `Row ${error.row}: ${error.missingFields.join(", ")}`
                )
                .join("\n")}`
            );
            return; // Stop further processing if validation fails
          }

          setExcelData(transformedData);
        } catch (error) {
          console.error("Error reading Excel file:", error);
        }
      }
    }
  };

  const onFinish = async (values) => {
    const toastId = toast.loading("Load Data Added...");
    try {
      const res = await createLoad(excelData).unwrap();
      console.log(res);
      if (res?.data?.attributes) {
        const myXlLoad = res?.data?.attributes;
        localStorage.removeItem("myXlLoad");
        localStorage.setItem("myXlLoad", JSON.stringify(myXlLoad));

        navigate.push("/assign-load");
      }

      handleOpenExcelFromModalCancle();

      toast.success("Load Added Successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      console.log("error", error);
      toast.error(
        error?.data?.message ||
          error.message ||
          "An error occurred during Add New Product",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
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

              <Button
                className="bg-next-text border-dashed border-next-btn py-6 text-next-btn rounded font-semibold text-xl !w-full"
                onClick={downloadExcel}
              >
                Download the Excel Sheet
              </Button>
            </div>
            <button
              type="submit"
              className="bg-next-btn w-full p-2 text-next-text font-bold text-xl rounded-xl sm:h-12"
            >
              Create Load
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ExcelDataForm;
