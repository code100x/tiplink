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

const dropDownData = [
  {
    name: 'Profile',
    icon: <UserRound size={15} />,
    href: '/profile',
  },
]

const TopBar = () => {
  const router = useRouter();

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
          className="bg-black rounded-full p-2 w-[70%] sm:w-[150%] lg text-white"
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

                <DropdownMenuContent className=" dark:shadow-[#030712] translate-y-8 scale-110 -translate-x-10 shadow-lg bg-white">
                  <DropdownMenuLabel className="flex gap-4 items-center">
                    <div className="!w-[2rem] flex items-center p-[0.2rem]  justify-center !h-[2rem]">
                      {!data?.user.image ? (
                        <div className="p-1 border-2 rounded-full border-[#1a1a1a]">
                          <UserRound />
                        </div>
                      ) : (
                        <UserImage image={data?.user.image} />
                      )}
                    </div>

                    <div className="flex flex-col">
                      <span className="max-w-[200px]">{data?.user?.name}</span>
                      <span className="text-[0.8rem] max-w-[200px] text-gray-400">
                        {data?.user?.email}
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {dropDownData.map((item, index) => {
                    return (
                      <DropdownMenuItem
                        className="flex gap-2 cursor-pointer text-black/70 hover:text-black transition"
                        onClick={() => router.push('/profile')}
                        key={index}
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </DropdownMenuItem>
                    )
                  })}
                  <DropdownMenuSeparator />
                  {data?.user && (
                    <DropdownMenuItem
                      onClick={async () => {
                        await signOut({callbackUrl:"/"})
                      }}
                      className="flex gap-2 cursor-pointer text-black/70 hover:text-black transition"
                    >
                      <LogOut size={15} />
                      Logout
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}

export default TopBar
