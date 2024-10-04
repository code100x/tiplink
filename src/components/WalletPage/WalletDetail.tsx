'use client'
import {
  ArrowDownUp,
  Check,
  Copy,
  CreditCard,
  Download,
  Info,
  Send,
  X,
} from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import React, { useState } from 'react'
import { actions } from './actions'


interface WalletDetailProps {
  wallet?: string
  balance?: number
}

const WalletDetail = ({ wallet, balance }: WalletDetailProps) => {
  const [showQR, setShowQR] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(wallet ?? 'no wallet address')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  const handleReceive = () => {
    setShowQR(true)
  }

  const handleClose = () => {
    setShowQR(false)
  }

  const formatWallet = () => {
    if (wallet) {
      return `${wallet?.slice(0, 4)}...${wallet?.slice(-4)}`
    }
    return 'no wallet address'
  }

  return (
    <div className="rounded-[22px] flex flex-col items-center gap-3 sm:w-[450px] border-2 p-7 sm:p-10 shadow-md">
      <div className="flex flex-col items-start gap-2 w-full">
        <div className="text-gray-200">
          <p className="text-gray-400 text-xs sm:text-sm font-semibold">
            Total Balance
          </p>
        </div>
        <div className="font-bold text-black opacity-80 text-xl sm:text-4xl mb-6">
          {balance === null ? (
            <div className=" bg-gray-200  rounded-lg animate-pulse w-[46px] h-[34px] mb-6">
              {''}
            </div>
          ) : (
            `$ ${balance}`
          )}
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-3">
        <div className="flex space-x-6 w-full items-center justify-between">
          {actions.map((action, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <button
                className="flex justify-center items-center w-[66px] h-[67px] bg-black opacity-80 rounded-[30%] text-white"
                onClick={action.label === 'Receive' ? handleReceive : undefined}
              >
                {<action.icon/>}
              </button>
              <p>{action.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between bg-gray-200 w-full rounded-[16px] p-[2px]">
          <button className="flex justify-center items-center py-3 bg-black opacity-80 rounded-[14px] w-[49%] text-white p-2 text-xl">
            Token
          </button>

          <button className="flex justify-center items-center py-3 opacity-80 rounded-[14px] w-[49%] text-black p-2 text-xl">
            NFTs
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="p-2">
          <p className="flex justify-center text-slate-800 font-bold text-xl pt-4 pb-1">
            You don&apos;t have any assets yet!
          </p>
          <p className="flex justify-center text-gray-300 text-sm pt-2">
            Start by buying or depositing funds:
          </p>
        </div>
        <div className="flex justify-center pt-2">
          <button className="bg-black opacity-80 rounded-lg text-white font-bold p-3">
            + Add Funds
          </button>
        </div>
      </div>
      {showQR && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">Your Wallet Address</h3>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-800"
              >
                <X size={25} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
              <QRCodeSVG
                value={wallet ?? 'no wallet address found'}
                size={180}
              />
            </div>
            <div
              className="flex items-center justify-evenly bg-gray-100 shadow-md shadow-gray-200 p-2 rounded-md w-full mt-4"
              onClick={handleCopy}
            >
              <p className="font-mono text-gray-700 break-words">
                {formatWallet()}
              </p>
              <div className="relative">
                <button
                  className={`bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 cursor-pointer transition duration-300`}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
                {copied && (
                  <div className="absolute top-full left-0 mt-1 bg-gray-800 text-white text-xs py-1 px-2 rounded-md">
                    Copied!
                  </div>
                )}
              </div>
            </div>

            <p className="text-gray-500 text-xs mt-2 flex gap-1 justify-center w-full whitespace-nowrap">
              <Info/>
              <i className='mt-1'>Only send crypto to this address via the Solana network.</i>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
export default WalletDetail
