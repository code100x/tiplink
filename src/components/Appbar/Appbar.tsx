'use client'

import Link from 'next/link'
import Logo from '../icons/Logo'
import { LogOut, UserRound } from 'lucide-react'
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
import { useEffect, useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { ModeToggle } from '../ui/darkmode'
import { useTheme } from 'next-themes'
import NavbarMobile from './AppbarMobile'

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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight // Assuming hero is 100vh
      const currentScrollY = window.scrollY

      // Show navbar at top
      if (currentScrollY < 100) {
        setIsVisible(true)
        return
      }

      // After hero section, handle show/hide based on scroll direction
      if (currentScrollY > heroHeight) {
        // Hide when scrolling down, show when scrolling up
        setIsVisible(currentScrollY < lastScrollY)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

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
    <header 
      className={`z-50 w-full py-4 fixed top-0 left-0 right-0 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container px-2 mx-auto">
        <div className="border flex justify-between items-center p-2.5 rounded-xl max-w-2xl lg:max-w-4xl mx-auto bg-white dark:bg-black backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-black dark:border-white">
              <Logo className="h-8 w-8" fill={theme === 'dark' ? "#ffffff" : "#000000"} />
            </div>
            <div className="hidden md:block">
              <nav className="flex gap-6 text-sm">
                {['Products', 'API & Docs', 'FAQ', 'Company', 'Blogs'].map((item) => (
                  <Link key={item} className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" href="#">
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="md:hidden">
            <NavbarMobile />
          </div>
          <div className="flex items-center space-x-4">
            {data && (
              <button
                onClick={() => router.push('/wallet')}
                className="text-black dark:text-white hover:opacity-80 transition"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
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
                <DropdownMenuTrigger className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 dark:focus:ring-offset-gray-800">
                  {!data?.user.image ? (
                    <div className="p-1 border-2 rounded-full border-black dark:border-white">
                      <UserRound className="w-6 h-6" />
                    </div>
                  ) : (
                    <UserImage image={data?.user.image} />
                  )}
                </DropdownMenuTrigger>

                <DropdownMenuContent className="mt-2 bg-white dark:bg-neutral-950 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <DropdownMenuLabel className="flex items-center px-4 py-2">
                    <div className="flex-shrink-0 mr-3">
                      {!data?.user.image ? (
                        <div className="p-1 border-2 rounded-full border-black dark:border-white">
                          <UserRound className="w-6 h-6" />
                        </div>
                      ) : (
                        <UserImage image={data?.user.image} />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{data?.user?.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{data?.user?.email}</div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {dropDownData.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      onClick={() => router.push(item.href)}
                      className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                    >
                      <span className="mr-2">{item.icon}</span>
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
                      className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center"
                    >
                      <LogOut size={15} className="mr-2" />
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
