'use client'

interface WalletDetailProps {
  wallet?: string
  balance?: number
}

const WalletDetail = ({ wallet, balance }: WalletDetailProps) => {
  return (
    <div>
      <div className="pl-5">
        <div className="flex-2 rounded-lg sm:w-[450px] sm:h-[460px] border-2 p-5 sm:p-10">
          <div className="text-gray-200 mb-4">
            <p className="text-gray-400 text-xs sm:text-sm semi-bold">
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
          <div className="flex space-x-6">
            <button className="flex justify-center items-center w-[66px] h-[63px] bg-black opacity-80 rounded-[40%] text-white">
              <svg
                className="h-8 w-8 text-white-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="10" y1="14" x2="21" y2="3" />
                <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
              </svg>
            </button>
            <button className="flex justify-center items-center w-[66px] h-[63px] bg-black opacity-80 rounded-[40%] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8 text-white-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center w-[66px] h-[63px] bg-black opacity-80 rounded-[40%] text-white">
              <svg
                className="h-8 w-8 text-white-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <button className="flex justify-center items-center w-[66px] h-[63px] sm:w-[77px] sm:h-[73px] bg-black opacity-80 rounded-[40%] text-white">
              <svg
                className="h-8 w-8 text-white-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center pt-4">
            <div className="flex bg-gray-200 w-[100%] h-[12%] pt-2 rounded-lg space-x-16 p-2">
              <button className="flex justify-center items-center bg-black opacity-80 rounded-lg w-[50%] text-white p-2  text-xl">
                Token
              </button>
              <button className="flex justify-center items-center">NFTs</button>
            </div>
          </div>
          <div>
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
      </div>
    </div>
  )
}

export default WalletDetail
