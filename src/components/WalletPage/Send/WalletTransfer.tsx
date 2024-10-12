import React, { useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'

const WalletTransfer = ({ setType }: { setType: () => void }) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 flex flex-col">
      <span
        className="cursor-pointer text-gray-600 dark:text-gray-200 flex gap-2"
        onClick={setType}
      >
        <IoMdArrowBack className="mt-1" />
        Back
      </span>
      <div>
        <div className="flex flex-col">
          <span className="text-3xl font-semibold text-gray-900 dark:text-gray-200">
            Send to solana wallet address
          </span>
          <span className="text-gray-500">
            Specify amount and the designated wallet address:
          </span>
          <div className="space-y-4 my-6">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="$ 0 USD"
                className="w-full px-4 py-3 border border-gray-300 rounded-md text-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute right-4 flex space-x-2">
                <button className="bg-gray-100 text-gray-600 px-2 rounded-full">
                  Max
                </button>
                <button className="bg-gray-100 text-gray-600 p-2 rounded-full">
                  ↕
                </button>
              </div>
            </div>

            <input
              type="text"
              placeholder="Enter Solana wallet address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-gray-400 text-sm text-center">
              .sol and AllDomains addresses supported
            </p>
          </div>
          <div className="flex justify-between items-center w-full my-4">
            <button
              className="bg-gray-200 text-black px-4 py-2 rounded-lg"
              onClick={setType}
            >
              Cancel
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletTransfer
