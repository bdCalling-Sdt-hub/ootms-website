import React from "react";

const page = ({ searchParams: { amount, subcriptionName } }) => {
  return (
    <div className="min-h-[60vh] flex justify-center items-center">
      <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-[#2B4258] to-[#2B4258]">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">
            You successfully Subscribed to {subcriptionName} Plan
          </h2>

          <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
            ${amount}
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
