'use client'

import achmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const LogoTicker = () => {
    return (
        <div className='my-20 max-w-[1000px] mx-auto px-4'>
            <div className=' bg-white'>
                <div className='px-5 md:px-10 md:flex items-center justify-center'>
                    <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
                        <motion.div className='flex gap-14 flex-none pr-14' animate={{
                            translateX: '-50%',
                        }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            }}
                        >
                            <Image src={achmeLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                            <Image src={quantumLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                            <Image src={echoLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                            <Image src={celestialLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                            <Image src={pulseLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                            <Image src={achmeLogo.src} alt="Acme Logo" className='logo-ticker-img' width={100} height={100} />
                            <Image src={quantumLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                            <Image src={echoLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                            <Image src={celestialLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                            <Image src={pulseLogo.src} alt="Acme Logo" className='logo-ticker-img' width={200} height={200} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoTicker