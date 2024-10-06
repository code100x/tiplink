'use client'
import Link from 'next/link'
import Logo from '../icons/Logo'
import { Menu } from 'lucide-react'
import LoginWithGoogleButton from '../ui/login-with-google'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaWallet } from 'react-icons/fa6'
import { useWallet } from '@solana/wallet-adapter-react'
import ProfileDropDown from '../common/ProfileDropDown'
import { useSession } from 'next-auth/react'

const Appbar = () => {
  const { data, status } = useSession()
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const { connected } = useWallet()
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      const fadeStart = 0
      const fadeEnd = windowHeight * 0.4

      if (scrollPosition <= fadeStart) {
        setOpacity(1)
      } else if (scrollPosition >= fadeEnd) {
        setOpacity(0)
      } else {
        setOpacity(1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="w-screen py-4 border-b md:border-none fixed flex top-0 left-0 right-0 bg-[#000000] z-50"
      style={{ opacity: opacity }}
    >
      <div className="container flex justify-between items-center px-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <div className="h-10 w-10 bg-white rounded-lg inline-flex justify-center items-center">
            <Logo className="h-8 w-8" fill="#000000" />
          </div>
        </div>

        {/* Centered navigation links */}
        <div className="flex-grow hidden md:block">
          <nav className="flex justify-center gap-8 text-sm">
            <Link
              className="text-[#848484] hover:text-white transition"
              href="#"
            >
              Products
            </Link>
            <Link
              className="text-[#848484] hover:text-white transition"
              href="#"
            >
              API & Docs
            </Link>
            <Link
              className="text-[#848484] hover:text-white transition"
              href="#"
            >
              FAQ
            </Link>
            <Link
              className="text-[#848484] hover:text-white transition"
              href="#"
            >
              Company
            </Link>
            <Link
              className="hidden lg:block text-[#848484] hover:text-white transition"
              href="#"
            >
              Blogs
            </Link>
          </nav>
        </div>

        {/* Login button on the right */}
        <div className="flex items-center gap-4">
          {status === 'authenticated' && data ? (
            <button
              onClick={() => {
                router.push('/wallet')
              }}
            >
              <svg
                className="size-10 text-white"
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
          ) : (
            <>
              {isMounted && (
                <WalletMultiButton
                  style={{
                    backgroundColor: 'black',
                    height: '40px',
                    borderRadius: '8px',
                  }}
                  endIcon={<FaWallet />}
                />
              )}
              {status === 'unauthenticated' && <LoginWithGoogleButton />}
            </>
          )}
          <span className="md:hidden">
            <Menu />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Appbar
