import { useState, useEffect } from "react";
import { ArrowUpDown} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import Image from "next/image";
import { tokens, TokensType } from "./token";
import { ActionType } from "../actions";
import { ThreeDots } from 'react-loader-spinner'
import { Top } from "./Top";
import { Bottom } from "./Bottom";

interface TokenSwapProps {
  setCurrent: (action: ActionType | null) => void;
}

export default function TokenSwap({ setCurrent }: TokenSwapProps) {
  const [payToken, setPayToken] = useState(tokens[0]);
  const [receiveToken, setReceiveToken] = useState(tokens[1]);
  const [payAmount, setPayAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [fetchingQuote, setFetchingQuote] = useState(false);

  useEffect(() => {
    if (!payAmount || !/^\d*\.?\d*$/.test(payAmount)) {
      setReceiveAmount("");
      return;
    }
    setFetchingQuote(true);

    const fetchQuote = async () => {
      try {
        const res = await axios.get(`https://quote-api.jup.ag/v6/quote?inputMint=${payToken.mint}&outputMint=${receiveToken.mint}&amount=${Number(payAmount) * (10 ** payToken.decimals)}&slippageBps=50`)

        const outputAmount = Number(res.data.outAmount) / 10 ** receiveToken.decimals;
        setReceiveAmount(outputAmount.toString());
      } catch (error) {
        console.error("Error fetching swap price:", error);
        setReceiveAmount("");
      } finally {
        setFetchingQuote(false);
      }
    };

    const debounceFetch = setTimeout(fetchQuote, 500); // Debounce for 500ms
    return () => clearTimeout(debounceFetch); // Clean up previous timeout if the amount changes
  }, [payAmount, payToken, receiveToken]);

  const handleSwap = () => {
    setPayToken(receiveToken);
    setReceiveToken(payToken);
    setPayAmount(receiveAmount);
    setReceiveAmount(payAmount);
  };

  const selectTokenValue = (value: TokensType) => {
      const newToken = tokens.find((t) => t.symbol === value);
      if (newToken && newToken !== receiveToken) setPayToken(newToken);
    }
  
  return (
    <div className="w-full max-w-md mx-auto space-y-6 bg-white rounded-lg">
       <Top setCurrent={setCurrent}/>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">You Pay:</label>
          <div className="flex items-center space-x-2">
            <Select
              value={payToken.symbol}
              onValueChange={(value: TokensType) => {
                const newToken = tokens.find((t) => t.symbol === value);
                if (newToken && newToken !== receiveToken) setPayToken(newToken);
              }}
            >
              <SelectTrigger className="w-[250px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {tokens.map((token) => (
                  <SelectItem key={token.symbol} value={token.symbol} disabled={token === receiveToken}>
                    <div className="flex gap-3">
                      <Image height={20} width={20} alt={token.name} src={token.icon || "https://solana.com/_next/static/media/solanaLogoMark.17260911.svg"} />
                      <span>{token.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              min={0}
              type="text"
              placeholder="0.00"
              value={payAmount}
              onChange={(e) => {
                if (/^\d*\.?\d*$/.test(e.target.value)) {
                  setPayAmount(e.target.value);
                }
              }}
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
              onValueChange={selectTokenValue}
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
            <div className="border-2 w-full rounded-lg h-10 flex justify-center items-center">

              {
                !fetchingQuote && <Input
                  type="text"
                  placeholder="0.00"
                  value={receiveAmount}
                  className="flex-grow text-right"
                  readOnly
                />
              }

              <span className="">
                {fetchingQuote && (
                  <ThreeDots
                    visible={true}
                    height="30"
                    width="30"
                    color="#A9A9A9"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                )}
              </span>
            </div>

          </div>
          <p className="text-sm text-gray-500 mt-1">Current Balance: 0 {receiveToken.symbol}</p>
        </div>
      </div>
     <Bottom fetchingQuote={fetchingQuote} receiveAmount={receiveAmount}/>
    </div>
  );
}
