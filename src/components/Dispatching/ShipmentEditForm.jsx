"use client";

import ReceiverFormGoogleMap from "@/helpers/GoogleMap/ReceiverFormGoogleMap";
import ShipperFormGoogleMap from "@/helpers/GoogleMap/ShipperFormGoogleMap";
import { useUpdateLoadMutation } from "@/redux/api/loadApi";
import { disabledDate } from "@/utils/TimeCondition";
import { Select, TimePicker } from "antd";

import { DatePicker, Form, Input, Typography } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ProductTypes = [
  "Pine Pulpwood",
  "Pine Mulch",
  "Pine Super Pulpwood",
  "Pine Chip-N-Saw",
  "Pine Sawtimber",
  "Pine Poles",
  "Hardwood Pulpwood",
  "Hardwood Mulch",
  "Hardwood Palletwood",
  "Hardwood Crossties",
  "Hardwood Sawtimber",
  "Hardwood Plylogs",
  "Hardwood Poles",
  "Cypress Mulch",
];
const trailerTypes = [
  "Dry Van",
  "Refrigerated (Reefer)",
  "Curtain-side",
  "Open Trailers",
  "Flatbed",
  "Step Deck",
  "Lowboy",
  "RGN (Removable Gooseneck)",
  "Specialized",
  "Tanker",
  "Hopper",
  "Livestock",
  "Roll-Off",
  "Logging - Tree Length",
  "Logging - Double-bunk",
];

const ShipmentEditForm = ({
  setCurrentData,
  currentData,
  handleOpenShipperEditFromCancel,
}) => {
  const [updateLoad] = useUpdateLoadMutation();
  const [form] = Form.useForm();

  const [pickupDateStr, pickupTimeStr] = currentData?.pickupDate.split(", ");
  const [deliveryDateStr, deliveryTimeStr] =
    currentData?.deliveryDate.split(", ");

  // Parse date and time separately using dayjs
  const pickupDateParsed = dayjs(pickupDateStr, "MM-DD-YYYY");
  const pickupTimeParsed = dayjs(pickupTimeStr, "hh:mm a");
  const deliveryDateParsed = dayjs(deliveryDateStr, "MM-DD-YYYY");
  const deliveryTimeParsed = dayjs(deliveryTimeStr, "hh:mm a");

  useEffect(() => {
    form.setFieldsValue({
      shipperName: currentData?.shipperName,
      shipperPhoneNumber: currentData?.shipperPhoneNumber,
      shipperEmail: currentData?.shipperEmail,
      receiverName: currentData?.receiverName,
      receiverEmail: currentData?.receiverEmail,
      receiverPhoneNumber: currentData?.receiverPhoneNumber,
      palletSpace: currentData?.palletSpace,
      productType: currentData?.productType,
      trailerSize: currentData?.trailerSize,
      loadType: currentData?.loadType,
      weight: currentData?.weight,
      pickupDate: pickupDateParsed,
      pickupTime: pickupTimeParsed,
      deliveryDate: deliveryDateParsed,
      deliveryTime: deliveryTimeParsed,
      billOfLading: currentData?.billOfLading,
      poNumber: currentData?.poNumber,
      deliveryInstruction: currentData?.deliveryInstruction,
      description: currentData?.description,
    });
  }, [currentData]);

  const [showOptions, setShowOptions] = useState(false);

  console.log("showOptions", showOptions);

  const [noOptions, setNoOptions] = useState(false);

  useEffect(() => {
    if (currentData?.Hazmat?.length >= 1) {
      setShowOptions(true);
      setNoOptions(false);
    } else {
      setShowOptions(false);
      setNoOptions(true);
    }
  }, [currentData?.Hazmat]);
  const [options, setOptions] = useState([
    { label: "Hazmat", value: "Hazmat", checked: false },
    { label: "Dangerous", value: "Dangerous", checked: false },
    { label: "Flammable Gas 2", value: "Flammable Gas 2", checked: false },
    { label: "Poison 6", value: "Poison 6", checked: false },
    { label: "Corrosive", value: "Corrosive", checked: false },
    { label: "Oxygen 2", value: "Oxygen 2", checked: false },
    { label: "Flammable 3", value: "Flammable 3", checked: false },
    { label: "Radioactive", value: "Radioactive", checked: false },
    { label: "Non-Flammable", value: "Non-Flammable", checked: false },
  ]);

  const [pickupDate, setPickupDate] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);

  const disabledTime = () => {
    if (pickupDate && dayjs(pickupDate).isSame(dayjs(), "day")) {
      const currentHour = dayjs().hour();
      const currentMinute = dayjs().minute();

      return {
        disabledHours: () => {
          const hours = [];
          for (let i = 0; i < currentHour; i++) {
            hours.push(i);
          }
          return hours;
        },
        disabledMinutes: (selectedHour) => {
          const minutes = [];
          if (selectedHour === currentHour) {
            for (let i = 0; i <= currentMinute; i++) {
              minutes.push(i);
            }
          }
          return minutes;
        },
        disabledSeconds: () => {
          // Typically seconds aren't needed for time pickers in scheduling, this can be omitted or implemented similarly.
          return [];
        },
      };
    } else {
      // No restrictions if it's not today
      return {};
    }
  };

  const disabledDeliveryDate = (current) => {
    // Disable all dates before the pickup date
    if (!pickupDate) {
      return false; // If no pickup date is selected, allow all future dates
    }
    return current && current < dayjs(pickupDate).startOf("day");
  };

  const disabledDeliveryTime = () => {
    if (
      pickupDate &&
      deliveryDate &&
      dayjs(pickupDate).isSame(dayjs(deliveryDate), "day")
    ) {
      const selectedHour = pickupTime
        ? dayjs(pickupTime, "HH:mm").hour()
        : null;
      const selectedMinute = pickupTime
        ? dayjs(pickupTime, "HH:mm").minute()
        : null;

      return {
        disabledHours: () =>
          Array.from({ length: 24 }, (_, i) => i).slice(0, selectedHour),
        disabledMinutes: (hour) => {
          if (hour === selectedHour) {
            return Array.from({ length: 60 }, (_, i) => i).slice(
              0,
              selectedMinute + 1
            );
          }
          return [];
        },
        disabledSeconds: () => [],
      };
    }
    return {};
  };

  const [location, setLocation] = useState({
    lat: currentData?.shipperLocation?.coordinates[1],
    lng: currentData?.shipperLocation?.coordinates[0],
  });
  const handleLocationSelect = (coordinates) => {
    setLocation(coordinates);
  };

  const [locationDetails, setLocationDetails] = useState({
    city: currentData?.shippingCity,
    state: currentData?.shippingState,
    zip: currentData?.shippingZip,
    fullAddress: currentData?.shippingAddress,
  });

  useEffect(() => {
    form.setFieldsValue({
      shippingAddress:
        locationDetails.fullAddress || currentData?.shippingAddress,
      shippingCity: locationDetails.city || currentData?.shippingCity,
      shippingState: locationDetails.state || currentData?.shippingState,
      shippingZip: locationDetails.zip || currentData?.shippingZip,
    });
  }, [locationDetails, form, currentData]);

  const [receiverLocation, setReceiverLocation] = useState({
    lat: currentData?.receiverLocation?.coordinates[1],
    lng: currentData?.receiverLocation?.coordinates[0],
  });
  const handleReceiverLocationSelect = (coordinates) => {
    setReceiverLocation(coordinates);
  };
  const [receiverlocationDetails, setReceiverLocationDetails] = useState({
    city: currentData?.receiverCity,
    state: currentData?.receiverState,
    zip: currentData?.receiverZip,
    fullAddress: currentData?.receivingAddress,
  });

  useEffect(() => {
    form.setFieldsValue({
      receivingAddress:
        receiverlocationDetails.fullAddress || currentData?.receivingAddress,
      receiverCity: receiverlocationDetails.city || currentData?.receiverCity,
      receiverState:
        receiverlocationDetails.state || currentData?.receiverState,
      receiverZip: receiverlocationDetails.zip || currentData?.receiverZip,
    });
  }, [receiverlocationDetails, form, currentData]);

  // Initialize options based on Hazmat values when currentData is available
  useEffect(() => {
    if (currentData?.Hazmat) {
      setOptions((prevOptions) =>
        prevOptions.map((option) => ({
          ...option,
          checked: currentData.Hazmat.includes(option.value),
        }))
      );
    }
  }, [currentData?.Hazmat]);

  const handleShowOptionsChange = () => {
    setShowOptions(true);
    setNoOptions(false);
  };

  const handleNoOptionsChange = () => {
    setNoOptions(true);
    setShowOptions(false);

    // Uncheck all options
    setOptions((prevOptions) =>
      prevOptions.map((option) => ({ ...option, checked: false }))
    );

    // Clear Hazmat field
    form.setFieldsValue({
      Hazmat: [],
    });
  };

  const handleCheckboxChange = (value) => {
    setOptions((prevOptions) => {
      const updatedOptions = prevOptions.map((option) =>
        option.value === value
          ? { ...option, checked: !option.checked }
          : option
      );

      const selectedValues = updatedOptions
        .filter((option) => option.checked)
        .map((option) => option.value);

      form.setFieldsValue({
        Hazmat: selectedValues.length > 0 ? selectedValues : [],
      });

      return updatedOptions;
    });
  };

  const onFinish = async (values) => {
    const toastId = toast.loading("Load Data Updated...");
    if (
      !Array.isArray(values.Hazmat) ||
      values.Hazmat.length <= 0 ||
      values.Hazmat === undefined ||
      values.Hazmat === null ||
      values.Hazmat === ""
    ) {
      // If Hazmat is not an array or has no selected values, reset it to an empty array
      values.Hazmat = [];
    } else {
      // Use the existing values
      values.Hazmat = values.Hazmat;
    }

    const formattedValues = {
      pickupDate: `${values.pickupDate.format(
        "MM-DD-YYYY"
      )}, ${values.pickupTime.format("hh:mm a")}`,
      deliveryDate: `${values.deliveryDate.format(
        "MM-DD-YYYY"
      )}, ${values.deliveryTime.format("hh:mm a")}`,
    };

    const data = {
      ...values,
      shipperLocation: {
        type: "Point",
        coordinates: [location.lng, location.lat],
      },
      receiverLocation: {
        type: "Point",
        coordinates: [receiverLocation?.lng, receiverLocation?.lat],
      },
      ...formattedValues,
    };

    try {
      const res = await updateLoad({
        id: currentData._id,
        loadData: data,
      }).unwrap();
      toast.success(res.message, { id: toastId, duration: 2000 });
      setCurrentData(null);
      form.resetFields();
      handleOpenShipperEditFromCancel();
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred during Login", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-gray-color text-center my-12">
          Shipment Information
        </h1>

        <Form
          form={form}
          className=""
          onFinish={onFinish}
          initialValues={{
            shippingAddress: locationDetails?.fullAddress || "",
          }}
        >
          {/* Shipper Name and Contact Number */}
          <div
            layout="vertical"
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-5 lg:gap-5"
          >
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper Name<span className="text-red-500 ">*</span>
              </Typography>
              <Form.Item
                name="shipperName"
                rules={[
                  { required: true, message: "shipper name is required" },
                ]}
              >
                <Input
                  placeholder="Enter shipper name"
                  className=" bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper Contact Number<span className="text-red-500 ">*</span>
              </Typography>
              <Form.Item
                name="shipperPhoneNumber"
                rules={[
                  { required: true, message: "Contact number is required" },
                ]}
              >
                <Input
                  placeholder="Enter contact number"
                  className=" bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* Email Address */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper Email Address
              </Typography>
              <Form.Item
                name="shipperEmail"
                rules={[
                  { required: true, message: "Email is required" },
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* Shipper Address */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper Address
              </Typography>
              <div style={{ margin: "20px 0" }}>
                <ShipperFormGoogleMap
                  currentLocation={location}
                  onLocationSelect={handleLocationSelect}
                  locationDetails={locationDetails}
                  setLocationDetails={setLocationDetails}
                />
              </div>
              <Form.Item
                name="shippingAddress"
                rules={[
                  { required: true, message: "Shipper address is required" },
                ]}
              >
                <Input
                  placeholder="Enter shipper address"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* City, State, Zip */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-2 lg:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper City
              </Typography>
              <Form.Item
                name="shippingCity"
                rules={[{ required: true, message: "City is required" }]}
              >
                <Input
                  placeholder="Enter city"
                  className="w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper State
              </Typography>
              <Form.Item
                name="shippingState"
                rules={[{ required: true, message: "State is required" }]}
              >
                <Input
                  placeholder="Enter state"
                  className="w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Shipper Zip
              </Typography>
              <Form.Item
                name="shippingZip"
                rules={[{ required: true, message: "Zip code is required" }]}
              >
                <Input
                  placeholder="Enter zip"
                  className="w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>

          {/* Receiver First Name and Contact Number */}
          <div
            layout="vertical"
            className="grid grid-cols-1 lg:grid-cols-2 md:gap-5"
          >
            <div>
              <p className="text-contact-input font-semibold text-start sm:mb-2">
                Receiver&apos;s Name
              </p>
              <Form.Item
                name="receiverName"
                rules={[
                  { required: true, message: "Receiver's name is required" },
                ]}
              >
                <Input
                  placeholder="Enter first name"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-contact-input font-semibold text-start sm:mb-2">
                Receiver Contact Number
              </p>
              <Form.Item
                name="receiverPhoneNumber"
                rules={[
                  { required: true, message: "Contact number is required" },
                ]}
              >
                <Input
                  placeholder="Enter contact number"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>
          {/* Receiver Email Address */}
          <div className="flex flex-col">
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Receiver Email Address
              </Typography>
              <Form.Item
                name="receiverEmail"
                rules={[
                  { required: true, message: "Email is required" },
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                ]}
              >
                <Input
                  type="email"
                  placeholder="Enter email address"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          <div style={{ margin: "20px 0" }}>
            <ReceiverFormGoogleMap
              currentLocation={receiverLocation}
              onLocationSelect={handleReceiverLocationSelect}
              locationDetails={locationDetails}
              setLocationDetails={setReceiverLocationDetails}
            />
          </div>

          {/* Receiver Address */}
          <div className="flex flex-col">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Receiver Address
              </Typography>
              <Form.Item
                name="receivingAddress"
                rules={[
                  { required: true, message: "Receiver address is required" },
                ]}
              >
                <Input
                  placeholder="Enter receiver address"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          {/* City, State, Zip, Postal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-5 lg:gap-x-5">
            <div className="lg:col-span-2">
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                City
              </Typography>
              <Form.Item
                name="receiverCity"
                rules={[{ required: true, message: "City is required" }]}
              >
                <Input
                  placeholder="Enter city"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                State
              </Typography>
              <Form.Item
                name="receiverState"
                rules={[{ required: true, message: "State is required" }]}
              >
                <Input
                  placeholder="Enter state"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Zip
              </Typography>
              <Form.Item
                name="receiverZip"
                rules={[{ required: true, message: "Zip code is required" }]}
              >
                <Input
                  placeholder="Enter zip"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          {/* Pallate Space */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Pallet Space
              </Typography>
              <Form.Item
                name="palletSpace"
                rules={[
                  { required: true, message: "Pallet space is required" },
                ]}
              >
                <Input
                  type="number"
                  placeholder="Enter pallet space"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>
          {/* load type */}

          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold mb-2">
                Trailer Types
              </Typography>
              <Form.Item
                name="loadType"
                rules={[
                  { required: true, message: "Trailer Types is required" },
                ]}
              >
                <Select
                  placeholder="Select load type"
                  className="w-full  py-2 h-14"
                  allowClear
                >
                  {trailerTypes.map((type) => (
                    <Select.Option key={type} value={type}>
                      {type}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>

          {/* Trailer Size */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold  mb-2">
                Trailer Size
              </Typography>
              <Form.Item
                name="trailerSize"
                rules={[
                  { required: true, message: "Trailer Size is required" },
                ]}
              >
                <Select
                  placeholder="Select Trailer Size"
                  className="w-full bg-shipper-input-bg placeholder-semibold h-10"
                >
                  <Select.Option value="48">48</Select.Option>
                  <Select.Option value="53">53</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>

          {/* weight */}
          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold  mb-2">
                Weight
              </Typography>
              <Form.Item
                name="weight"
                rules={[{ required: true, message: "Weight is required" }]}
              >
                <Input
                  type="number"
                  placeholder="Weight"
                  className=" w-full bg-shipper-input-bg placeholder-semibold py-2"
                />
              </Form.Item>
            </div>
          </div>

          {/* productType */}

          <div className="grid grid-cols-1 lg:grid-cols-1 md:gap-2">
            <div className="w-full">
              <Typography className="text-contact-input font-semibold mb-2">
                Product Type
              </Typography>
              <Form.Item
                name="productType"
                rules={[
                  { required: true, message: "Product Type is required" },
                ]}
              >
                <Select
                  placeholder="Select Product Type"
                  className="w-full  py-2 h-14"
                  allowClear
                >
                  {/* <Select.Option value="48-foot trailer (24 pallets)">
                    48-foot trailer (24 pallets)
                  </Select.Option>
                  <Select.Option value="53-foot trailer (26 pallets)">
                    53-foot trailer (26 pallets)
                  </Select.Option>
                  <Select.Option value="flatbed">Flatbed</Select.Option>
                  <Select.Option value="specialty">Specialty</Select.Option> */}
                  {ProductTypes.map((product) => (
                    <Select.Option key={product} value={product}>
                      {product}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>

          {/* PO# and Bill of Loading */}
          <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-2 lg:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                Bill of Loading
              </Typography>
              <Form.Item name="billOfLading">
                <Input
                  placeholder="Enter bill of lading"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold text-start sm:mb-2">
                PO# Number
              </Typography>
              <Form.Item name="poNumber">
                <Input
                  placeholder="Enter PO# number"
                  className="bg-shipper-input-bg placeholder-semibold sm:py-2 rounded-lg sm:h-10"
                />
              </Form.Item>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-2">
            <div>
              <Typography className="text-contact-input font-semibold mb-2">
                Pickup Date
              </Typography>
              <Form.Item
                name="pickupDate"
                rules={[{ required: true, message: "Pickup date is required" }]}
              >
                <DatePicker
                  format="MM-DD-YYYY"
                  className="bg-shipper-input-bg rounded-lg w-full"
                  placeholder="MM-DD-YYYY"
                  onChange={(value) => setPickupDate(value)}
                  disabledDate={disabledDate}
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold mb-2">
                Pickup Time
              </Typography>
              <Form.Item
                name="pickupTime"
                rules={[{ required: true, message: "Pickup time is required" }]}
              >
                <TimePicker
                  disabled={!pickupDate}
                  format="h:mm a" // Define the time format
                  className="bg-shipper-input-bg rounded-lg w-full"
                  use12Hours // Optional: for AM/PM format
                  placeholder="Select time"
                  onChange={(value) => setPickupTime(value)}
                  disabledTime={disabledTime}
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold mb-2">
                Delivery Date
              </Typography>
              <Form.Item
                name="deliveryDate"
                rules={[
                  { required: true, message: "Delivery date is required" },
                ]}
              >
                <DatePicker
                  disabled={!pickupDate || !pickupTime}
                  format="MM-DD-YYYY"
                  className="bg-shipper-input-bg rounded-lg w-full"
                  placeholder="MM-DD-YYYY"
                  onChange={(value) => setDeliveryDate(value)}
                  disabledDate={disabledDeliveryDate}
                />
              </Form.Item>
            </div>
            <div>
              <Typography className="text-contact-input font-semibold mb-2">
                Delivery Time
              </Typography>
              <Form.Item
                name="deliveryTime"
                rules={[
                  { required: true, message: "Delivery time is required" },
                ]}
              >
                <TimePicker
                  disabled={!pickupDate || !pickupTime || !deliveryDate}
                  format="h:mm a" // Define the time format
                  className="bg-shipper-input-bg rounded-lg w-full"
                  use12Hours // Optional: for AM/PM format
                  placeholder="Select time"
                  disabledTime={disabledDeliveryTime}
                />
              </Form.Item>
            </div>
          </div>

          {/* Hazmat select item */}
          <Form.Item name="Hazmat">
            <div>
              {/* Hazmat Options */}
              <div className="flex justify-between mb-4">
                <div>
                  <h1>Hazmat</h1>
                </div>
                <div className="flex gap-4">
                  <label className="flex items-center justify-center gap-1">
                    <input
                      className="mt-1"
                      type="checkbox"
                      checked={showOptions}
                      onChange={handleShowOptionsChange}
                    />
                    Yes
                  </label>
                  <label className="flex items-center justify-center gap-1">
                    <input
                      className="mt-1"
                      type="checkbox"
                      value={currentData?.Hazmat}
                      checked={noOptions}
                      onChange={handleNoOptionsChange}
                    />
                    No
                  </label>
                </div>
              </div>

              {/* Trailer Size Options */}
              {showOptions && (
                <div
                  style={{
                    marginTop: "20px",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="flex justify-between mb-2"
                    >
                      <label>{option.label}</label>
                      <input
                        type="checkbox"
                        value={option.value} // Explicitly set the value
                        checked={option.checked} // Controlled by state
                        onChange={() => handleCheckboxChange(option.value)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Form.Item>

          {/* delivey intructure */}
          <div>
            <Typography className="text-contact-input font-semibold  mb-2">
              Delivery Instructions
            </Typography>
            <Form.Item rules={[{ required: true }]} name="deliveryInstruction">
              <Input.TextArea
                placeholder="Enter description"
                className=" bg-shipper-input-bg placeholder-gray-400 border border-gray-300 rounded-lg py-3 px-4 h-36  w-full resize-none font-semibold"
              />
            </Form.Item>
          </div>

          {/* description */}
          <div>
            <Typography className="text-contact-input font-semibold text-start sm:mb-2">
              Description
            </Typography>
            <Form.Item name="description">
              <textarea
                placeholder="Enter description "
                className="h-40 w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none resize-none bg-shipper-input-bg placeholder-semibold py-2"
              />
            </Form.Item>
          </div>

          {/* Update Button */}
          <button
            type="submit"
            className="bg-next-btn w-full p-2 text-next-text font-bold text-xl mb-4 rounded-xl"
          >
            Update
          </button>
        </Form>
      </div>
    </>
  );
};
export default ShipmentEditForm;
