"use client"
import { useState } from "react";
import { GoogleIcon } from "@/components/ui/googleicon";
import WalletButtons from "@/components/WalletButtons/WalletButtons";
import Footer from "./Footer";
import AddFunds from "@/components/WalletButtons/AddFunds";
import Withdraw from "@/components/WalletButtons/Withdraw";
import Appbar from "@/components/Appbar/Appbar";

const Wallet = () => {
    const [ userName, setUserName ] = useState("google");
    const [ money, setMoney ] = useState(0.00);
    const [ showUserName, setShowUserName ] = useState(true);
    const [ShowFunds, setShowFunds ] = useState(false);
    const [ showWithdraw, setWithdraw ] = useState(false);
    const handlerFunds = () => {
        setShowUserName(false);
        setShowFunds(true);
        setWithdraw(false);
    }
    const sendMoneyHandler = () => {
        setShowUserName(true);
        setShowFunds(false);
        setWithdraw(false);
    }
    const withdrawHandler = () => {
        setWithdraw(true);
        setShowFunds(false);
        setShowUserName(false);
    }
    return (
        <div>
            <div className = 'bg-slate-100 min-h-screen pt-0'>
                <Appbar />
                <div>
                    <div className = 'flex justify-center pt-5'>
                        <div className = 'w-1/2  bg-white rounded-lg p-6'>
                            {showUserName && <div className = 'flex space-x-2 pb-2 font-extrabold text-2xl text-gray-600'>
                                <div className = 'pt-1'>
                                    <GoogleIcon />
                                </div>
                                <div>Welcome back, { userName }!</div>
                            </div> }
                            <div className = 'flex text-gray-300 text-xs pt-4 space-x-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                                </svg>
                                <div className = 'pt-1 w-full items-start'>Tiplink Account Assets</div>
                            </div>
                            <div className = 'flex justify-between pt-5'>
                                <span className = 'font-bold text-5xl'>$ { money } USD</span>
                                <button className = 'p-3'>
                                    <span className = 'bg-gray-200 hover:bg-gray-300 rounded-lg text-xs text-gray-500 hover:text-gray-600 font-semibold p-2'>Your Wallet Address</span>
                                </button>
                            </div>
                            <div className = 'grid grid-cols-4 pt-7 space-x-1'>
                                <button className = 'bg-sky-700  hover:bg-sky-800 rounded-lg text-white font-bold p-3' onClick = { sendMoneyHandler }>Send</button>
                                <button className = 'bg-blue-200 hover:bg-blue-300 rounded-lg text-white font-bold p-3' onClick = { handlerFunds }>Add Funds</button>
                                <button className = 'bg-blue-200 hover:bg-blue-300 rounded-lg text-white font-bold p-3' onClick = { withdrawHandler }>Withdraw</button>
                                <button className = 'bg-blue-200 hover:bg-blue-300 rounded-lg text-white font-bold p-3'>Swap</button>
                            </div>
                        </div>
                    </div>
                    {showUserName && <WalletButtons /> }
                    {ShowFunds && <AddFunds />}
                    {showWithdraw && <Withdraw /> }
                </div>
                <div className = ''>
                    <Footer /> 
                </div>
            </div>
        </div>
    )
}

export default Wallet;