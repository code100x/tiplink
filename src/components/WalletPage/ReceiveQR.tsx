"use client"
import { useState } from "react"
import { WalletDetailProps } from "./WalletDetail"
import { QRCodeSVG } from 'qrcode.react'
import {
    Check,
    Copy,
    Info,
    X
} from 'lucide-react'

export const ReceiveQR = ({wallet,onClose}:WalletDetailProps & {onClose:()=>void}) => {
const [copied, setCopied] = useState(false)

const handleCopy = () => {
  navigator.clipboard.writeText(wallet ?? 'no wallet address')
  setCopied(true)
  setTimeout(() => setCopied(false), 2000)
}
  
  const formatWallet = () => {
    if (wallet) {
      return `${wallet?.slice(0, 4)}...${wallet?.slice(-4)}`
    }
    return 'no wallet address'
  }

return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
<div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
  <div className="flex justify-between items-center">
    <h3 className="text-lg font-bold">Your Wallet Address</h3>
    <button
      onClick={onClose}
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
    className="flex items-center justify-evenly bg-gray-100 shadow-md shadow-gray-200 p-2 cursor-pointer rounded-md w-full mt-4"
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
}