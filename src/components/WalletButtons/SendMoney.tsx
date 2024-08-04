const SendMoney = () => {
    return (
        <div>
            <div className = 'p-2'>
                <p className = 'flex justify-center text-slate-800 font-bold text-xl pt-4 pb-1'>You don't have any assets yet!</p>
                <p className = 'flex justify-center text-gray-300 text-sm'>Start by buying or depositing funds:</p>
            </div>
            <div className = 'flex justify-center pt-2'>
                <button className = 'bg-sky-700  hover:bg-sky-800 rounded-lg text-white font-bold p-3'>+ Add Funds</button>
            </div>
        </div>
    )
}
export default SendMoney;