"use client";

import { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import TopBar from "./TopBar";
import WalletDetail from "./WalletDetail";

const Wallet = () => {


  return (
    <div>
        <div><TopBar /></div>
        <div className="flex justify-between pt-10">
        <div className = 'hidden sm:block'>
          <LeftSideBar />
        </div>
        <div>
          <WalletDetail />
        </div>
        <div className = 'pr-15 hidden md:block'>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
