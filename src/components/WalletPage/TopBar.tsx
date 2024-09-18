'use client'

import Logo from '../icons/Logo'
import { useRouter } from 'next/navigation'
import { AlignLeft, LogOut, UserRound } from 'lucide-react'
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
import LeftSideBar from './LeftSideBar'
import { useState } from 'react'
import SearchForm from './SearchForm'
import ThemeToggle from '../ui/theme-toggle'

const dropDownData = [
  {
    name: 'Profile',
    icon: <UserRound size={15} />,
    href: '/profile',
  },
]

const TopBar = () => {
  const router = useRouter()

  const { data } = useSession()
  const [open, setOpen] = useState(false)

  return (
    <div className="flex justify-between px-4 py-3 pb-6 items-center w-full">
      <div className="flex items-center gap-5">
        {/* <Sidebar /> */}
        <AlignLeft onClick={() => setOpen(!open)} className="sm:hidden" />
        <div className="border dark:border-none h-10 w-10 rounded-lg inline-flex justify-center items-center flex-shrink-0">
          <Logo className="h-8 w-8" />
        </div>
      </div>
      <div className="block sm:hidden">
        {open ? (
          <div className="bg-[#1c1c1cd3] bg-blur-md transition-y mt-9 duration-300 z-10  w-[95%] h-[88%] fixed left-1/2  m-0 rounded-md overflow-hidden origin-top -translate-x-1/2">
            <LeftSideBar />
          </div>
        ) : (
          <></>
        )}
      </div>

      <SearchForm />

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {data && data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-[3rem] flex items-center p-[0.2rem]  justify-center h-[2rem] transition outline-none">
              {!data?.user.image ? (
                <div className="p-1 border-2 rounded-md">
                  <UserRound />
                </div>
              ) : (
                <UserImage image={data?.user.image} />
              )}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="translate-y-8 scale-110 -translate-x-10 shadow-lg dark:shadow-black bg-white dark:bg-black dark:text-slate-200">
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
                  <span className="text-[0.8rem] max-w-[200px] text-gray-400 dark:text-slate-200">
                    {data?.user?.email}
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />

              {dropDownData.map((item, index) => {
                return (
                  <DropdownMenuItem
                    className="flex items-center rounded gap-2 cursor-pointer text-black/70 dark:text-slate-200 hover:text-black dark:hover:bg-white/20 transition"
                    onClick={() => router.push('/wallet')}
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
                    await signOut()
                    router.push('/')
                  }}
                  className="flex items-center rounded gap-2 cursor-pointer text-black/70 dark:text-slate-200 hover:text-black dark:hover:bg-white/20 transition"
                >
                  <LogOut size={15} />
                  Logout
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="w-[3rem] flex items-center p-[0.2rem]  justify-center h-[2rem] transition outline-none">
            <div className="p-4 border-2 rounded-full bg-gray-300 animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TopBar
