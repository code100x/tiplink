import React from 'react'
import { Button } from '@/components/ui/button'
import { FaGoogle } from 'react-icons/fa6'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation";

const Hero = () => {
  const { data } = useSession()
  const router = useRouter();
  return (
    <section className="items-center md:mt-40 mt-28">
      <div className="container mx-auto px-4">
        <Image
          src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/solana_eoqyva.svg"
          alt=""
          className="relative left-[10%] lg:left-[30%]"
          width={50}
          height={50}
        />
        <Image
          src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236912/eth_la99pn.svg"
          alt=""
          className="absolute md:right-[20%] right-[10%] lg:right-[28%] rotate-12 md:top-[26%] top-[34%] lg:top-[34%]"
          width={50}
          height={50}
        />
        <div className="max-w-[600px] lg:max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-black/70 text-transparent bg-clip-text text-center">
            Secure Your Crypto with Our Wallet Generator
          </h1>

          <p className="text-lg tracking-tighter text-black/70 text-center mt-5">
            Generate a secure, private crypto wallet in minutes with our
            easy-to-use tool <br className="hidden md:block" /> Powered by
            Google Auth for seamless, secure access.
          </p>
        </div>
        <div className="flex items-center justify-center mt-5">
          {
            data && data?.user ? (
              <Button className="py-6 text-sm md:text-base">
                <span className="flex items-center gap-2">
                  Dashboard
                </span>
              </Button>
            ) : (
              <Button className="pl-2 py-6 text-sm md:text-base"
                onClick={async () => await signIn('google', { callbackUrl: '/wallet' })}
              >
                <span className="flex items-center gap-2">
                  <div className="px-3 py-2 rounded-lg border bg-white text-black">
                    <FaGoogle />
                  </div>
                  Sign up with Google
                </span>
              </Button>
            )
          }
        </div>
      </div>
    </section>
  )
}

export default Hero
