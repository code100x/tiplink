'use client'

import Link from 'next/link'
import Logo from '../icons/Logo'
import { LogOut, Menu, UserRound } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import LoginWithGoogleButton from '../ui/login-with-google'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import UserImage from '@/components/Appbar/UserImage'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaWallet } from 'react-icons/fa6'
import { useWallet } from '@solana/wallet-adapter-react'
import { ModeToggle } from '../ui/darkmode'
import { useTheme } from 'next-themes'

const dropDownData = [
  {
    name: 'Profile',
    icon: <UserRound size={15} />,
    href: '/profile',
  },
]

const Appbar = () => {
  const { data } = useSession()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const { connected } = useWallet()
  const { theme } = useTheme()

  useEffect(() => {
    if (connected) {
      router.push('/')
    }
    if (!connected) {
      router.push('/')
    }
    setIsMounted(true)
  }, [connected, router])

  if (!isMounted) return null

  return (
    <header className={`w-screen py-4 border-b md:border-none fixed top-0 left-0 right-0 ${theme === 'dark' ? '' : 'bg-white'}`}>
      <div className="container pl-32 px-4">
        <div className={`flex justify-between items-center md:border md:p-2.5 rounded-xl max-w-2xl lg:max-w-4xl mx-auto ${theme === 'dark' ? '' : 'bg-white'} md:backdrop:blur-sm`}>
          <div>
            <div className={`border h-10 w-10 rounded-lg inline-flex justify-center items-center ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
              <Logo className="h-8 w-8" fill={theme === 'dark' ? "#ffffff" : "#000000"} />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              {['Products', 'API & Docs', 'FAQ', 'Company', 'Blogs'].map((item) => (
                <Link key={item} className={`${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition`} href="#">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            {data && (
              <button
                onClick={() => {
                  router.push('/wallet')
                }}
              >
                <svg
                  className={`size-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4 3a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-1.77c.63-.57 1-1.38 1-2.23v-5c0-.85-.37-1.66-1-2.23V6a3 3 0 0 0-3-3zm0 1h13a2 2 0 0 1 2 2v1.17c-.32-.11-.66-.17-1-.17h-6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h6c.34 0 .68-.06 1-.17V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 4h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m2.5 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5m0 1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5"
                  />
                </svg>
              </button>
            )}
            {data && data?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="w-[3rem] flex items-center p-[0.2rem] justify-center h-[2rem] transition outline-none">
                  {!data?.user.image ? (
                    <div className={`p-1 border-2 rounded-md ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
                      <UserRound />
                    </div>
                  ) : (
                    <UserImage image={data?.user.image} />
                  )}
                </DropdownMenuTrigger>

                <DropdownMenuContent className={`translate-y-8 scale-110 -translate-x-10 shadow-lg ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                  <DropdownMenuLabel className="flex gap-4 items-center">
                    <div className="!w-[2rem] flex items-center p-[0.2rem] justify-center !h-[2rem]">
                      {!data?.user.image ? (
                        <div className={`p-1 border-2 rounded-full ${theme === 'dark' ? 'border-white' : 'border-black'}`}>
                          <UserRound />
                        </div>
                      ) : (
                        <UserImage image={data?.user.image} />
                      )}
                    </div>

                    <div className="flex flex-col">
                      <span className={`max-w-[200px] ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{data?.user?.name}</span>
                      <span className="text-[0.8rem] max-w-[200px] text-gray-400 break-all">
                        {data?.user?.email}
                      </span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  {dropDownData.map((item, index) => (
                    <DropdownMenuItem
                      className={`${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition cursor-pointer`}
                      onClick={() => router.push(item.href)}
                      key={index}
                    >
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  {data?.user && (
                    <DropdownMenuItem
                      onClick={async () => {
                        await signOut()
                        router.push('/')
                      }}
                      className={`${theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} transition cursor-pointer`}
                    >
                      <LogOut size={15} />
                      Logout
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <LoginWithGoogleButton />
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Appbar