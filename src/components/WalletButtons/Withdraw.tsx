const AddFunds = () => {
    return (
        <div>
            <div className = 'flex justify-center p-3 font-bold text-gray-500'>
                <div className = 'w-1/2 bg-slate-50 rounded-lg p-10'>
                    <p className = 'pb-2'>Withdraw</p>
                    <p className = 'pb-2'>Select destination for withdrawal:</p>
                    <button className = 'flex border-2 rounded-lg p-4 w-full space-x-2'>
                        <p>
                            <svg className = 'size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>
                        </p>
                        <p className = 'flex text-sm pb-0'>To Bank Account.</p>
                    </button>
                    <button className = 'flex space-x-2 p-4 border-gray-200  w-full border-2 rounded-lg text-sm'>
                        <p>
                            <svg className = 'size-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3.75v16.5M2.25 12h19.5M6.375 17.25a4.875 4.875 0 0 0 4.875-4.875V12m6.375 5.25a4.875 4.875 0 0 1-4.875-4.875V12m-9 8.25h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5Zm12.621-9.44c-1.409 1.41-4.242 1.061-4.242 1.061s-.349-2.833 1.06-4.242a2.25 2.25 0 0 1 3.182 3.182ZM10.773 7.63c1.409 1.409 1.06 4.242 1.06 4.242S9 12.22 7.592 10.811a2.25 2.25 0 1 1 3.182-3.182Z" />
                            </svg>
                        </p>
                        <p>Gift Card</p>
                    </button>
                    <p className = 'pb-2 text-xs'>For any Bidali questions and support, click here.</p>
                    <button className = 'flex space-x-2 border-gray-200 w-full p-4 border-2 rounded-lg text-sm'>
                        <p>
                            <svg className = 'size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><g><g><circle cx="12" cy="11" r="1"></circle><circle cx="16" cy="11" r="1"></circle><circle cx="8" cy="11" r="1"></circle><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"></path></g></g></svg>
                        </p>
                        <p>Extra Wallet</p>
                    </button>
                    <button className = 'flex space-x-2 border-gray-200 w-full p-4 border-2 rounded-lg text-sm'>
                        <p>
                            <svg className = 'size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><g><g><circle cx="12" cy="11" r="1"></circle><circle cx="16" cy="11" r="1"></circle><circle cx="8" cy="11" r="1"></circle><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"></path></g></g></svg>
                        </p>
                        <p>To Solana Wallet Address</p>
                    </button>
                    <div className = 'pt-2'>
                        <button className = 'border-2 hover:bg-gray-300 rounded-lg font-bold p-3 text-black pt-2'>Cancel</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AddFunds;