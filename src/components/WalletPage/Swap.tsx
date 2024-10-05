"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, Space } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ActionType } from "./actions"
import {tokens,TokensType}from "./token"

import Image from "next/image"

interface TokenSwapProps {
    setCurrent: (action: ActionType | null) => void;
  }

export default function TokenSwap({setCurrent}:TokenSwapProps) {
  const [payToken, setPayToken] = useState(tokens[0])
  const [receiveToken, setReceiveToken] = useState(tokens[1])
  const [payAmount, setPayAmount] = useState("")
  const [receiveAmount, setReceiveAmount] = useState("")

  const handleSwap = () => {
    setPayToken(receiveToken)
    setReceiveToken(payToken)
    setPayAmount(receiveAmount)
    setReceiveAmount(payAmount)
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <button className="text-sm font-medium text-gray-500" onClick={() => setCurrent(null)}>← Back</button>
        <h2 className="text-2xl font-bold">Swap Tokens</h2>
        <div className="w-10" />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">You Pay:</label>
          <div className="flex items-center space-x-2">
            <Select
              value={payToken.symbol}
              onValueChange={(value:TokensType) => {
                const newToken = tokens.find((t) => t.symbol === value)
                if (newToken && newToken !== receiveToken) setPayToken(newToken)
              }}
            >
              <SelectTrigger className="w-[250px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol} disabled={token === receiveToken}>
                    <div className="flex gap-3">
                      <Image height={20} width={20} alt={token.name} src={token.icon || ""} />
                      <span>{token.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="0.00"
              value={payAmount}
              onChange={(e) => setPayAmount(e.target.value)}
              className="flex-grow text-right"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">Current Balance: 0 {payToken.symbol}</p>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="icon" onClick={handleSwap}>
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">You Receive:</label>
          <div className="flex items-center space-x-2">
            <Select
              value={receiveToken.symbol}
              onValueChange={(value:TokensType) => {
                const newToken = tokens.find((t) => t.symbol === value)
                if (newToken && newToken !== payToken) setReceiveToken(newToken)
              }}
            >
              <SelectTrigger className="w-[250px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol} disabled={token === payToken}>
                    <div className="flex gap-3">
                      <Image height={20} width={20} alt={token.name} src={token.icon || ""} />
                      <span>{token.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="number"
              placeholder="0.00"
              value={receiveAmount}
              onChange={(e) => setReceiveAmount(e.target.value)}
              className="flex-grow text-right"
              readOnly
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">Current Balance: 0 {receiveToken.symbol}</p>
        </div>
      </div>

      <div className="space-y-2">
        <span className="w-full text-xs cursor-pointer flex gap-x-1 items-center" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>



          <span>  View Swap Details</span>
        </span>
        <Button className="w-full">Confirm & Swap</Button>
      </div>
    </div>
  )
}