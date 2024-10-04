"use client";
import { useState } from "react";
import { WalletDetailProps } from "./WalletDetail";
import { ArrowUpDown, X } from 'lucide-react';

const Swap = ({ wallet, onClose }: WalletDetailProps & { onClose: () => void }) => {
  const [amount, setAmount] = useState<number | string>(0);
  const [payToken, setPayToken] = useState<string>("SOL");
  const [receiveToken, setReceiveToken] = useState<string>("USDC");

  const handleSwap = () => {
    // Swap the tokens
    const tempToken = payToken;
    setPayToken(receiveToken);
    setReceiveToken(tempToken);
    setAmount(0); // Reset amount when swapping
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Swap Tokens</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X size={25} />
          </button>
        </div>

        {/* Pay Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="block font-semibold">You Pay:</label>
            <select 
              className="border rounded-lg px-3 py-2 mt-1" 
              value={payToken}
              onChange={(e) => setPayToken(e.target.value)}
            >
              <option value="SOL" disabled={receiveToken === "SOL"}>SOL</option>
              <option value="USDC" disabled={receiveToken === "USDC"}>USDC</option>
              {/* Add more tokens if needed */}
            </select>
          </div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-lg px-3 py-2 w-24 text-right"
            placeholder="0"
            min={0}
          />
        </div>

        {/* Swap Icon */}
        <div className="text-center mb-4">
          <button onClick={handleSwap} className="p-2 border border-gray-300 rounded-full">
            <ArrowUpDown />
          </button>
        </div>

        {/* Receive Section */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="block font-semibold">You Receive:</label>
            <select 
              className="border rounded-lg px-3 py-2 mt-1" 
              value={receiveToken}
              onChange={(e) => setReceiveToken(e.target.value)}
            >
              <option value="SOL" disabled={payToken === "SOL"}>SOL</option>
              <option value="USDC" disabled={payToken === "USDC"}>USDC</option>
              {/* Add more tokens if needed */}
            </select>
          </div>
          <input
            type="number"
            value="0"
            readOnly
            className="border rounded-lg px-3 py-2 w-24 text-right"
            min={0}
          />
        </div>

        {/* Swap Button */}
        <button className="bg-blue-500 text-white font-semibold rounded-lg w-full py-3 mt-4">
          Confirm & Swap
        </button>
      </div>
    </div>
  );
};

export default Swap;
