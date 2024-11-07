"use client";
import React, { useState } from "react";
import MyProfile from "./MyProfile";
import MyWallet from "./MyWallet";

const Profile = () => {
  const [tab, setTab] = useState("myProfile");
  return (
    <div className="realtive">
      {/* <div className="sticky top-20 flex justify-center items-center gap-x-10 bg-secondary-color z-10">
        <div
          className="h-16 w-fit cursor-pointer flex flex-col justify-between items-center"
          onClick={() => setTab("myProfile")}
        >
          <div></div>
          <h3 className="text-lg sm:text-xl font-semibold text-primary-color ">
            My Profile
          </h3>
          {tab === "myProfile" ? (
            <div className="w-full bg-primary-color h-[4px] rounded-full"></div>
          ) : (
            <div className="w-full bg-transparent h-[4px] rounded-full"></div>
          )}
        </div>
        <div
          className="h-16 w-fit cursor-pointer flex flex-col justify-between items-center"
          onClick={() => setTab("myWallet")}
        >
          <div></div>
          <h3 className="text-lg sm:text-xl font-semibold text-primary-color ">
            Wallet
          </h3>
          {tab === "myWallet" ? (
            <div className="w-full bg-primary-color h-[4px] rounded-full"></div>
          ) : (
            <div className="w-full bg-transparent h-[4px] rounded-full"></div>
          )}
        </div>
      </div>
      {tab === "myProfile" ? <MyProfile /> : <MyWallet />} */}
      <MyProfile />
    </div>
  );
};

export default Profile;
