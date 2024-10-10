'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Wand2, Wallet } from "lucide-react"
import { useState } from "react"
import LinkTransfer from "./LinkTransfer"
import WalletTransfer from "./WalletTransfer"
import { ActionType } from "../actions";




interface SendTokenProps {
    setCurrent: (action: ActionType | null) => void;
  }
export default function SendToken({ setCurrent }: SendTokenProps) {

    const [typeOfSend, setTypeOfSend] = useState('');
    return (
        <>
        {
            !typeOfSend && <div className="w-full max-w-2xl mx-auto  space-y-6">
                <h1 className="text-3xl font-medium text-gray-700">Send</h1>
                <p className="text-lg  text-gray-600">
                    Send assets to a new TipLink or to a Solana wallet address:
                </p>
                <Card>
                    <CardContent className="p-0">
                        <Button variant="ghost" className="w-full justify-between py-8 text-left hover:bg-blue-400/10" onClick={() => {
                            setTypeOfSend('type1');
                        }}>
                            <div className="flex items-center space-x-4">
                                <Wand2 className="h-6 w-6 text-gray-500" />
                                <div>
                                    <CardTitle className="text-lg font-normal text-gray-900">Send via new TipLink</CardTitle>
                                    <CardDescription className="text-gray-500">
                                        Create a new TipLink using assets from this wallet.
                                    </CardDescription>
                                </div>
                            </div>
                            <ChevronRight className="h-6 w-6 text-gray-400" />
                        </Button>
                        <Button variant="ghost" className="w-full justify-between py-8 text-left border-t hover:bg-blue-400/10"
                            onClick={() => setTypeOfSend('type2')}
                        >
                            <div className="flex items-center space-x-4">
                                <Wallet className="h-6 w-6 text-gray-500" />
                                <div>
                                    <CardTitle className="text-lg font-normal  ">Send to Solana wallet address</CardTitle>
                                    <CardDescription className="text-gray-500">
                                        Send assets to a Solana wallet address you specify.
                                    </CardDescription>
                                </div>
                            </div>
                            <ChevronRight className="h-6 w-6 text-gray-400" />
                        </Button>
                    </CardContent>
                </Card>
                <Button variant="outline" className="w-full hover:bg-blue-400/10" onClick={() =>  setCurrent(null)}>Cancel</Button>
            </div>
        }


        {
            typeOfSend === 'type1' && <LinkTransfer setType = { () => setTypeOfSend('')}/>
        }

        {
            typeOfSend === 'type2' && <WalletTransfer setType = {() => setTypeOfSend('')}/>
        }
           
        </>
    )
}