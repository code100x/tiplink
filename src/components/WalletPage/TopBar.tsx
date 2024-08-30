"use client"

import Logo from '../icons/Logo'
import Sidebar from './Sidebar'
import { useRouter } from 'next/navigation'
import { LogOut,UserRound } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import UserImage from '@/components/Appbar/UserImage'
import { useState } from 'react'
import LeftSideBar from './LeftSideBar'

const TopBar = () => {
  const router = useRouter();

  const { data } = useSession()
  const [open,setOpen]=useState(false);
  return (
    <div className="flex justify-between p-2 items-center border-b-[1px] h-[4rem]">
      <div className="block sm:hidden">
        {/* <Sidebar /> */}
        <button
            className="
                       text-black font-bold py-2 px-4 rounded"
            onClick={() => setOpen(!open)}>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            
          </button>
        {}
      </div>
      <div className="block sm:hidden">
       {open?<div className="bg-[#1c1c1cd3] bg-blur-md transition-y mt-9 duration-300 z-10  w-[95%] h-[88%] fixed left-1/2  m-0 rounded-md overflow-hidden origin-top -translate-x-1/2"><LeftSideBar/></div>:<>
       </>}
      </div>
      <div className="hidden sm:block border h-6 w-6 sm:h-10 sm:w-10 rounded-lg justify-center items-center">
        <Logo className="h-4 w-4 sm:h-8 sm:w-8" fill="#000000" />
      </div>
      <div className="hidden sm:block sm:w-1/2 md:w-[50%] ">
        <input
          className="rounded-full p-2 border-[1px] w-full  text-center "
          placeholder="search"
        />
      </div>
      <div className="">
        {data && data?.user && (
          <DropdownMenu>
            <DropdownMenuTrigger className=" flex items-center   justify-center  transition">
              {!data?.user.image ? (
                <div className="p-1 border-2 rounded-md">
                  <UserRound />
                </div>
              ) : (
                <UserImage image={data?.user.image} />
              )}
            </DropdownMenuTrigger>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}

export default TopBar
