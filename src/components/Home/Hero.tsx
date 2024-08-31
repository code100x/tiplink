"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { FaGoogle } from 'react-icons/fa6'
import Image from 'next/image'
import Appbar from '../Appbar/Appbar'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import styled from "styled-components";

const Hero = () => {
  const session = useSession();
  const router = useRouter();
  return (
    <section className="items-center md:mt-40 mt-28">
      <Appbar />
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
          {!session?.data?.user ?
            <Button className="pl-2 py-6 text-sm md:text-base" onClick={async () => {
              await signIn("google")
            }} >
              <span className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-lg border bg-white text-black">
                  <FaGoogle />
                </div>
                Sign up with Google
              </span>
            </Button>
            :
            <StyledWrapper>
              <button className='flex gap-4 justify-center items-center' onClick={()=>{
            router.push("/wallet");
          }}>
                <svg
                  className="size-8"
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
                <span>
                  Go to wallet
                </span>

                {[...Array(6)].map((_, i) => (
                  <div className={`star-${i + 1}`} key={i}>
                    <StyledSVG
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 784.11 815.53"
                    >
                      <g>
                        <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
                      </g>
                    </StyledSVG>
                  </div>
                ))}
              </button>
            </StyledWrapper>
          }
        </div>
      </div>
    </section>
  )
}

const StyledWrapper = styled.div`
  button {
  position: relative;
  padding: 12px 35px;
  background: #fff;
  font-size: 17px;
  font-weight: 500;
  color: #181818;
  border: 1px solid #97988a;
  border-radius: 12px;
  box-shadow: 0 0 2px #97988a;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.star-1 {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s ease;
}

button:hover {
  background: #fff;
  color: #000;
  border: 1px solid #525254;
  box-shadow: 0 0 25px #525254;
}

button:hover .star-1 {
  position: absolute;
  top: -80%;
  left: -30%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #fff);
  z-index: 2;
}

button:hover .star-2 {
  position: absolute;
  top: -25%;
  left: 10%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fff);
  z-index: 2;
}

button:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 25%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fff);
  z-index: 2;
}

button:hover .star-4 {
  position: absolute;
  top: 30%;
  left: 80%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 10px #fff);
  z-index: 2;
}

button:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 115%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fff);
  z-index: 2;
}

button:hover .star-6 {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fff);
  z-index: 2;
}

.fil0 {
  fill: #fffdef;
}`
const StyledSVG = styled.svg`
  shape-rendering: geometricPrecision;
  text-rendering: geometricPrecision;
  fill-rule: evenodd;
  clip-rule: evenodd;
  .fil0 {
    fill: #000;
}
`
export default Hero