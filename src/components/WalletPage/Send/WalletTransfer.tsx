import React from 'react'

const WalletTransfer = ({setType}:{setType:()=>void}) => {
  return (
    <div className='w-full max-w-2xl mx-auto p-6 space-y-6 flex flex-col'>


    <span className='cursor-pointer' onClick={setType}>Back</span>
         

         <div>Wallet transfer</div>
    </div>
  )
}

export default WalletTransfer