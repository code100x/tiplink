"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '../icons/Logo'
import { LogOut, Menu, UserRound, X } from 'lucide-react'
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
import { FaWallet } from 'react-icons/fa6'
import { useWallet } from '@solana/wallet-adapter-react'

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { connected } = useWallet()

  useEffect(() => {
    if (connected) {
      router.push('/wallet-adapter')
    } else {
      router.push('/')
    }
    setIsMounted(true)
  }, [connected, router])

  // Prevent rendering until component is mounted
  if (!isMounted) return null

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <header className="flex justify-center w-full py-4 md:border-none fixed top-0 left-0 right-0 z-10">
        <div className="max-w-4xl w-full mx-4 md:mx-8 flex justify-between items-center h-[4rem] px-4 md:px-8 rounded-xl md:border-[.5px] border-black/20 backdrop-blur-lg shadow-2xl">
          {/* Center Section */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="bg-black border border-white/25 rounded-md shadow-inner shadow-white/55 h-10 w-10 flex items-center justify-center">
              <Logo className="h-8 w-8" fill="#ffffff" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex gap-8 text-sm text-nowrap">
            {['Products', 'API & Docs', 'FAQ', 'Company', 'Blogs'].map((item, index) => (
              <Link key={index} className="text-black/70 hover:text-black transition-colors" href="#">
                {item}
              </Link>
            ))}
          </nav>

          {/* Right Section - Actions */}
          <div className="flex gap-4 items-center text-nowrap">
            {data ? (
              <>
                <button
                  className="visible-button-class"
                  onClick={() => router.push('/wallet')}
                >
                  {/* SVG for Wallet */}
                  <svg
                    className="size-10 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="128"
                    height="128"
                    viewBox="0 0 24 24"
                  >
                    <path fill="currentColor" d="M4 3a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-1.77c.63-.57 1-1.38 1-2.23v-5c0-.85-.37-1.66-1-2.23V6a3 3 0 0 0-3-3zm0 1h13a2 2 0 0 1 2 2v1.17c-.32-.11-.66-.17-1-.17h-6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h6c.34 0 .68-.06 1-.17V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 4h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m2.5 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5m0 1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5" />
                  </svg>
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-[3rem] flex items-center p-[0.2rem] justify-center h-[2rem] transition">
                    <UserImage image={data?.user?.image} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="dark:shadow-[#030712] translate-y-8 scale-110 -translate-x-10 shadow-lg bg-white">
                    <DropdownMenuLabel className="flex gap-4 items-center">
                      <UserImage image={data?.user?.image} />
                      <div className="flex flex-col">
                        <span className="max-w-[200px]">{data?.user?.name}</span>
                        <span className="text-[0.8rem] max-w-[200px] text-gray-400">
                          {data?.user?.email}
                        </span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {dropDownData.map((item, index) => (
                      <DropdownMenuItem
                        className="flex gap-2 cursor-pointer text-black/70 hover:text-black transition"
                        onClick={() => router.push('/profile')}
                        key={index}
                      >
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
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
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <WalletMultiButton
                  style={{
                    backgroundColor: 'black',
                    height: '40px',
                    borderRadius: '8px',
                  }}
                  endIcon={<FaWallet />}
                />
                <LoginWithGoogleButton />
              </>
            )}

            {/* Mobile Menu Button */}
            <span className="lg:hidden" onClick={toggleSidebar}>
              <Menu />
            </span>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-20 h-full w-[250px] bg-white shadow-lg transform transition-transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-4">
          <button
            className="mb-4"
            onClick={closeSidebar}
          >
            <X />
          </button>
          <nav className="flex flex-col gap-4">
            {['Products', 'API & Docs', 'FAQ', 'Company', 'Blogs'].map((item, index) => (
              <Link
                key={index}
                className="text-black/70 hover:text-black transition-colors border-b pb-2"
                href="#"
                onClick={closeSidebar}
              >
                {item}
              </Link>

            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay (for closing sidebar when clicking outside) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/50"
          onClick={closeSidebar}
        />
      )}
    </>
  )
}

export default Appbar