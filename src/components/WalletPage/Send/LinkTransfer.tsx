import React from 'react'

const LinkTransfer = ({setType} : {setType: () => void}) => {
  return (
    <div className='w-full max-w-2xl mx-auto p-6 space-y-6 flex flex-col'>

        <span className='cursor-pointer' onClick={setType}>Back</span>
         

         <div>New Tiplink Transfer</div>


        </div>
  )
}

export default LinkTransfer;