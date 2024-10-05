'use client'
import React, { useState } from 'react'
import { actions, ActionType } from './actions'
import { ReceiveQR } from './ReceiveQR'
import TokenSwap from './Swap'


export interface WalletDetailProps {
  wallet?: string
  balance?: number
}

const WalletDetail = ({ wallet, balance }: WalletDetailProps) => {
  const [currentAction, setCurrentAction] = useState<null | ActionType>(null);

  const handleActionClick = (action: ActionType) => {
   setCurrentAction(action)
    
  };


  const handleClose = () => {
    setCurrentAction(null);
  }


  return (
    <div className="rounded-[22px] flex flex-col items-center gap-3  border-2 p-7 sm:p-10 shadow-md ">
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

     {
        currentAction !== 'swap'  && <div>  <div className="flex flex-col items-center w-full gap-3">
        <div className="flex space-x-6 w-full items-center justify-between">
          {actions.map((action, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <button
                className="flex justify-center items-center w-[66px] h-[67px] bg-black opacity-80 rounded-[30%] text-white"
                onClick={()=> handleActionClick(action.type)}
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
      </div>
     }  


  {
    currentAction === 'swap' &&  <TokenSwap setCurrent={setCurrentAction}/>
  }

     
      {/*Now depends on current action render the components */}
      {currentAction === 'receive' && <ReceiveQR wallet={wallet} onClose={handleClose}/>}
    </div>
  )
}
export default WalletDetail
