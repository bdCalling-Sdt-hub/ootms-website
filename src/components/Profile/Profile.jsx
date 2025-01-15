"use client";
import React, { useState } from "react";
import MyProfile from "./MyProfile";
import MyWallet from "./MyWallet";

const Profile = () => {
  const [tab, setTab] = useState("myProfile");
  return (
    <div className="realtive">
 
      <MyProfile />
    </div>
  );
};

export default Profile;
