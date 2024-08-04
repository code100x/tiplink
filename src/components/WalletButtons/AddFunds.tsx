const AddFunds = () => {
    return (
        <div>
            <div className = 'flex justify-center p-3 font-bold text-gray-500'>
                <div className = 'w-1/2 bg-slate-50 rounded-lg p-10 space-y-2'>
                    <p className = 'pb-2'>Add the funds.</p>
                    <button className = 'flex bg-slate-200 rounded-lg  p-4 w-full space-x-2'>
                        <button>
                            <svg className = 'size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus"><g><g><rect width="24" height="24" opacity="0"></rect><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z"></path></g></g></svg>
                        </button>
                        <button className = 'flex text-sm'>With Bank/Card</button>
                    </button>
                    <button className = 'flex space-x-2 p-4 bg-slate-200 w-full border-b-2 rounded-lg text-sm'>
                        <button>
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                            </svg>
                        </button>
                        <button >Add The External Account/Wallet To This Solana Wallet.</button>
                        <button>To This Solana Wallet</button>
                    </button>
                    <button className = 'flex space-x-2 bg-slate-200 w-full p-4 border-b-2 rounded-lg text-sm'>
                        <button >
                            <svg className = 'size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="message"><g><g><circle cx="12" cy="11" r="1"></circle><circle cx="16" cy="11" r="1"></circle><circle cx="8" cy="11" r="1"></circle><path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"></path></g></g></svg>
                        </button>
                        <button >Add The External Account/Wallet To This Solana Wallet.</button>
                        <button>To This Solana Wallet</button>
                    </button>
                    <div className = 'pt-2'>
                        <button className = 'border-2 hover:bg-gray-300 rounded-lg text-white font-bold p-3 text-black pt-2'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFunds;