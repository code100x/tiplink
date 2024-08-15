import React from 'react'
import { Button } from '@/components/ui/button'
import { FaGoogle } from 'react-icons/fa6'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="items-center md:mt-40 mt-28">
      <div className=" container mx-auto px-4">
          <Image
            src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236916/solana_eoqyva.svg"
            alt=""
            className="-z-10 absolute drop-shadow-lg -rotate-12 left-[10%] top-[25%] md:left-[20%] md:top-[15%] lg:left-[30%] lg:top-[18%]"
            width={70}
            height={70}
          />
          <Image
            src="https://res.cloudinary.com/dtc9ysbnn/image/upload/v1723236912/eth_la99pn.svg"
            alt=""
            className="-z-10 absolute rotate-12 drop-shadow-lg right-[8%] top-[25%] md:right-[15%] md:top-[32%] lg:right-[25%] lg:top-[55%]"
            width={70}
            height={70}
          />
        <div className="bg-slate-400/10 backdrop-blur-[01px] py-5 rounded-2xl lg:w-auto max-w-[85%] mx-auto">
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
            <Button className="pl-2 py-6 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-lg border bg-white text-black">
                  <FaGoogle />
                </div>
                Sign up with Google
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
