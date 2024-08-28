"use client"

import Logo from '../icons/Logo'
import Sidebar from './Sidebar'

import { useSession } from 'next-auth/react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { UserRound } from 'lucide-react'
import UserImage from '@/components/Appbar/UserImage'

const TopBar = () => {
  const { data } = useSession()
  return (
    <div className="flex sm:p-5 sm:pb-0">
      <div className="block sm:hidden">
        <Sidebar />
      </div>
      <div className="hidden sm:block border h-6 w-6 sm:h-10 sm:w-10 rounded-lg justify-center items-center">
        <Logo className="h-4 w-4 sm:h-8 sm:w-8" fill="#000000" />
      </div>
      <div className="pl-[5%] sm:pl-[30%] pt-3 sm:pt-0 ">
        <input
          className="bg-black rounded-full px-3 py-2 w-[70%] sm:w-[150%] lg text-white"
          placeholder="search"
        ></input>
      </div>
      <div className="sm:pl-[50%] pt-3 sm:pt-0">
        {data && data?.user && (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[3rem] flex items-center p-[0.2rem]  justify-center h-[2rem] transition">
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
