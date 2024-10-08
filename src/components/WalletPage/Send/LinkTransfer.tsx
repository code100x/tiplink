"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import solIcon from "@/components/icons/solana.png"
import { IoMdArrowBack } from "react-icons/io"

export default function LinkTransfer({ setType }: { setType: () => void }) {
  const [amount, setAmount] = useState("0")
  const [asset, setAsset] = useState("SOL")
  const [isUSD, setIsUSD] = useState(true)
  const [solPrice, setSolPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
        if (!response.ok) {
          throw new Error('Failed to fetch SOL price')
        }
        const data = await response.json()
        setSolPrice(data.solana.usd)
        setIsLoading(false)
      } catch (err) {
        setError('Failed to fetch SOL price. Please try again later.')
        setIsLoading(false)
      }
    }

    fetchSolPrice()
  }, [])

  const handleCreateLink = () => {
    console.log(`Creating link for ${amount} ${isUSD ? 'USD' : asset}`)
  }

  const toggleCurrency = () => {

    if (!amount) {
      setAmount('0');
      return;
    }

    setIsUSD(!isUSD)
    if (isUSD) {
      setAmount((parseFloat(amount) / solPrice).toFixed(4))
    } else {
      setAmount((parseFloat(amount) * solPrice).toFixed(2))
    }
  }

  const getEquivalentAmount = () => {

    if (!amount) {
      return `~$0.00`
    }

    if (isUSD) {
      return `~${(parseFloat(amount) / solPrice).toFixed(4)} ${asset}`
    } else {
      return `~$${(parseFloat(amount) * solPrice).toFixed(2)} USD`
    }
  }

  const quickSelectAmounts = isUSD ? ["1", "2", "5"] : ["0.01", "0.02", "0.05"]

  if (isLoading) {
    return <div>Loading...</div>
  }

  // if (error) {
  //   return <div>{error}</div>
  // }

  return (
    <Card className="w-full mx-auto border-none shadow-none ">
      <CardHeader>
        <span
          className="cursor-pointer text-gray-600 flex gap-x-2 items-center"
          onClick={setType}
        >
          <IoMdArrowBack />
          Back
        </span>
        <CardTitle className="text-2xl font-bold mt-4">Create & Send</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            Specify asset and amount to send (taken from your wallet balance):
          </p>
          <Select onValueChange={setAsset} defaultValue={asset}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select asset" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="SOL" className="">
                <div className="flex items-center gap-x-2">
                  <Image src={solIcon} height={30} width={30} alt="sol" />
                  <span>SOL</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">
            Your available {asset}: 0.00 {asset}
          </p>
          <div className="relative">
            <Input
              type="text"
              value={amount}
              onChange={(e) => {
                if (/^\d*\.?\d*$/.test(e.target.value)) {
                  setAmount(e.target.value)
                }
              }}
              className="text-3xl font-semibold pl-8 pr-12 py-6"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl font-semibold text-muted-foreground">
              {isUSD ? "$" : ""}
            </span>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-muted-foreground">
              {isUSD ? "USD" : asset}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-12 top-1/2 -translate-y-1/2"
              onClick={toggleCurrency}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-right text-muted-foreground mt-1">{getEquivalentAmount()}</p>
        </div>
        <div className="flex justify-between gap-2">
          {quickSelectAmounts.map((quickAmount) => (
            <Button key={quickAmount} variant="outline" onClick={() => setAmount(quickAmount)} className="flex-1">
              {isUSD ? "$" : ""}{quickAmount}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" onClick={setType}>Cancel</Button>
        <Button onClick={handleCreateLink}>Create new TipLink</Button>
      </CardFooter>
    </Card>
  )
}