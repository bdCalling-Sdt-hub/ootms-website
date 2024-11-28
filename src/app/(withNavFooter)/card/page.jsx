/* eslint-disable @next/next/no-img-element */
"use client";

const truckData = [
  {
    name: "Sabbir Ahmed",
    trailer: "48-foot trailer—24 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Rupatoli, Barishal", "Banassree, Dhaka"],
  },
  {
    name: "John Doe",
    trailer: "53-foot trailer—30 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
    locations: ["Motijheel, Dhaka", "Mirpur, Dhaka"],
  },
  {
    name: "Jane Smith",
    trailer: "40-foot trailer—20 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
    locations: ["Chittagong", "Sylhet"],
  },
  {
    name: "Michael Johnson",
    trailer: "45-foot trailer—18 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Rajshahi", "Khulna"],
  },
  {
    name: "Emily Davis",
    trailer: "48-foot trailer—22 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Gazipur", "Narsingdi"],
  },
  {
    name: "Chris Lee",
    trailer: "50-foot trailer—25 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
    locations: ["Cox's Bazar", "Narayanganj"],
  },
  {
    name: "Katie Brown",
    trailer: "45-foot trailer—28 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Comilla", "Barisal"],
  },
  {
    name: "Daniel Harris",
    trailer: "60-foot trailer—40 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
    locations: ["Tangail", "Chandpur"],
  },
  {
    name: "Liam Williams",
    trailer: "48-foot trailer—26 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Jessore", "Mymensingh"],
  },
  {
    name: "Sophia Walker",
    trailer: "52-foot trailer—35 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
    locations: ["Bogra", "Feni"],
  },
  {
    name: "Jacob Martinez",
    trailer: "42-foot trailer—24 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Pabna", "Madaripur"],
  },
  {
    name: "Olivia Taylor",
    trailer: "46-foot trailer—30 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
    locations: ["Khulna", "Dhaka"],
  },
];

export default function Card() {
  return (
    <div className="p-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {truckData.map((truck, index) => (
        <div
          key={index}
          className="flex flex-col p-4 mb-5 border rounded-lg shadow-md bg-white"
        >
          <div className="flex  items-center mb-4 gap-4">
            <div className="w-24 h-24 mb-4">
              <img
                src="https://i.ibb.co/cQ96G0g/Rectangle-50.png"
                alt="Truck"
                width="100%"
                height="100%"
                className="rounded-full border-4 border-gray-700"
              />
            </div>

            <div className="">
              <h1 className="text-xl font-semibold">{truck.name}</h1>
              <p className="text-lg text-gray-500">{truck.trailer}</p>
              <div className="flex items-center justify-center gap-4">
                <p className="bg-[#90BA7A] h-8 w-8 rounded-full"></p>
                <p
                  className={`text-md ${
                    truck.status === "available"
                      ? "text-green-600"
                      : truck.status === "partially available"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {truck.truckAvailability}
                </p>
              </div>
              {truck.locations.map((location, idx) => (
                <p key={idx} className="text-md text-gray-600 flex">
                  {location}
                </p>
              ))}
            </div>
          </div>

          {/* <div className="flex flex-col gap-1 mb-4">
            <p className="text-sm font-semibold">Locations:</p>
            {truck.locations.map((location, idx) => (
              <p key={idx} className="text-md text-gray-600">
                {location}
              </p>
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
}
