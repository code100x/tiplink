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
import { useRouter } from 'next/navigation'
import { WalletButton } from '@/components/Wallet-content/wallet-button'
import { useTheme } from 'next-themes'
import { Icons } from '../Icons'
import { Button } from '../ui/button'
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
  const { theme, setTheme } = useTheme()

  return (
    <header className="py-4 border-b md:border-none fixed top-0 left-0 right-0 z-10 bg-white md:bg-white/0">
      <div className="container mx-auto px-4 ">
        <div className="bg-zinc-50 flex justify-between items-center md:border md:p-2.5 rounded-xl max-w-2xl lg:max-w-4xl mx-auto md:bg-white/90 md:backdrop:blur-sm">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center">
              <Logo className="h-8 w-8 " fill="#000000" />
            </div>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                className="text-black/70 hover:text-black transition"
                href="#"
              >
                Products
              </Link>
              <Link
                className="text-black/70 hover:text-black transition"
                href="#"
              >
                API & Docs
              </Link>
              <Link
                className="text-black/70 hover:text-black transition"
                href="#"
              >
                FAQ
              </Link>
              <Link
                className="text-black/70 hover:text-black transition"
                href="#"
              >
                Company
              </Link>
              <Link
                className="hidden lg:block text-black/70 hover:text-black transition"
                href="#"
              >
                Blogs
              </Link>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            {data && data?.user ? (
              <div className="flex items-center justify-between gap-x-4">
                <WalletButton />
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-[3rem] flex items-center p-[0.2rem]  justify-center h-[2rem] transition">
                    {!data?.user.image ? (
                      <div className="p-1 border-2 rounded-md ">
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
                        <span className="max-w-[200px]">
                          {data?.user?.name}
                        </span>
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
                          await signOut()
                          router.push('/')
                        }}
                        className="flex gap-2 cursor-pointer text-black/70 hover:text-black transition"
                      >
                        <LogOut size={15} />
                        Logout
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <LoginWithGoogleButton />
              </>
            )}
            <span className="md:hidden">
              <Menu />
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {theme === 'light' ? (
                  <Icons.sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                ) : (
                  <Icons.moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100 text-zinc-900" />
                )}

                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Appbar
